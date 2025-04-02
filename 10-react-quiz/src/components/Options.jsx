import PropTypes from "prop-types";

export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  console.log(hasAnswered);
  return (
    <div>
      {question.options.map((option, index) => (
        <button
          className={`option 
        ${index === answer ? "answer" : ""}       
     ${
       hasAnswered
         ? question.correctOption === index
           ? "correct-answer"
           : "false-answer"
         : ""
     }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => {
            dispatch({ type: "answered", payload: { index } });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  question: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  answer: PropTypes.number.isRequired,
};
