import React, { useState } from "react";
import "./module.postAnswer.css";

function PostAnswer() {
  const [isAnswerPosted, setIsAnswerPosted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
//send ansswer to server/db
    setIsAnswerPosted(true);
  };

  return (
    <section className="answer_container">
      <form onSubmit={handleSubmit}>
        <textarea className="answer_description" placeholder="Your Answer..." />
        <button type="submit" name="description" className="answer_button">
          Post Answer
        </button>
      </form>

      {isAnswerPosted && (
        <div className="post-answer-success">
          Your answer has been posted successfully!
        </div>
      )}
    </section>
  );
}

export default PostAnswer;
