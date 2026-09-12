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
    slug: "mern-ecommerce",
    title: "MERN E-Commerce Application",
    description:
      "A full-stack e-commerce application built with the MERN stack, including authentication, product management, search, payments, and cloud-based image handling.",
    image: "/projects/ecommerce.svg",
    features: [
      "User authentication and admin functionality",
      "Product browsing, search, and pagination",
      "Cloudinary image management",
      "Razorpay payment integration",
      "Secure REST API architecture",
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
    liveUrl: "LIVE_DEMO_URL_HERE",
    githubUrl: "GITHUB_REPO_URL_HERE",
  },
];
