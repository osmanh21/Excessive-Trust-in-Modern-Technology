const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
    apiKey : "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" 
});
 

app.post("/quiz-feedback", async (req, res) => {
    try {
        const { userId, score, totalQuestions } = req.body;

        console.log("Received request with data:", req.body);

        const scorePercentage = (score / (totalQuestions * 5)) * 100;

        const feedbackPrompt = `
        User ID: ${userId}\n
        Quiz Performance Summary:\n
        Total Questions: ${totalQuestions}\n
        Score: ${score}/${totalQuestions * 5}\n
        Score Percentage: ${scorePercentage}%\n
        Feedback Prompt:\n
        Please provide personalized feedback for this user/student based on their performance in the quiz.\n
        Ensure that the feedback is concise and does not exceed 500 characters.\n
        `;
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", 
            messages: [{ "role": "user", "content": feedbackPrompt }],
            max_tokens: 100
        });
        console.log('Response from LLM:', response); //for testing purpose

        if (response && response.choices && response.choices.length > 0) {
            res.send(response.choices[0].message.content);
        } else {
            res.status(500).send("No response received from LLM");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});



const port = 9090;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
