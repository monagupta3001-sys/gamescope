import { ChartMetricData, UpcomingGame, GuideItem, CommunityItem } from '../types';

export const POPULARITY_CHART_DATA: ChartMetricData[] = [
  {
    id: 'minecraft',
    gameName: 'Minecraft',
    genre: 'Sandbox',
    weeklyConcurrent: 1420, // 1.42M peak weekly concurrent
    monthlyActive: 178, // 178M monthly active players
    peakConcurrent24h: 1560,
    twitchHoursWatched: 38.5,
    trendPercent: 4.8
  },
  {
    id: 'roblox',
    gameName: 'Roblox',
    genre: 'Creation',
    weeklyConcurrent: 2150,
    monthlyActive: 214,
    peakConcurrent24h: 2380,
    twitchHoursWatched: 24.1,
    trendPercent: 6.2
  },
  {
    id: 'fortnite',
    gameName: 'Fortnite',
    genre: 'Battle Royale',
    weeklyConcurrent: 1890,
    monthlyActive: 125,
    peakConcurrent24h: 2100,
    twitchHoursWatched: 49.3,
    trendPercent: 8.5
  },
  {
    id: 'counter-strike-2',
    gameName: 'Counter-Strike 2',
    genre: 'Tactical Shooter',
    weeklyConcurrent: 1340,
    monthlyActive: 34,
    peakConcurrent24h: 1480,
    twitchHoursWatched: 56.8,
    trendPercent: 2.1
  },
  {
    id: 'league-of-legends',
    gameName: 'League of Legends',
    genre: 'MOBA',
    weeklyConcurrent: 1280,
    monthlyActive: 140,
    peakConcurrent24h: 1390,
    twitchHoursWatched: 92.4,
    trendPercent: 1.4
  },
  {
    id: 'valorant',
    gameName: 'Valorant',
    genre: 'Tactical Shooter',
    weeklyConcurrent: 840,
    monthlyActive: 28,
    peakConcurrent24h: 920,
    twitchHoursWatched: 64.2,
    trendPercent: 7.9
  },
  {
    id: 'gta-v',
    gameName: 'Grand Theft Auto V',
    genre: 'Open World',
    weeklyConcurrent: 780,
    monthlyActive: 42,
    peakConcurrent24h: 890,
    twitchHoursWatched: 71.5,
    trendPercent: -1.2
  },
  {
    id: 'call-of-duty',
    gameName: 'Call of Duty',
    genre: 'First-Person Shooter',
    weeklyConcurrent: 910,
    monthlyActive: 55,
    peakConcurrent24h: 1040,
    twitchHoursWatched: 41.0,
    trendPercent: 12.3
  },
  {
    id: 'pubg-battlegrounds',
    gameName: 'PUBG',
    genre: 'Battle Royale',
    weeklyConcurrent: 620,
    monthlyActive: 29,
    peakConcurrent24h: 680,
    twitchHoursWatched: 19.8,
    trendPercent: 3.4
  },
  {
    id: 'apex-legends',
    gameName: 'Apex Legends',
    genre: 'Battle Royale',
    weeklyConcurrent: 490,
    monthlyActive: 21,
    peakConcurrent24h: 530,
    twitchHoursWatched: 26.5,
    trendPercent: -2.8
  }
];

export const UPCOMING_GAMES: UpcomingGame[] = [
  {
    id: 'gta-vi',
    title: 'Grand Theft Auto VI',
    genre: 'Open World Action',
    expectedDate: 'Fall 2025 (Confirmed Window)',
    status: 'Confirmed',
    platforms: ['PlayStation 5', 'Xbox Series X/S'],
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    developer: 'Rockstar Games',
    notes: 'Official Rockstar announcement targeting late 2025 console release. PC version anticipated later.',
    isVerifiedDate: true
  },
  {
    id: 'monster-hunter-wilds',
    title: 'Monster Hunter Wilds',
    genre: 'Action RPG',
    expectedDate: 'February 28, 2025',
    status: 'Confirmed',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    coverUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=600&auto=format&fit=crop',
    developer: 'Capcom',
    notes: 'Seamless ecosystem transitions and dynamic weather cycles confirmed by Capcom.',
    isVerifiedDate: true
  },
  {
    id: 'elder-scrolls-6',
    title: 'The Elder Scrolls VI',
    genre: 'Action RPG',
    expectedDate: 'TBA / Prototype Est. 2027+',
    status: 'In Development',
    platforms: ['PC', 'Xbox Series X/S'],
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    developer: 'Bethesda Game Studios',
    notes: 'In active full production post-Starfield. Date is an illustrative prototype placeholder.',
    isVerifiedDate: false
  },
  {
    id: 'witcher-polaris',
    title: 'Project Polaris (The Witcher 4)',
    genre: 'Action RPG',
    expectedDate: 'TBA / Prototype Est. 2026-2027',
    status: 'In Development',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    coverUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop',
    developer: 'CD PROJEKT RED',
    notes: 'Built in Unreal Engine 5. Kicking off a brand new Witcher saga. Release timeline is placeholder estimate.',
    isVerifiedDate: false
  }
];

