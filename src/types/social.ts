
export interface SocialPost {
  id: string;
  username: string;
  platform: string;
  content: string;
  timestamp: string;
  avatar?: string;
  metadata?: Record<string, any>;
}

export interface FeedTemplate {
  name: string;
  renderContent: (post: SocialPost) => React.ReactNode;
  extractMetadata?: (content: string) => Record<string, any>;
}
