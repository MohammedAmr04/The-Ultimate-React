import proptypes from "proptypes"; //-
import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4 className="font-bold text-2xl">{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  ); //+
} //+

Question.propTypes = {
  //+
  question: proptypes.object.isRequired, //+
  dispatch: proptypes.func.isRequired, //+
  answer: proptypes.number.isRequired, //+
}; //+
