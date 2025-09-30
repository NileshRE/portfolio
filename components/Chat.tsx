"use client";
import useChat from "@/hooks/useChat";
import { quickQuestions } from "@/lib/constants";
import { respType, Status } from "@/lib/interface";
import {
  Bot,
  BotMessageSquare,
  RefreshCcw,
  SendHorizonal,
  User,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Chat = () => {
  const {
    messages,
    input,
    handleSend,
    setShowChat,
    showChat,
    handleCloseChat,
    handleInput,
    handleKeyDown,
    handleChatRefresh,
    status,
    messagesEndRef,
    parseTextWithLinks,
  } = useChat();

  return (
    <div className="fixed bottom-8 right-4 md:bottom-16 md:right-8 z-50">
      <div className="flex items-end gap-1">
        {showChat ? null : (
          <span className="border p-2 rounded-full border-gray-600 dark:border-gray-100 text-xs backdrop-blur-md rounded-tr-lg">
            Ask about Nilesh!
          </span>
        )}

        {/* Chat popover */}
        <Popover open={showChat} onOpenChange={setShowChat}>
          <PopoverTrigger asChild>
            <button
              className={`inline-block p-3 rounded-full ${
                !showChat
                  ? "bg-gray-600 dark:bg-gray-100"
                  : "border backdrop-blur-md"
              }`}
            >
              {showChat ? (
                <X className="size-6 text-gray-500 dark:text-gray-400" />
              ) : (
                <BotMessageSquare className="size-6 text-gray-200 dark:text-gray-700" />
              )}
            </button>
          </PopoverTrigger>

          <PopoverContent
            side="top"
            align="end"
            className="w-[280px] min-[321px]:w-[344px] md:w-[440px] p-0 rounded-xl overflow-hidden -mb-16"
            sideOffset={0}
          >
            <div className="flex items-center justify-between px-3 py-2 bg-background border-b">
              <h3 className="text-sm font-semibold py-2">Ask about Nilesh!</h3>
              <p className="flex items-center gap-4">
                <span onClick={handleChatRefresh}>
                  <RefreshCcw className="size-5 cursor-pointer text-gray-500 hover:text-gray-200" />
                </span>
                <span onClick={handleCloseChat}>
                  <X className="size-5 cursor-pointer text-gray-500 hover:text-gray-200" />
                </span>
              </p>
            </div>

            {/* Messages area */}
            <div className="h-96 overflow-y-auto p-3 space-y-2 bg-background">
              {messages.map((msg) => {
                const hasMultipleLine =
                  typeof msg.text === "string" && msg.text.includes("*");
                const lines = hasMultipleLine
                  ? msg.text
                      .split("*")
                      .map((line) => line.trim())
                      .filter((line) => line.length > 0)
                  : [];

                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 ${
                      msg.sender === respType.BOT
                        ? "self-start"
                        : "self-end justify-end"
                    }`}
                  >
                    <span className="inline-block border p-1 rounded-full">
                      {msg.sender === respType.BOT ? <Bot /> : <User />}
                    </span>

                    {/* Chat bubble */}
                    <div
                      className={`px-3 py-2 rounded-lg text-sm break-words ${
                        msg.sender === respType.BOT
                          ? "bg-background text-gray-900 dark:text-gray-100"
                          : "bg-blue-500 text-white"
                      } max-w-[80%]`}
                    >
                      {hasMultipleLine ? (
                        <ul className="list-disc list-inside space-y-1">
                          {lines.map((line, idx) => (
                            <li key={idx}>{parseTextWithLinks(line)}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>{parseTextWithLinks(msg.text)}</span>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Show loading as a bot message inside messages area */}
              {status === Status.LOADING && (
                <div className="max-w-full px-3 py-2 rounded-lg text-sm bg-background text-gray-500 self-start flex items-center gap-2">
                  <span className="inline-block border p-1 rounded-full">
                    <Bot />
                  </span>
                  <span className="animate-pulse">Thinking...</span>
                </div>
              )}

              {/* Show quick questions only if no messages and idle */}
              {messages.length === 0 && status === Status.IDLE && (
                <div className="flex flex-col items-center justify-center gap-2">
                  {quickQuestions?.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 border-t px-3 py-2 bg-background">
              <textarea
                required
                value={input}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Nilesh achievements and skills..."
                className="flex-1 h-10 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
             bg-background text-sm focus:outline-none placeholder:text-[10px] resize-none break-words"
              />

              <Button
                size="icon"
                variant="default"
                onClick={() => handleSend()}
                type="submit"
                className={`${
                  status === Status.LOADING ? "cursor-wait" : "cursor-pointer"
                }`}
              >
                <SendHorizonal />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Chat;
