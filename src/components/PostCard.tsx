
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PostCardProps {
  username: string;
  platform: string;
  content: string;
  timestamp: string;
  avatar?: string;
  className?: string;
}

export function PostCard({ username, platform, content, timestamp, avatar, className }: PostCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-up",
      "bg-white/80 backdrop-blur-sm border border-gray-100",
      className
    )}>
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
        <p className="text-gray-700 mb-3 line-clamp-4">{content}</p>
        <time className="text-sm text-gray-500">{timestamp}</time>
      </div>
    </Card>
  );
}
