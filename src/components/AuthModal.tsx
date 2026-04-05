import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { X } from "lucide-react";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onClose: () => void;
}

const AuthModal = ({ open, onClose }: Props) => {
  const [mode, setMode] = useState<"login" | "signup">("signup");
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "signup") {
        if (!displayName.trim()) {
          toast.error("Please enter a display name.");
          setLoading(false);
          return;
        }

        const credentials: any = {
          password,
          options: {
            data: { display_name: displayName.trim() },
          },
        };

        if (method === "email") {
          credentials.email = email;
        } else {
          credentials.phone = phone;
        }

        const { error } = await supabase.auth.signUp(credentials);
        if (error) throw error;
        toast.success("Account created! You're now signed in.");
        onClose();
      } else {
        const credentials: any = { password };
        if (method === "email") {
          credentials.email = email;
        } else {
          credentials.phone = phone;
        }

        const { error } = await supabase.auth.signInWithPassword(credentials);
        if (error) throw error;
        toast.success("Welcome back!");
        onClose();
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl shadow-xl w-full max-w-md mx-4 p-6 relative">
        <button onClick={onClose} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-display text-xl text-foreground mb-1">
          {mode === "signup" ? "Create Your CommPass Account" : "Sign In to CommPass"}
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          {mode === "signup" ? "It's free! Use email or phone number." : "Welcome back!"}
        </p>

        {/* Method toggle */}
        <div className="flex rounded-xl bg-muted p-1 mb-4">
          <button
            type="button"
            onClick={() => setMethod("email")}
            className={`flex-1 text-sm py-2 rounded-lg font-semibold transition-colors ${method === "email" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setMethod("phone")}
            className={`flex-1 text-sm py-2 rounded-lg font-semibold transition-colors ${method === "phone" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"}`}
          >
            Phone
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Display name *"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          )}

          {method === "email" ? (
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          ) : (
            <input
              type="tel"
              placeholder="Phone number (e.g. +1234567890)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 disabled:opacity-50"
          >
            {loading ? "Please wait…" : mode === "signup" ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-center text-muted-foreground mt-4">
          {mode === "signup" ? (
            <>Already have an account?{" "}
              <button onClick={() => setMode("login")} className="text-primary font-semibold hover:underline">Sign in</button>
            </>
          ) : (
            <>Don't have an account?{" "}
              <button onClick={() => setMode("signup")} className="text-primary font-semibold hover:underline">Create one</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
