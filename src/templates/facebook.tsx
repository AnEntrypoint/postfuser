
import { FeedTemplate, SocialPost } from "@/types/social";

export const FacebookTemplate: FeedTemplate = {
  name: "Facebook",
  renderContent: (post: SocialPost) => (
    <p className="text-gray-700 mb-3 line-clamp-4">
      {post.content}
    </p>
  ),
  fetchPosts: async () => {
    // Note: Facebook's public data is very limited without an API key
    // This is a mock implementation as Facebook restricts public scraping
    return [];
  }
};
