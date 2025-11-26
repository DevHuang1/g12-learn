import React, { useState } from "react";

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
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "1.5rem" }}>
          <p style={{ fontWeight: "bold" }}>
            {q.id}. {q.question}
          </p>
          <textarea
            value={inputs[q.id] || ""}
            onChange={(e) => handleChange(q.id, e.target.value)}
            rows={3}
            style={{
              width: "100%",
              padding: "0.5rem",
              fontSize: "1rem",
              marginTop: "0.25rem",
              resize: "vertical",
            }}
            placeholder="Enter your sentence here..."
          />
          {submitted && (
            <p style={{ marginTop: "0.5rem" }}>
              <strong>Expected Answer:</strong> {q.answer}
            </p>
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#1e40af",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
