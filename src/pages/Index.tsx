
import { PostGrid } from "@/components/PostGrid";

// Mock data - replace with actual data fetching
const MOCK_POSTS = [
  {
    id: "1",
    username: "sarah_designer",
    platform: "Twitter",
    content: "Just launched my new portfolio website! Check it out and let me know what you think",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    username: "tech_enthusiast",
    platform: "LinkedIn",
    content: "Exciting news! Our team just completed the migration to microservices architecture.",
    timestamp: "5 hours ago",
  },
  {
    id: "3",
    username: "travel_photography",
    platform: "Instagram",
    content: "Capturing the sunset at the Grand Canyon. Nature never ceases to amaze me.",
    timestamp: "1 day ago",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="py-8 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-up">
          Social Feed
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Discover what our community is sharing across social media
        </p>
      </header>
      
      <main className="container mx-auto px-4 pb-12">
        <PostGrid posts={MOCK_POSTS} />
      </main>
    </div>
  );
};

export default Index;
