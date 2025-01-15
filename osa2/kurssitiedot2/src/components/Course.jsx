import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

//Käy läpi kurssilistan ja antaa tiedot yksitellen
//alkuperäiselle Course-kompoentille (nyk. CourseContent)
const Course = ({ courses }) => {
  console.log("Courses: ", courses, typeof courses);

  return (
    <div>
      {courses.map((course) => (
        <CourseContent key={course.id} course={course} />
      ))}
    </div>
  );
};

//alkuperäinen Course komponentti
const CourseContent = ({ course }) => {
  console.log("Course: ", course, typeof course);

  return (
    <div>
      <Header h2={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default Course;
