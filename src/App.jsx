import React from "react";

const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Content = ({ part, excersises }) => {
  return (
    <>
      <p>
        {part} {excersises}
      </p>
    </>
  );
};

const Total = ({ exercise1, exercise2, exercise3 }) => {
  let totalExcersises = exercise1 + exercise2 + exercise3;
  return (
    <>
      <h2>Total de Ejercicios {totalExcersises}</h2>
    </>
  );
};

export const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <>
      <Header course={course} />
      <Content part={part1} excersises={exercises1} />
      <Content part={part2} excersises={exercises2} />
      <Content part={part3} excersises={exercises3} />
      <Total
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </>
  );
};
