export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const generateResponse = async (message: string): Promise<string> => {
  // Mock responses for different types of queries
  const responses: { [key: string]: string } = {
    "What's on my agenda today?":
      "Today you have:\n- Team standup at 09:00\n- Client meeting at 14:00\n- Project review at 16:00",
    "What meetings do I have this week?":
      "This week's meetings:\n- Monday: Team standup\n- Wednesday: Sprint planning\n- Friday: Client presentation",
    "What's the weather forecast for tomorrow?":
      "Tomorrow's forecast for Hudiksvall:\n- Morning: 15°C, Partly cloudy\n- Afternoon: 20°C, Sunny\n- Evening: 16°C, Clear skies",
    "What's my schedule for this week?":
      "Your schedule this week:\n- Development tasks (Mon-Wed)\n- Sprint planning (Wed)\n- Documentation review (Thu)\n- Client presentation (Fri)",
  };

  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const response =
        responses[message] ||
        `I understand you're asking about "${message}". Let me check that information for you. (This is a demo response)`;
      resolve(response);
    }, 1000);
  });
};
