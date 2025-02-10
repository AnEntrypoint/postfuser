
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
  },
  fetchPosts: async () => {
    try {
      // Using the YouTube RSS feed for a public channel (e.g., YouTube Trending)
      const response = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UCBR8-60-B28hp2BmDPdntcQ');
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      const entries = Array.from(xmlDoc.getElementsByTagName('entry'));

      return entries.map((entry, index) => {
        const videoId = entry.getElementsByTagName('yt:videoId')[0]?.textContent || '';
        const title = entry.getElementsByTagName('title')[0]?.textContent || '';
        const author = entry.getElementsByTagName('author')[0]?.getElementsByTagName('name')[0]?.textContent || 'YouTube Channel';
        
        return {
          id: videoId || `yt-${index}`,
          username: author,
          platform: 'YouTube',
          content: title,
          timestamp: new Date().toISOString(),
          metadata: {
            videoId
          }
        };
      });
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
      return [];
    }
  }
};
