
import { FeedTemplate, SocialPost } from "@/types/social";

export const XTemplate: FeedTemplate = {
  name: "X",
  renderContent: (post: SocialPost) => (
    <p className="text-gray-700 mb-3 line-clamp-4">
      {post.content}
    </p>
  ),
  fetchPosts: async () => {
    // Note: X (Twitter) requires authentication for most endpoints
    // This is a mock implementation as X restricts public scraping
    return [];
  }
};
