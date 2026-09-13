export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    slug: "ai-chat-application",
    title: "AI Chat Application",
    description:
      "A ChatGPT-like AI web application where authenticated users can create conversations and interact with an AI assistant.",
    image: "/projects/ai-chat.png",
    features: [
      "User registration and login",
      "Persistent authentication",
      "Chat creation and conversation history",
      "Sending messages to an AI model",
      "MongoDB data persistence",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Google Gemini API",
    ],
    liveUrl: "https://ai-chat-theta.vercel.app",
    githubUrl: "https://github.com/Nimeshkewat/ai-chat-app",
  },
  {
    slug: "food-delivery-aplication",
    title: "Food Loop Application",
    description:
      "A full-stack food ordering platform where users can browse restaurants, order food, and pay online — and restaurant owners can manage their menu and track incoming orders.",
    image: "/projects/food-loop.png",
    features: [
      "Email/password auth with verification, forgot/reset password",
      "Razorpay payment integration with webhook + signature verification",
      "Limits requests to keep apps running smoothly",
      "Image uploads via Cloudinary",
      "Secure REST API architecture",
      "Product browsing, search, and pagination",
      "Browse restaurants with search & cuisine filters",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Razorpay",
      "JWT",
      "Tailwind CSS",
    ],
    liveUrl: "https://food-loop-frontend-black.vercel.app/",
    githubUrl: "https://github.com/Nimeshkewat/food-loop-app",
  },
];
