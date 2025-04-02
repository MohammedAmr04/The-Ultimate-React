import proptypes from "proptypes"; //-

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start font-bold text-center">
      <h2 className="text-4xl mb-3.5 ">Welcome to The React Quiz!</h2>
      <h3 className="text-2xl">
        {numQuestions} questions to test your React mastery
      </h3>
      <button
        className="btn mt-4 mx-auto rester font-normal"
        onClick={() => dispatch({ type: "start" })}
      >
        {`Let's start`}
      </button>
    </div>
  );
}

export default StartScreen;

StartScreen.propTypes = {
  numQuestions: proptypes.number.isRequired,
  dispatch: proptypes.func.isRequired,
};
