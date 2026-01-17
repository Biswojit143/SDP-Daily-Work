import { useState } from "react";
import questions from "./data";
import "./index.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: option,
    });
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="container">
      <h1>📝 Online Test Writing Demo</h1>

      {!submitted ? (
        <div className="card">
          <h2>
            Question {currentQuestion + 1} of {questions.length}
          </h2>

          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className="option">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedAnswers[currentQuestion] === option}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}

          <div className="buttons">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            {currentQuestion < questions.length - 1 ? (
              <button onClick={handleNext}>Next</button>
            ) : (
              <button onClick={handleSubmit}>Submit Test</button>
            )}
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>✅ Test Completed</h2>
          <p>
            Your Score: {calculateScore()} / {questions.length}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
