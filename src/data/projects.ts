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
    slug: "shopmate",
    title: "ShopMate",
    description:
      "Multi-vendor marketplace with customer, seller, and admin roles, featuring seller onboarding, Razorpay checkout, and Gemini-powered product recommendations.",
    image: "/projects/shopmate.png",
    features: [
      "Multi-vendor marketplace supporting customer, seller, and admin workflows.",
      "Product discovery, shop browsing, cart management, checkout, and order tracking.",
      "Seller application and approval pipeline with shop analytics charts and order processing.",
      "Admin dashboard with metrics and management tools for users, shops, products, and orders.",
      "Razorpay online payments (with webhook verification) and cash on delivery, plus transactional order cancellation.",
      "Verified-buyer product reviews and up to three saved shipping addresses per customer.",
      "AI-powered product matching and recommendations using the Google Gemini API.",
      "JWT authentication with HTTP-only refresh cookies, password reset emails via Brevo, Helmet, CORS, and rate limiting.",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Router",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "Razorpay",
      "Cloudinary",
      "Brevo",
      "Google Gemini API",
      "GitHub Actions",
    ],
    liveUrl: "https://shopmate-store.vercel.app",
    githubUrl: "https://github.com/Nimeshkewat/ShopMate",
  },
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
