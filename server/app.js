const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const GoogleGenerativeAI = require('@google/generative-ai').GoogleGenerativeAI;
const PORT = process.env.PORT || 5000;
const gemini_api_key = process.env.GEMINI_API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};
const geminiModel = googleAI.getGenerativeModel({
  model: 'gemini-pro',
  geminiConfig,
});
async function generateStory(prompt) {
  const storyPrompt = `Generate a children's story for kids aged 10 and above based on the given theme. The story should incorporate eco-friendly elements, sustainability concepts, and green actions in a natural and engaging way.
   
   Do not include any additional explanations, disclaimers,just give me the story.
    
  The story theme is: ${prompt}" `;

  try {
    const storyResult = await geminiModel.generateContent(storyPrompt);
    const storyResponse = await storyResult.response;
    const story = storyResponse.text();

    return story;
  } catch (error) {
    console.error('GEMINI Error:', error.message);
    return undefined;
  }
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('SERVER is running!');
});
app.post('/generate-story', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({
      success: false,
      message: 'Prompt is required!',
    });
  }
  try {
    const geminiResponse = await generateStory(prompt);
    if (!geminiResponse) {
      return res.status(500).json({
        success: false,
        message: 'Failed to generate story!',
      });
    }
    return res.json({
      success: true,
      message: 'Story generated successfully!',
      data: geminiResponse,
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
