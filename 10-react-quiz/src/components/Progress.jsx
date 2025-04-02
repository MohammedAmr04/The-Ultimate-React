import proptypes from "proptypes"; //-

export default function Progress({ index, maxProgress, maxPoints, points }) {
  return (
    <header className="my-3">
      <progress max={maxProgress} value={index} />
      <div className="flex justify-around ">
        <div>
          Question <strong>{index + 1}</strong>/{maxProgress}
        </div>
        <div>
          {" "}
          <strong>{points}</strong>/{maxPoints}
        </div>
      </div>
    </header>
  );
}
Progress.propTypes = {
  index: proptypes.number.isRequired,
  maxProgress: proptypes.number.isRequired,
  maxPoints: proptypes.number.isRequired,
  points: proptypes.number.isRequired,
};
