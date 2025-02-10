
import { FeedTemplate, SocialPost } from "@/types/social";

export const YouTubeTemplate: FeedTemplate = {
  name: "YouTube",
  extractMetadata: (content: string) => {
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = content.match(urlRegex);
    return {
      videoId: match ? match[1] : null
    };
  },
  renderContent: (post: SocialPost) => {
    const videoId = post.metadata?.videoId;
    
    return (
      <>
        {videoId && (
          <div className="mb-3 aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        )}
        <p className="text-gray-700 mb-3 line-clamp-4">{post.content}</p>
      </>
    );
  }
};
