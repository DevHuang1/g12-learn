import { useState } from "react";
import db from "../db/data";
import "./Examsheet.css";

interface MyComponentProps {
  lesson: string;
}

const Examsheet: React.FC<MyComponentProps> = ({ lesson }) => {
  const [inputAnswers, setInputAnswers] = useState<{ [id: number]: string }>(
    {}
  );
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const selectedDB = db.quesDB[lesson];

  if (!selectedDB) return <p>No questions found for: {lesson}</p>;
  const handleChange = (id: number, value: string) => {
    setInputAnswers((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let correct = 0;
    selectedDB.forEach((s) => {
      if ((inputAnswers[s.id] || "").trim() === s.answer) {
        correct += 1;
      }
    });
    setScore(correct);
    setSubmitted(true);
  };
  return (
    <div>
      {" "}
      <span className="heading">{lesson} | </span>
      <span className="marks">
        Marks {score !== null ? score : 0}/{selectedDB.length}
      </span>
      <form onSubmit={handleSubmit}>
        {" "}
        <ol className="quesContainer">
          {selectedDB.map((q) => {
            const userAnswer = inputAnswers[q.id] || "";
            const correct = userAnswer.trim() === q.answer;
            const className = submitted
              ? correct
                ? "correct"
                : "incorrect"
              : "";

            return (
              <li key={q.id}>
                <p>{q.question}</p>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className={className}
                />
              </li>
            );
          })}
        </ol>
        <input type="submit" value="submit" />
      </form>
      {submitted && (
        <p className="result">
          Score: {score}/{selectedDB.length}
        </p>
      )}
    </div>
  );
};
export default Examsheet;
