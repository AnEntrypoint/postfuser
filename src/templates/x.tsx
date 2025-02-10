
import { FeedTemplate } from "@/types/social";

export const XTemplate: FeedTemplate = {
  name: "X",
  renderContent: (post) => (
    <p className="text-gray-700 mb-3 line-clamp-4">
      {post.content}
    </p>
  )
};
