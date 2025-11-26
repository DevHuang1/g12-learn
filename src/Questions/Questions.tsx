import "./Questions.css";

const Questions = () => {
  return (
    <div className="ques-container">
      <p className="tophead">
        How to use? Choose the desired Subject, Unit and Lesson and then press
        the generate button to start learning{" "}
      </p>
      <span className="head">Available Subjects: </span>

      <select className="select-head">
        <option>English</option>
      </select>
    </div>
  );
};

export default Questions;
