export type Platform = 'PC' | 'PlayStation 5' | 'Xbox Series X/S' | 'Nintendo Switch' | 'iOS' | 'Android' | 'PlayStation 4' | 'Xbox One';

export type GameGenre = 
  | 'Action RPG' 
  | 'Tactical Shooter' 
  | 'Battle Royale' 
  | 'Sandbox' 
  | 'Open World Action' 
  | 'MOBA' 
  | 'First-Person Shooter' 
  | 'Platform / Creation' 
  | 'Action Adventure';

export interface Game {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  genre: GameGenre;
  releaseYear: number;
  developer: string;
  publisher: string;
  platforms: Platform[];
  rating: number; // e.g. 9.4
  esrb: string;
  bannerUrl: string;
  coverUrl: string;
  rank: number;
  isPopular: boolean;
  isFeatured?: boolean;
  trailerVideoId?: string; // e.g. YouTube trailer ID
  accentColor?: string; // e.g. lime, emerald, rose, sky, cyan
  tagline?: string;
  overview: {
    storyAndWorld: string;
    coreGameplay: string;
    specialMechanics: string[];
    editionsAndModes?: {
      title: string;
      description: string;
    }[];
    systemRequirements?: {
      minimum: { os: string; cpu: string; gpu: string; ram: string; storage: string };
      recommended: { os: string; cpu: string; gpu: string; ram: string; storage: string };
    };
  };
  keyFeatures: string[];
  guidesSummary?: {
    id: string;
    title: string;
    readTime: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  }[];
}

export type NewsCategory = 
  | 'All' 
  | 'PC Gaming' 
  | 'Console' 
  | 'Esports' 
  | 'Industry' 
  | 'Updates' 
  | 'Tech';

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string[];
  category: Exclude<NewsCategory, 'All'>;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  heroImage: string;
  isHero?: boolean;
  isFeaturedSecondary?: boolean;
  isTrending?: boolean;
  tags: string[];
  relatedGameId?: string;
  relatedArticleIds?: string[];
  keyTakeaways?: string[];
}

export type UpdateCategory = 'Gameplay' | 'Bug Fixes' | 'New Content' | 'Balance Changes' | 'Seasonal';

export interface GameUpdate {
  id: string;
  gameId: string;
  gameTitle: string;
  version: string;
  title: string;
  date: string;
  category: UpdateCategory;
  shortDescription: string;
  highlights: string[];
  fullNotes: string[];
  isVerified: boolean;
}

export interface UpcomingGame {
  id: string;
  title: string;
  genre: GameGenre;
  expectedDate: string;
  status: 'Confirmed' | 'Expected' | 'In Development' | 'Beta Testing';
  platforms: Platform[];
  coverUrl: string;
  developer: string;
  notes: string;
  isVerifiedDate: boolean;
}

export interface GuideItem {
  id: string;
  title: string;
  gameId: string;
  gameTitle: string;
  category: 'Beginner Tips' | 'Advanced Strategy' | 'Performance & Settings' | 'Crafting & Builds';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  excerpt: string;
  coverImage: string;
  steps: {
    heading: string;
    description: string;
    tip?: string;
  }[];
}

export interface CommunityItem {
  id: string;
  title: string;
  author: string;
  category: 'Gaming Setups' | 'Minecraft Builds' | 'Gameplay Clips' | 'Fan Art';
  imageUrl: string;
  upvotes: number;
  description: string;
}

export interface ChartMetricData {
  id: string;
  gameName: string;
  genre: string;
  weeklyConcurrent: number; // in thousands
  monthlyActive: number; // in millions
  peakConcurrent24h: number; // in thousands
  twitchHoursWatched: number; // in millions
  trendPercent: number;
}

export interface NotificationPreferences {
  breakingNews: boolean;
  patchUpdates: boolean;
  weeklyDigest: boolean;
  browserPush: boolean;
  followedGames: string[]; // game IDs like 'minecraft', 'call-of-duty', etc.
}

export interface GameNotification {
  id: string;
  title: string;
  message: string;
  gameTitle?: string;
  gameId?: string;
  timestamp: string;
  read: boolean;
  type: 'patch' | 'news' | 'alert';
}

export interface UserProfile {
  name: string;
  handle: string;
  email: string;
  avatar: string;
  isSignedIn: boolean;
  joinedDate: string;
  preferences: NotificationPreferences;
}