export const GAMING_GUIDES: GuideItem[] = [
  {
    id: 'minecraft-survival-tips',
    title: 'Minecraft Master Class: Surviving the First 3 Days & Deepslate Mining',
    gameId: 'minecraft',
    gameTitle: 'Minecraft',
    category: 'Beginner Tips',
    difficulty: 'Beginner',
    readTime: '6 min read',
    excerpt: 'Essential progression milestones from punching trees to crafting full iron armor and establishing sustainable food sources.',
    coverImage: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=600&auto=format&fit=crop',
    steps: [
      {
        heading: 'Day 1: Shelter Before Sunset',
        description: 'Collect 16 logs of wood immediately to build a crafting table, wooden pickaxe, and stone tools. Dig a 3x3 alcove into a cliffside before nightfall to evade Phantoms and Creepers.',
        tip: 'Never mine straight down. Always stand on the border between two blocks when digging vertically.'
      },
      {
        heading: 'Day 2: Smelting & The Iron Age',
        description: 'Construct a furnace using 8 cobblestone. Smelt raw iron found in exposed mountain veins or cave entrances to forge an iron shield and iron pickaxe.',
        tip: 'An iron shield completely negates Creeper explosions and Skeleton arrow damage when held up.'
      },
      {
        heading: 'Day 3: Deepslate Diamond Mining',
        description: 'Descend to Y-level -58 for maximum diamond vein frequency. Branch mine with 2-block spacing between tunnels.',
        tip: 'Bring a water bucket at all times. It extinguishes sudden lava falls and creates instant obsidian bridges.'
      }
    ]
  },
  {
    id: 'valorant-crosshair-fundamentals',
    title: 'Valorant Tactical Primer: Crosshair Placement & Micro-Adjustments',
    gameId: 'valorant',
    gameTitle: 'Valorant',
    category: 'Advanced Strategy',
    difficulty: 'Intermediate',
    readTime: '7 min read',
    excerpt: 'How pro players pre-aim common angles, calibrate mouse sensitivity, and eliminate dead-zone inaccuracy while peeking.',
    coverImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600&auto=format&fit=crop',
    steps: [
      {
        heading: 'Horizontal Head-Level Discipline',
        description: 'Keep your crosshair anchored at exact head height at all times using environmental cues like box lines and wall trim as visual rulers.',
        tip: 'Stop sweeping corners lazily. Slice the pie by clearing one narrow sliver of an angle at a time.'
      },
      {
        heading: 'Counter-Strafing Mastery',
        description: 'Tapping the opposite directional movement key (e.g. hitting D while moving left with A) stops momentum instantly, achieving 100% first-bullet accuracy.',
        tip: 'Enable the shooting error graph in Video Settings to visually inspect when shots carry movement error.'
      },
      {
        heading: 'Sensitivity Calibration (eDPI)',
        description: 'Calculate eDPI (DPI multiplied by in-game sensitivity). Most VCT professionals play between 200 and 320 eDPI for optimal tracking stability.',
        tip: 'One full comfortable swipe of your mouse pad should execute an approximate 180-degree turn.'
      }
    ]
  },
  {
    id: 'pc-gaming-optimization',
    title: 'PC Gaming Performance Optimization: Frame Times & Latency Reduction',
    gameId: 'general',
    gameTitle: 'PC Hardware & Tech',
    category: 'Performance & Settings',
    difficulty: 'Intermediate',
    readTime: '8 min read',
    excerpt: 'Step-by-step Windows 11 tweaks, GPU driver settings, shader cache clearing, and low-latency reflex configuration.',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
    steps: [
      {
        heading: 'Enable Hardware-Accelerated GPU Scheduling (HAGS)',
        description: 'Allows your graphics card to manage its own video memory scheduling directly, lowering input latency and unlocking DLSS 3 Frame Generation.',
        tip: 'Navigate to Windows Settings > Display > Graphics > Change default graphics settings.'
      },
      {
        heading: 'Configure NVIDIA Reflex / AMD Anti-Lag',
        description: 'Set Reflex to "On + Boost" in competitive titles to maintain GPU clocks and clear the CPU render queue.',
        tip: 'Cap your framerate 3 FPS below your monitor\'s refresh rate (e.g. 141 FPS on a 144Hz screen) when using G-Sync or FreeSync.'
      },
      {
        heading: 'Clear Corrupt Direct3D Shader Caches',
        description: 'Periodic micro-stuttering after game updates is frequently caused by outdated shader binaries. Clear disk cleanup DirectX shader files.',
        tip: 'Use Windows Disk Cleanup, check "DirectX Shader Cache", and reboot.'
      }
    ]
  },
  {
    id: 'gta-v-story-tips',
    title: 'GTA V: Assassination Investments & Heist Crew Optimization',
    gameId: 'gta-v',
    gameTitle: 'Grand Theft Auto V',
    category: 'Beginner Tips',
    difficulty: 'Beginner',
    readTime: '5 min read',
    excerpt: 'How to delay Lester\'s stock assassination missions to net over 2.1 billion dollars per protagonist by endgame.',
    coverImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    steps: [
      {
        heading: 'Save Lester Missions Until After The Big Score',
        description: 'Complete only the mandatory first assassination mission required by the story. Defer the remaining four missions until all three characters have max bankrolls from the final heist.',
        tip: 'Investing millions at 80% market rebound multiplies into hundreds of millions.'
      },
      {
        heading: 'Carefully Select Heist Crew Talents',
        description: 'Hiring cheaper crew members early levels up their stats without increasing their permanent cut for future heists.',
        tip: 'Chef (gunman) and Rickie Lukens (hacker) perform like veterans after just one successful mission.'
      }
    ]
  }
];

