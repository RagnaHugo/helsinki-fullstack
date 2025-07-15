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
  const total = course.parts.reduce((value, element) => {
    return value + element.exercises;
  }, 0);
  return <strong>total of {total} exercises</strong>;
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
      {parts.map((value) => (
        <Part key={value.id} part={value.name} exercise={value.exercises} />
      ))}
    </>
  );
};

export default Course;
