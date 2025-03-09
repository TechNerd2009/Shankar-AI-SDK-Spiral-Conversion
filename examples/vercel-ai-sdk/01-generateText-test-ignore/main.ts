import { google  } from "@ai-sdk/google";
import { generateText } from "ai";

const model = google("models/gemini-2.0-flash");

export const answerMyQuestion = async (
  prompt: string,
) => {
  const { text } = await generateText({
    model,
    prompt,
  });

  return text;
};

const answer = await answerMyQuestion(
  "what is the chemical formula for dihydrogen monoxide?",
);

console.log(answer);