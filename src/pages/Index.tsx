
import { PostGrid } from "@/components/PostGrid";
import { processPost } from "@/templates";
import { useEffect, useState } from "react";
import { SocialPost } from "@/types/social";
import { getTemplate } from "@/templates";

// Fallback mock data
const RAW_POSTS = [
  {
    id: "1",
    username: "TechChannel",
    platform: "YouTube",
    content: "Just uploaded: '10 Must-Know React Tips for 2024' - Check out our latest video tutorial on modern React development practices! https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    timestamp: "2 hours ago",
    avatar: "https://picsum.photos/seed/tech/100",
  },
  {
    id: "2",
    username: "CodingBootcamp",
    platform: "Facebook",
    content: "🎉 Exciting news! Our next web development bootcamp starts next month. Early bird registration is now open. Learn React, TypeScript, and more!",
    timestamp: "3 hours ago",
    avatar: "https://picsum.photos/seed/coding/100",
  },
  {
    id: "3",
    username: "WebDevDaily",
    platform: "X",
    content: "💡 Quick Tip: Use the new React hooks pattern for better state management. Here's how to implement it in your next project. #ReactJS #WebDev",
    timestamp: "5 hours ago",
    avatar: "https://picsum.photos/seed/webdev/100",
  },
  {
    id: "4",
    username: "DevTutorials",
    platform: "YouTube",
    content: "NEW VIDEO: 'Building a Full-Stack App with React and Node.js' - Learn how to create a complete web application from scratch! https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    timestamp: "1 day ago",
    avatar: "https://picsum.photos/seed/dev/100",
  },
  {
    id: "5",
    username: "TechStartup",
    platform: "Facebook",
    content: "We're hiring! Looking for talented React developers to join our team. Remote positions available. DM for details!",
    timestamp: "2 days ago",
    avatar: "https://picsum.photos/seed/startup/100",
  },
  {
    id: "6",
    username: "CodePro",
    platform: "X",
    content: "Just released our new React component library! Check out the documentation at docs.example.com #OpenSource #React",
    timestamp: "3 days ago",
    avatar: "https://picsum.photos/seed/code/100",
  }
];

const Index = () => {
  const [posts, setPosts] = useState<SocialPost[]>(RAW_POSTS.map(processPost));

  useEffect(() => {
    const fetchAllPosts = async () => {
      const platforms = ['YouTube', 'Facebook', 'X'];
      const allPosts: SocialPost[] = [];

      for (const platform of platforms) {
        const template = getTemplate(platform);
        if (template?.fetchPosts) {
          const platformPosts = await template.fetchPosts();
          allPosts.push(...platformPosts);
        }
      }

      if (allPosts.length > 0) {
        setPosts(allPosts.map(processPost));
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="py-8 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fade-up">
          Social Feed
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Discover content from YouTube, Facebook, and X
        </p>
      </header>
      
      <main className="container mx-auto px-4 pb-12">
        <PostGrid posts={posts} />
      </main>
    </div>
  );
};

export default Index;
