
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PostCardProps {
  username: string;
  platform: string;
  content: string;
  timestamp: string;
  avatar?: string;
  className?: string;
  style?: React.CSSProperties;
  videoId?: string;
}

export function PostCard({ username, platform, content, timestamp, avatar, className, style }: PostCardProps) {
  // Extract YouTube video ID from content if it's a YouTube post
  const getYouTubeVideoId = (content: string) => {
    const urlRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = content.match(urlRegex);
    return match ? match[1] : null;
  };

  const videoId = platform === "YouTube" ? getYouTubeVideoId(content) : null;

  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-up",
        "bg-white/80 backdrop-blur-sm border border-gray-100",
        className
      )}
      style={style}
    >
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
            {avatar ? (
              <img 
                src={avatar} 
                alt={username}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">{username[0]}</span>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{username}</h3>
            <p className="text-sm text-gray-500">{platform}</p>
          </div>
        </div>
        
        {platform === "YouTube" && videoId && (
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
        
        <p className="text-gray-700 mb-3 line-clamp-4">{content}</p>
        <time className="text-sm text-gray-500">{timestamp}</time>
      </div>
    </Card>
  );
}
