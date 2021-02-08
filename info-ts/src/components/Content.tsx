import React from "react";

import { CoursePart } from "../App";
import Part from "./Part";

const Content: React.FC<{ courseParts: CoursePart[] }> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  );
};

export default Content;
