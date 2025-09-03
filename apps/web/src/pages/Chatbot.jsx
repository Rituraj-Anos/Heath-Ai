import { useState, useEffect, useRef } from "react";
import { Send, Loader2 } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm HealthSakhi AI. Ask me anything about health, symptoms, or medical advice. I'm here to help you with your healthcare questions.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const mockResponses = [
    "Thank you for your question. This is a demo response from HealthSakhi AI. In the full version, I would provide detailed medical guidance based on current medical literature.",
    "I understand your concern about your health. This is a sample AI response showing how HealthSakhi would analyze your symptoms and provide helpful information.",
    "Based on your question, I would normally provide personalized health advice. This demo version shows the interface - the real system will connect to our comprehensive medical knowledge base.",
    "Your health question is important to me. In the complete version, I would offer evidence-based recommendations and suggest when to consult with healthcare professionals.",
    "This is a demonstration of how HealthSakhi AI responds to health queries. The actual system will provide detailed, personalized medical information and guidance.",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim() || isLoading) return;
    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setTimeout(
      () => {
        const randomResponse =
          mockResponses[Math.floor(Math.random() * mockResponses.length)];
        const botMessage = {
          id: Date.now() + 1,
          text: randomResponse,
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      },
      1500 + Math.random() * 1000
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          HealthSakhi AI Assistant
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ask medical questions and get instant AI-powered health advice
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.sender === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      msg.sender === "user"
                        ? "text-cyan-100"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {msg.sender === "user" ? "You" : "HealthSakhi"} •{" "}
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow-sm bg-white dark:bg-gray-700">
                  <div className="flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-cyan-500" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 ml-2 mt-1">
                  HealthSakhi is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-4">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your health question here..."
                rows="3"
                disabled={isLoading}
                className="flex-1 resize-none border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                aria-label="Health question input"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                aria-label="Send health question"
              >
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send size={20} />
                )}
                <span className="hidden sm:inline">
                  {isLoading ? "Sending..." : "Send"}
                </span>
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Disclaimer:</strong> This is a demonstration interface.
            HealthSakhi AI responses are simulated. Always consult qualified
            healthcare professionals for actual medical advice and diagnosis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
