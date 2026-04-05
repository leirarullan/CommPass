import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { getMockChatResponse } from "@/data/chatResponses";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FAQ_SUGGESTIONS = [
  "Where can I find free Wi-Fi?",
  "Are there programs for students?",
  "Where are English classes nearby?",
  "What does my local library offer?",
  "How can I access a computer or laptop?",
  "Help me prepare for college",
];

const AIChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hey there! I'm **Pascom**, your 24/7 community resource assistant. 🤖\n\nAsk me anything about local resources — or tap a question below to get started!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showFaqs, setShowFaqs] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const send = (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;
    const userMsg: Message = { role: "user", content: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setShowFaqs(false);

    setTimeout(() => {
      const reply = getMockChatResponse(msg);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-all group"
        aria-label="Toggle Pascom chat"
      >
        {open ? <X className="w-6 h-6" /> : (
          <div className="relative">
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-primary animate-pulse" />
          </div>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[380px] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-xl flex flex-col overflow-hidden animate-fade-in"
          style={{ height: "520px" }}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-border bg-primary/10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-display text-base text-foreground font-semibold">Pascom</h4>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                Available 24/7
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}>
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: m.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }}
                    />
                  ) : m.content}
                </div>
              </div>
            ))}

            {/* FAQ Suggestions */}
            {showFaqs && !isTyping && (
              <div className="space-y-2 pt-1">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Quick questions</p>
                <div className="flex flex-wrap gap-2">
                  {FAQ_SUGGESTIONS.map((faq) => (
                    <button
                      key={faq}
                      onClick={() => send(faq)}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 transition-colors text-left"
                    >
                      {faq}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3 text-sm text-muted-foreground">
                  <span className="animate-pulse">Pascom is typing…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-border p-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 px-3 py-2 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button type="submit" className="w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-all shrink-0">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChatBox;
