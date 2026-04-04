const RESPONSES: Record<string, string> = {
  wifi: "Great question! Based on your area, I'd recommend checking out the **Free Wi-Fi Hub** at Community Park — it's open 6am–10pm with outdoor seating. The **Public Library** also offers free Wi-Fi and computer access 6 days a week. Both are within a mile of your ZIP code!",
  student: "There are several programs for students nearby! The **UC Links Youth Program** offers college prep and STEM activities specifically for underserved youth. The **Community Learning Center** has after-school tutoring and mentoring for K-12. Both are fantastic resources.",
  english: "The **Language & Immigration Center** offers free ESL classes in multiple languages including Spanish, Vietnamese, and Mandarin. They also provide citizenship preparation and translation services. It's about 1 mile from your area.",
  library: "Your local **Public Library** is a goldmine! They offer free computer access, printing services, and digital literacy classes. It's only 0.3 miles away and open 6 days a week.",
  technology: "For tech access, you have several options: the **Neighborhood Tech Lab** offers refurbished laptops for checkout and coding workshops, the **Library** has free computers, and the **Free Wi-Fi Hub** at the park provides internet access.",
  college: "The **UC Links Youth Program** is specifically designed to help students prepare for college! They offer digital literacy, college prep workshops, and STEM activities. The **Community Learning Center** also provides tutoring and mentoring that can support college readiness.",
  help: "I can help you find resources in your community! Try asking about:\n- Free Wi-Fi or internet access\n- Programs for students\n- English language classes\n- Library services\n- Technology access\n- College preparation",
};

export function getMockChatResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("wifi") || lower.includes("wi-fi") || lower.includes("internet")) return RESPONSES.wifi;
  if (lower.includes("student") || lower.includes("program") || lower.includes("youth") || lower.includes("after-school") || lower.includes("kid")) return RESPONSES.student;
  if (lower.includes("english") || lower.includes("esl") || lower.includes("language") || lower.includes("spanish")) return RESPONSES.english;
  if (lower.includes("library") || lower.includes("book")) return RESPONSES.library;
  if (lower.includes("tech") || lower.includes("computer") || lower.includes("laptop") || lower.includes("coding")) return RESPONSES.technology;
  if (lower.includes("college") || lower.includes("university") || lower.includes("uc")) return RESPONSES.college;
  if (lower.includes("help") || lower.includes("what can")) return RESPONSES.help;
  return "That's a great question! Based on the resources in your area, I'd suggest visiting the **Community Learning Center** or **Public Library** as starting points. They can connect you with many local services. Is there something specific you're looking for — like technology access, tutoring, or language support?";
}
