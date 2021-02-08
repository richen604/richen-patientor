import React from "react";
import { CoursePart } from "../App";


export const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };


const Part: React.FC<{ part: CoursePart }> = ({ part }) => {
  switch (part.name) {
    case "Fundamentals":
      return (
        <div>
          <p>
            <strong>{part.name}</strong>
          </p>
          {part.description && (
            <p>
              <em>{part.description}</em>
            </p>
          )}
          <p>
            Exercises: <strong>{part.exerciseCount}</strong>
          </p>
        </div>
      );
    case "Using props to pass data":
      return (
        <div>
          <p>
            <strong>{part.name}</strong>
          </p>
          <p>
            Exercises: <strong>{part.exerciseCount}</strong>
          </p>
          <p>
            Group Projects: <strong>{part.groupProjectCount}</strong>
          </p>
        </div>
      );
    case "Deeper type usage":
      return (
        <div>
          <p>
            <strong>{part.name}</strong>
          </p>
          {part.description && (
            <p>
              <em>{part.description}</em>
            </p>
          )}
          <p>
            Exercises: <strong>{part.exerciseCount}</strong>
          </p>
          <p>
            Submission Link:{" "}
            <a href={part.exerciseSubmissionLink}>
              {part.exerciseSubmissionLink}
            </a>
          </p>
        </div>
      );
    case "Ted Talk for Centering HTML":
      return (
        <div>
          <p>
            <strong>{part.name}</strong>
          </p>

          <p>
            <em>{part.description}</em>
          </p>

          <p>
            Exercises: <strong>{part.exerciseCount}</strong>
          </p>

        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
