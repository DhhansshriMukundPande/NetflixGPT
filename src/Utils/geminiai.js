





const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.REACT_APP_GEMINIAI_KEY 
if (!apiKey) {
  console.error("API key is missing! Please check your environment variables.");
}
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HATE,
    threshold: HarmBlockThreshold.BLOCK_NONE, // Do not block for hate category
  },
  {
    category: HarmCategory.SELF_HARM,
    threshold: HarmBlockThreshold.BLOCK_NONE, // Do not block for self-harm
  },
  {
    category: HarmCategory.SEXUAL_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE, // Do not block for sexual content
  },
  {
    category: HarmCategory.VIOLENCE,
    threshold: HarmBlockThreshold.BLOCK_NONE, // Do not block for violence
  },
];


async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  // console.log(result.response.text());
  const responseText = result.response.text();
  // console.log('Type of responseText:', typeof responseText);
  return responseText
}

export default run;