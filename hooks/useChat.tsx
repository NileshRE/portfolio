import { useEffect, useRef, useState } from "react";

import { ChatMessage, respType, Status } from "@/lib/interface";
import { askWebsite } from "@/lib/server/api";
import Link from "next/link";

const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showChat, setShowChat] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.key === "Enter" && handleSend();
  };

  const handleSend = async (text?: string) => {
    const finalText = text || input;
    if (!finalText.trim()) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: respType.USER,
      text: finalText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      setStatus(Status.LOADING);
      const aiResponse = await askWebsite(finalText);

      const aiMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: respType.BOT,
        text: aiResponse,
      };

      setStatus(Status.DATA);
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        sender: respType.BOT,
        text: "Error fetching response",
      };
      setMessages((prev) => [...prev, errorMessage]);
      setStatus(Status.IDLE);
    }
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleChatRefresh = () => {
    setMessages([]);
    setStatus(Status.IDLE);
  };
  const parseTextWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, idx) =>
      urlRegex.test(part) ? (
        <Link
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline !text-blue-500 hover:!text-blue-700"
        >
          {part}
        </Link>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, status]);

  return {
    messages,
    showChat,
    setShowChat,
    input,
    handleInput,
    handleKeyDown,
    handleSend,
    handleCloseChat,
    handleChatRefresh,
    status,
    messagesEndRef,
    parseTextWithLinks,
  };
};

export default useChat;
