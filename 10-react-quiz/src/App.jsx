import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import Button from "./components/Button";
import FinishScreen from "./components/FinishScreen";
import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";

const SECS_PER_QUESTION = 10;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload.data, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "answered":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload.index,
        points:
          question.correctOption === action.payload.index
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, answer: null, index: state.index + 1 };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore: Math.max(state.highscore, state.points),
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
  } = state;

  const maxNumQuestions = questions.length;
  const maxPoints = questions.reduce((acc, q) => acc + q.points, 0);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: { data } }))
      .catch((error) => {
        console.error("Fetching error:", error);
        dispatch({ type: "dataFailed" });
      });
  }, []);

  return (
    <div className="mx-auto w-fit py-2 px-1.5 flex justify-center flex-col items-center gap-5">
      <Header />

      {status === "ready" && (
        <StartScreen dispatch={dispatch} numQuestions={maxNumQuestions} />
      )}
      {status === "error" && <p>Error loading questions.</p>}

      {status === "active" && (
        <div className="w-full max-w-[500px]">
          <Progress
            maxProgress={maxNumQuestions}
            index={index}
            maxPoints={maxPoints}
            points={points}
          />
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
          <Footer>
            <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
            <Button
              dispatch={dispatch}
              maxNumQuestions={maxNumQuestions}
              index={index}
            />
          </Footer>
        </div>
      )}

      {status === "finished" && (
        <FinishScreen
          dispatch={dispatch}
          maxPoints={maxPoints}
          highscore={highscore}
          points={points}
        />
      )}
    </div>
  );
}
