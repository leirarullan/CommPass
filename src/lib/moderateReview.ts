// Simple AI-style content moderation for community reviews.
// Flags profanity, spam patterns, and very short / gibberish text.

const BLOCKED_WORDS = [
  "spam", "scam", "fuck", "shit", "damn", "ass", "bitch", "crap",
  "hate", "kill", "stupid", "idiot", "loser", "suck",
];

const SPAM_PATTERNS = [
  /https?:\/\//i,            // links
  /buy now/i,
  /click here/i,
  /free money/i,
  /(.)\1{4,}/,               // repeated chars (aaaaa)
  /\b[A-Z]{5,}\b/,           // ALL CAPS words
];

export function moderateReview(text: string): { approved: boolean; reason?: string } {
  const trimmed = text.trim();

  if (trimmed.length < 5) {
    return { approved: false, reason: "Review is too short to be meaningful." };
  }

  if (trimmed.length > 1000) {
    return { approved: false, reason: "Review exceeds the maximum length." };
  }

  const lower = trimmed.toLowerCase();
  for (const word of BLOCKED_WORDS) {
    if (lower.includes(word)) {
      return { approved: false, reason: "Review contains inappropriate language." };
    }
  }

  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { approved: false, reason: "Review was flagged as potential spam." };
    }
  }

  return { approved: true };
}
