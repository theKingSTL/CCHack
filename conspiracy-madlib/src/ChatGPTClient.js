import OpenAI from "openai";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;


class ChatGPTClient {
  constructor() {
    this.openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });
  }
async sendPrompt(promptText) {
  try {
    const res = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: promptText }],
    });

    const answer = res.choices[0].message.content;
    return answer;
  } catch (err) {
    console.error('Error fetching from OpenAI:', err.message);
    return null;
  }
}
}
export default ChatGPTClient;