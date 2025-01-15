import Part from "./Part";

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props} />
    </div>
  );
};

export default Content;
