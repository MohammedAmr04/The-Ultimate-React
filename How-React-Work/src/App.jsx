import PropTypes from "prop-types";
import { useState } from "react";

const content = [
  {
    id: 1,
    question: "What is React and why is it used?",
    options: [
      "A JavaScript framework for backend development",
      "A library for building user interfaces",
      "A database management tool",
      "A CSS framework",
    ],
    answer: "A library for building user interfaces",
  },
  {
    id: 2,
    question: "What is JSX in React?",
    options: [
      "A new programming language",
      "A syntax extension for JavaScript",
      "A type of database",
      "A built-in React hook",
    ],
    answer: "A syntax extension for JavaScript",
  },
  {
    id: 3,
    question: "Which hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    id: 4,
    question:
      "How do you pass data from a parent component to a child component?",
    options: [
      "Using Redux",
      "Using Context API",
      "Using Props",
      "Using useEffect",
    ],
    answer: "Using Props",
  },
  {
    id: 5,
    question: "What is the purpose of the useEffect hook?",
    options: [
      "To fetch data and handle side effects",
      "To manage component state",
      "To create a new component",
      "To define routes in React",
    ],
    answer: "To fetch data and handle side effects",
  },
];
import "./App.css";
export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="app">
      <div className="tabs">
        {content.map((item) => {
          return (
            <Tab
              id={item.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              key={item.id}
            />
          );
        })}
      </div>
      <ContentText activeTab={activeTab} key={activeTab} />
    </div>
  );
}
const ContentText = ({ activeTab }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [answerCount, setAnswerCount] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const handleShowAnswer = () => {
    if (!showAnswer) {
      setAnswerCount((prev) => prev + 1);
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 500);
      setIsAnswerVisible(true);
    } else {
      setIsAnswerVisible(false);
      setTimeout(() => setShowAnswer(false), 300);
    }
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="content">
      <div className="question">{content.at(activeTab - 1).question}</div>
      <div className="button-container">
        <button type="button" role="button" onClick={handleShowAnswer}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>
        <span className={`counter ${isPulsing ? "pulse" : ""}`}>
          Times shown: {answerCount}
        </span>
      </div>
      {isAnswerVisible && (
        <div className="answer">{content.at(activeTab - 1).answer}</div>
      )}
    </div>
  );
};

const Tab = ({ id, activeTab, setActiveTab }) => {
  return (
    <div
      className={activeTab === id ? "tab active" : "tab"}
      onClick={() => setActiveTab(id)}
    >
      Tab {id}
    </div>
  );
};

Tab.propTypes = {
  id: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};
ContentText.propTypes = {
  activeTab: PropTypes.number.isRequired,
};
