import React, { useState } from "react";
import "./Questions.css";

type Question = {
  id: number;
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Write a sentence using 'go' in past tense.",
    answer: "I went to the park yesterday.",
  },
  {
    id: 2,
    question: "Make a sentence using the word 'beautiful'.",
    answer: "The sunset was beautiful.",
  },
  {
    id: 3,
    question: "Use 'because' in a sentence.",
    answer: "I stayed home because it was raining.",
  },
];

const Questions: React.FC = () => {
  const [inputs, setInputs] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: number, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="questions-container">
      {questions.map((q) => (
        <div key={q.id} className="question-card">
          <p className="question-text">
            {q.id}. {q.question}
          </p>
          <textarea
            value={inputs[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
            placeholder="Enter your sentence here..."
          />
          {submitted && (
            <p className="expected-answer">
              <strong>Expected:</strong> {q.answer}
            </p>
          )}
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Questions;
