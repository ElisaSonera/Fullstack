const Part = (props) => {
  console.log(props);
  const { parts } = props.part;
  console.log(parts);
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};

export default Part;
