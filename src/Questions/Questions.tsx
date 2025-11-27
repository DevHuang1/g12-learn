import { useState } from "react";
import db from "../db/data";
import { selectType } from "../db/types";
import "./Questions.css";
import Examsheet from "../Examsheet/Examsheet";

const Questions = () => {
  const units: string[] = db.selectUnits.map((u: selectType) => u.unit);

  const [selectedUnit, setSelectedUnit] = useState<string>(units[0]);
  const defaultLessons =
    db.selectUnits.find((u) => u.unit === units[0])?.lessons || [];
  const [lessons, setLessons] = useState<string[]>(defaultLessons);
  const [selectedLesson, setSelectedLesson] = useState<string>(
    defaultLessons[0] || ""
  );

  const handleUnitChange = (unit: string) => {
    setSelectedUnit(unit);
    const foundObj = db.selectUnits.find((u) => u.unit === unit);
    setLessons(foundObj?.lessons || []);
    setSelectedLesson(foundObj?.lessons[0] || "");
  };
  return (
    <div className="ques-container">
      <p className="tophead">
        How to use? Choose the desired Unit, Lesson and Question type and then
        press the generate button to start learning{" "}
      </p>
      <span className="head">Available Units: </span>

      <select
        className="select-head"
        value={selectedUnit}
        onChange={(e) => handleUnitChange(e.target.value)}
      >
        {units.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>
      <br />
      <span className="head">Available Lessons: </span>

      <select
        className="select-head"
        value={selectedLesson}
        onChange={(e) => setSelectedLesson(e.target.value)}
      >
        {lessons.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
      <div className="examsheet">
        <Examsheet lesson={selectedLesson} />
      </div>
    </div>
  );
};

export default Questions;
