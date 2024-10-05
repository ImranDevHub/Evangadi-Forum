const connection = require("../database/db.config");
const { StatusCodes } = require("http-status-codes");
// const allQuestions = function (req, res) {
//   res.send('All Questions');
// };


// ***************************************//

// Function to get all questions
const allQuestions = async (req, res) => {
  try {
    // Query to get all questions with their user details
    const [questions] = await connection.query(
      `SELECT q.question_id, q.title, q.description AS content, u.username AS user_name, q.created_at
       FROM questions q 
       JOIN users u ON q.user_id = u.user_id`
    );

    // Handle case where no questions are found
    if (questions.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({
        error: "Not Found",
        message: "No questions found.",
      });
    }

    // Send the list of questions as the response
    res.status(StatusCodes.OK).json({ questions });
  } catch (error) {
    console.error(error.message);

    // Handle server error
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred.",
    });
  }
};



module.exports = allQuestions;