import proptypes from "proptypes"; //-
export default function Button({ dispatch, index, maxNumQuestions }) {
  if (index === maxNumQuestions - 1) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "finished" })}>
        Finish
      </button>
    );
  }
  if (index < maxNumQuestions)
    return (
      <button
        className="btn"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
}
Button.propTypes = {
  maxNumQuestions: proptypes.number.isRequired,
  dispatch: proptypes.func.isRequired,
  index: proptypes.number.isRequired,
};
