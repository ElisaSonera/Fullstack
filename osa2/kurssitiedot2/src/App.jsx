import Course from "./components/Course";

/*Kuvittelin heti tehtävän 2.1 alussa, että kaikki komponentit
pitää olla omissa moduuleissaan, ja hämmennyin kun tehtävässä 2.5
sanottiinkin, että määrittele komponentti Course omana moduulinaan...
No, mulla on ollu kaikki komponentit omina moduuleinaan alusta alkaen, 
että toivottavasti kelpaa */

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  );
};

export default App;
