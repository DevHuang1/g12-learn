import "./Questions.css";

const Questions = () => {
  return (
    <div className="ques-container">
      <p className="tophead">
        How to use? Choose the desired Unit, Lesson and Question type and then
        press the generate button to start learning{" "}
      </p>
      <span className="head">Available Units: </span>

      <select className="select-head">
        <option>English</option>
      </select>
    </div>
  );
};

export default Questions;
