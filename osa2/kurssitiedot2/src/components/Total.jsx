const Total = ({ total }) => {
  console.log(total);
  const sum = total.reduce((sum, exercise) => sum + exercise.exercises, 0);
  console.log(sum);
  return (
    <div>
      <p>
        <b>total of {sum} exercises</b>
      </p>
    </div>
  );
};

export default Total;
