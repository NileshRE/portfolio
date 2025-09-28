"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { links } from "../constants";

export async function askWebsite(question: string): Promise<string> {
  if (!process.env.GEMINI_API_KEY) throw new Error("API key not found!");
  if (!process.env.WEBSITE_URL) throw new Error("Website url not found!");

  const url = process.env.WEBSITE_URL;

  // 1️⃣ Fetch website HTML
  const res = await fetch(url);
  const html = await res.text();

  // 2️⃣ Strip HTML tags for the visible content
  const textContent = html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // 3️⃣ Convert links object into a string context for AI
  const linksText = Object.entries(links)
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ");

  const fullContent = `${textContent} \n\nLinks: ${linksText}`;

  // 4️⃣ Initialize Gemini
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const chatModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are an assistant that answers questions based ONLY on the following website content and links:

${fullContent}

Question: ${question}
`;

  const result = await chatModel.generateContent(prompt);

  return result.response.text();
}