export const COMMUNITY_HIGHLIGHTS: CommunityItem[] = [
  {
    id: 'comm-1',
    title: 'Nordic Minimalist Battlestation with Ambient Bias Lighting',
    author: 'VektorDesign',
    category: 'Gaming Setups',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    upvotes: 1420,
    description: 'Custom walnut butcher block desk with hidden cable conduits and warm 3000K backlight.'
  },
  {
    id: 'comm-2',
    title: 'Survival Mega-Base: Gothic Cathedral of Deepslate & Copper',
    author: 'ArchCraft_99',
    category: 'Minecraft Builds',
    imageUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=800&auto=format&fit=crop',
    upvotes: 2890,
    description: 'Constructed completely in pure survival over 400 in-game days using oxidized copper spires.'
  },
  {
    id: 'comm-3',
    title: '1v5 Radiant Clutch on Haven A-Site Retake (0.02s Defuse)',
    author: 'KovaaKPro',
    category: 'Gameplay Clips',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
    upvotes: 980,
    description: 'Sheriff headshot flick into a Phantom spray transfer through smoke in high Immortal lobby.'
  },
  {
    id: 'comm-4',
    title: 'Cyberpunk Neon Alley: Oil Paint & Digital Canvas Study',
    author: 'SoraArtworks',
    category: 'Fan Art',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    upvotes: 1650,
    description: 'Atmospheric digital illustration capturing a rain-drenched futuristic night alley.'
  },
  {
    id: 'comm-5',
    title: 'Industrial Dual-Monitor Sim Racing & Flight Rig',
    author: 'TelemetryDan',
    category: 'Gaming Setups',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    upvotes: 840,
    description: 'Aluminum profile chassis with direct-drive wheelbase and load-cell hydraulic pedals.'
  },
  {
    id: 'comm-6',
    title: 'Floating Sky Island Archipelago with Elytra Runways',
    author: 'AetherBuilder',
    category: 'Minecraft Builds',
    imageUrl: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800&auto=format&fit=crop',
    upvotes: 2130,
    description: 'Seven interconnected floating islands suspended above the void with cascading water elevators.'
  }
];
