import db from "../db/data";
import "./Examsheet.css";

interface MyComponentProps {
  lesson: string;
}

const Examsheet: React.FC<MyComponentProps> = ({ lesson }) => {
  const selectedDB = db.quesDB[lesson];

  if (!selectedDB) return <p>No questions found for: {lesson}</p>;

  return (
    <div>
      {" "}
      <span className="heading">{lesson} | </span>
      <span className="marks">
        Marks {selectedDB.length}/{selectedDB.length}
      </span>
      <ol className="quesContainer">
        {selectedDB.map((q) => (
          <li key={q.id}>
            <p>{q.question}</p>
            <input type="text" />
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Examsheet;
