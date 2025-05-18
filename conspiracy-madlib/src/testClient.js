// testClient.js
import ChatGPTClient from './ChatGPTClient.js';

const chat = new ChatGPTClient();

const runTest = async () => {
  const result = await chat.sendPrompt("What is the capital of France?");
  console.log("ChatGPT says:", result);
};

runTest();
