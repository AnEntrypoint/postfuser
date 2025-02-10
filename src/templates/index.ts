
import { FeedTemplate } from "@/types/social";
import { YouTubeTemplate } from "./youtube";
import { FacebookTemplate } from "./facebook";
import { XTemplate } from "./x";

const templates: Record<string, FeedTemplate> = {
  YouTube: YouTubeTemplate,
  Facebook: FacebookTemplate,
  X: XTemplate
};

export const getTemplate = (platform: string): FeedTemplate | undefined => {
  return templates[platform];
};

export const processPost = (post: any) => {
  const template = getTemplate(post.platform);
  if (template?.extractMetadata) {
    return {
      ...post,
      metadata: template.extractMetadata(post.content)
    };
  }
  return post;
};
