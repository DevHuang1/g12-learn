import { useEffect, useState } from "react";
import db from "../db/data";
import "./Examsheet.css";
function normalizeAnswer(text: string): string {
  return text
    .trim()
    .replace(/\s+([.,!?;:])/g, "$1")
    .replace(/([.,!?;:])(?=\S)/g, "$1 ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

interface MyComponentProps {
  lesson: string;
}
interface QuestionType {
  id: number;
  question: string;
  answer: string | string[];
}

const Examsheet: React.FC<MyComponentProps> = ({ lesson }) => {
  const [showKey, setShowKey] = useState(false);

  const [numQuestions, setNumQuestions] = useState(5);

  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const [inputAnswers, setInputAnswers] = useState<{ [id: number]: string }>(
    {}
  );
  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const selectedDB = db.quesDB[lesson] || [];

  useEffect(() => {
    const shuffled = [...selectedDB].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, numQuestions));
    setInputAnswers({});
    setScore(null);
    setSubmitted(false);
  }, [lesson, numQuestions, selectedDB.length]);
  const handleChange = (id: number, value: string) => {
    setInputAnswers((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let correct = 0;
    selectedDB.forEach((s) => {
      const userAnswer = (inputAnswers[s.id] || "").trim();
      const answers = Array.isArray(s.answer) ? s.answer : [s.answer];
      const normalizedUser = normalizeAnswer(userAnswer);
      const normalizedAnswers = answers.map((a) => normalizeAnswer(a));

      if (normalizedAnswers.includes(normalizedUser)) {
        correct += 1;
      }
    });
    setScore(correct);
    setSubmitted(true);
  };
  const checkKey = () => {
    if (!showKey) {
      setShowKey(true);
    } else {
      setShowKey(false);
    }
  };

  return (
    <div>
      {" "}
      <span className="heading">{lesson} | </span>
      <span className="amount">Amount of questions: </span>
      <select
        className="numSelect"
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
      >
        {[5, 10, 15].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      {selectedDB.length === 0 ? (
        <p>No questions found for: {lesson}</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            {" "}
            <ol className="quesContainer">
              {questions.map((q) => {
                const userAnswer = inputAnswers[q.id] || "";
                const correctAnswers = Array.isArray(q.answer)
                  ? q.answer
                  : [q.answer];
                const normalizedUser = normalizeAnswer(userAnswer);
                const normalizedCorrect = correctAnswers.map((a) =>
                  normalizeAnswer(a)
                );
                const correct =
                  submitted && normalizedCorrect.includes(normalizedUser);

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
              Score: {score}/{questions.length}
            </p>
          )}
          <button onClick={checkKey}>check/hide keys</button>
          {showKey && (
            <div className="answerKey">
              <p>Answer Key</p>
              <ol>
                {questions.map((m) => (
                  <li key={m.id}>
                    {Array.isArray(m.answer) ? m.answer.join(" / ") : m.answer}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default Examsheet;
