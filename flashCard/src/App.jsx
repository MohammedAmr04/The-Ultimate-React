import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

export default function App() {
  return (
    <>
      <FlashCard />
    </>
  );
}

function FlashCard() {
  const [selectedId, SetSelectedId] = useState(null);
  return (
    <ul className="flash-card m-4 p-5 list-unstyled d-flex flex-wrap gap-4 ">
      {questions.map((question) => {
        return (
          <li
            role="button"
            className={`card-item p-5 rounded-4 ${
              question.id === selectedId ? "bg-danger text-white" : null
            }`}
            key={question.id}
            onClick={() =>
              SetSelectedId(() =>
                question.id === selectedId
                  ? SetSelectedId(null)
                  : SetSelectedId(question.id)
              )
            }
          >
            <p className=" text-center">
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
