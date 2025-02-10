
import { PostCard } from "./PostCard";

interface Post {
  id: string;
  username: string;
  platform: string;
  content: string;
  timestamp: string;
  avatar?: string;
}

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post, index) => (
        <PostCard
          key={post.id}
          {...post}
          className="transform transition-all duration-300 hover:-translate-y-1"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
