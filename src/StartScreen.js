function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to react quiz</h2>
      <p>{numQuestions} questions to test your React Mastery</p>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
