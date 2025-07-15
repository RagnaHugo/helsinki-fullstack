const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total course={course} />
    </>
  );
};

const Total = function ({ course }) {
  return (
    <strong>
      total of{" "}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises +
        course.parts[3].exercises}{" "}
      exercises
    </strong>
  );
};

const Header = ({ course }) => <h1>{course.name}</h1>;

const Part = ({ part, exercise }) => {
  return (
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
      <Part part={parts[3].name} exercise={parts[3].exercises} />
    </>
  );
};

export default Course;
