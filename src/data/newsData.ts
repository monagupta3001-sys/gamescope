import { NewsArticle } from '../types';

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'cod-mw2-trailer-breakdown',
    slug: 'released-call-of-duty-modern-warfare-2-trailer',
    title: 'Released New Call of Duty: Modern Warfare 2 Trailer',
    subtitle: 'The ultimate weapon is team: Squad up and fight alongside the iconic operators of Task Force 141.',
    excerpt: 'Infinity Ward reveals brand new gameplay footage showcasing tactical water operations, overhauled vehicle combat physics, and the return of Simon "Ghost" Riley.',
    publishedAt: 'October 28, 2026',
    readTime: '4 min read',
    category: 'Console',
    isHero: true,
    heroImage: '/assets/aistudio/kB7KIeE4XiJ1PObcDGzVnd0Uer0YEzllVF2yiwIfAfepMotXCRFJvakLkAZPZNFyhx-usZwJWX7uNYnh4Q9sfkFzvKTNHNgDbBEZ2OUDoiMPtgIeduu0bJV5dG7eSyE-Bxe6M1IdrvZueWDS6T3HaB4XHiPX6EBP6DtRVWA7FOoMp0_lkRdPmqhy7mtWTREv_48b214fb.jpeg',
    author: {
      name: 'Soroush Norozy',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop',
      role: 'Senior Editorial Lead'
    },
    tags: ['Call of Duty', 'Modern Warfare', 'Task Force 141', 'FPS', 'Multiplayer'],
    relatedGameId: 'call-of-duty',
    keyTakeaways: [
      'Task Force 141 returns with Captain Price, Ghost, Soap, and Gaz.',
      'New water mechanics introduce dynamic underwater combat and ballistics drag.',
      'Gunsmith 2.0 allows sharing attachments across universal weapon receivers.',
      'Unified physics engine across both multiplayer and Warzone experiences.'
    ],
    content: [
      'The latest cinematic and gameplay reveal for the upcoming chapter of Call of Duty sets a gritty standard for modern military shooters. Infinity Ward highlighted unprecedented technological advancements spanning water physics, audio occlusion, and photogrammetry-scanned environmental assets.',
      'During the 3-minute extended footage, players get a frontline look at nighttime stealth infiltrations where water currents affect ballistics velocity and bullet penetration. Simon "Ghost" Riley and Captain John Price spearhead an assault on a heavily fortified coastal stronghold.',
      '"The ultimate weapon is team," emphasizes Infinity Ward\'s creative leadership. "With this generation, our team focused heavily on tactile feedback. Leaning out of moving vehicles, hanging from ledges to fire sidearms, and customized weapon receivers will feel instantly grounded to franchise veterans."',
      'Multiplayer testing begins shortly with complete cross-progression preserved across PC, PlayStation, and Xbox platforms. Stay tuned to GameScope as we break down weapon attachment stats upon initial beta access.'
    ],
    relatedArticleIds: ['gta6-editorial-direction', 'last-of-us-remake-modes', 'horizon-update-patch']
  },
  {
    id: 'god-of-war-ragnarok-japan-launch',
    slug: 'god-of-war-ragnarok-release-breakdown-asia',
    title: 'God of War Ragnarök: Launch Timeline & Localization Overview',
    subtitle: 'Santa Monica Studio preps the Nine Realms for complete simultaneous global rollout.',
    excerpt: 'Everything players need to know about midnight unlock times, Japanese voice casting, and DualSense haptic implementation.',
    publishedAt: 'October 27, 2026',
    readTime: '3 min read',
    category: 'Console',
    isFeaturedSecondary: true,
    heroImage: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop',
      role: 'PlayStation Specialist'
    },
    tags: ['God of War', 'PlayStation 5', 'Santa Monica Studio', 'Kratos', 'Action RPG'],
    keyTakeaways: [
      'Simultaneous midnight unlock across global time zones.',
      'Full Japanese audio dubbing featuring veteran anime voice talent.',
      'High-frame-rate performance mode targeting 120Hz displays with VRR.'
    ],
    content: [
      'As anticipation reaches fever pitch for Kratos and Atreus\' final Nordic chapter, Sony Interactive Entertainment has clarified regional rollout schedules. Players in the Asia-Pacific territory will experience synchronous release parity.',
      'Santa Monica Studio confirmed that the PS5 version leverages 3D spatial Tempest Audio and granular DualSense triggers to reflect the distinct weight of the Leviathan Axe and the Blades of Chaos.',
      'Reviews will drop preceding launch, accompanied by a comprehensive technical analysis on graphics fidelity and dynamic resolution scalers.'
    ],
    relatedArticleIds: ['last-of-us-remake-modes', 'horizon-update-patch']
  },
  {
    id: 'gta6-editorial-direction',
    slug: 'gta-6-will-be-a-very-different-gta-is-that-a-good-thing',
    title: 'GTA 6 Will Be a Very Different GTA — Is That a Good Thing?',
    subtitle: 'Rockstar Games balances razor-sharp satire with unprecedented simulated city density.',
    excerpt: 'An editorial deep-dive examining Rockstar\'s shift towards dynamic dual protagonists, evolving online ecosystems, and modern social media satire in Vice City.',
    publishedAt: 'October 26, 2026',
    readTime: '6 min read',
    category: 'Industry',
    isFeaturedSecondary: true,
    isTrending: true,
    heroImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
      role: 'Industry Analyst'
    },
    tags: ['GTA 6', 'Rockstar Games', 'Open World', 'Vice City', 'Editorial'],
    relatedGameId: 'gta-v',
    keyTakeaways: [
      'Lucia and Jason represent Rockstar\'s first dynamic Bonnie-and-Clyde protagonist duo.',
      'Vice City and the state of Leonida utilize machine-learning traffic & crowd routines.',
      'In-game social media feeds mirror contemporary short-form video culture.',
      'Rockstar adopts refined workplace conditions without sacrificing visual scope.'
    ],
    content: [
      'Grand Theft Auto has always functioned as a distorted funhouse mirror held up to American excess. But as the cultural landscape has shifted drastically since GTA V debuted in 2013, Rockstar Games finds itself evolving its narrative tone.',
      'The introduction of Lucia alongside Jason marks an intentional grounded shift. Rather than relying solely on nihilistic caricatures, early looks indicate a high-stakes crime relationship underpinned by emotional weight and survival.',
      'Furthermore, the density of Leonida—from dense neon boulevards to alligator-infested wetlands—demonstrates a leap in NPC autonomous routines. Every store interior, residential balcony, and marina seems meticulously active.',
      'While some long-time fans wonder whether the satirical edge might soften, all indicators suggest Rockstar is simply sharpening its critique for an era defined by live-streaming, influencer excess, and viral absurdity.'
    ],
    relatedArticleIds: ['cod-mw2-trailer-breakdown', 'overwatch2-survey-pricing']
  },
  {
    id: 'horizon-update-patch',
    slug: 'new-horizon-forbidden-west-update-available',
    title: 'New Horizon Forbidden West Update Available Now',
    subtitle: 'Guerrilla Games delivers refined performance mode, transmog system, and accessibility toggles.',
    excerpt: 'Patch 1.18 rolls out with enhanced anti-aliasing reconstruction, balancing for legendary weapon coils, and expanded photomode presets.',
    publishedAt: 'October 25, 2026',
    readTime: '3 min read',
    category: 'Updates',
    isTrending: true,
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Soroush Norozy',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop',
      role: 'Senior Editorial Lead'
    },
    tags: ['Horizon Forbidden West', 'Patch Notes', 'PlayStation', 'Guerrilla Games'],
    content: [
      'Guerrilla Games has pushed a new substantial quality-of-life update for Horizon Forbidden West. Key among the enhancements is a revamped temporal anti-aliasing pass that eliminates shimmer in foliage when playing in 60 FPS Performance Mode.',
      'Additionally, players can now customize Aloy\'s visual armor appearance independently of equipped defensive stats via the new Transmog vendor in major settlements.',
      'Numerous bug fixes for quest progression blockers in the Sunken Caverns have also been deployed alongside revised melee pit combat timings.'
    ],
    relatedArticleIds: ['last-of-us-remake-modes', 'god-of-war-ragnarok-japan-launch']
  },
  {
    id: 'overwatch2-survey-pricing',
    slug: 'overwatch-2-survey-asking-about-skin-pricing',
    title: 'Overwatch 2 Player Survey Inquires About Premium Mythic Skins',
    subtitle: 'Blizzard probes community sentiment regarding monetization tiers and battle pass cosmetics.',
    excerpt: 'Recent survey prompts have sparked passionate discussion among the player base regarding pricing models for customizable mythic cosmetics.',
    publishedAt: 'October 24, 2026',
    readTime: '4 min read',
    category: 'Industry',
    isTrending: true,
    heroImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
      role: 'Industry Analyst'
    },
    tags: ['Overwatch 2', 'Blizzard', 'Monetization', 'Esports'],
    content: [
      'A player feedback survey circulated by Blizzard Entertainment has drawn scrutiny across Reddit and social platforms. Questions tested various price points for cosmetic bundles and standalone mythic weapon variants.',
      'While Blizzard spokespeople clarified that surveys explore a broad spectrum of hypothetical commercial options rather than final pricing, the community remains sensitive following the franchise\'s transition to free-to-play.',
      'Competitive players note that transparent battle pass progression and earnable premium currency in weekly challenges remain the healthiest bridge for community goodwill.'
    ],
    relatedArticleIds: ['gta6-editorial-direction', 'valorant-champions-tour-recap']
  },
  {
    id: 'last-of-us-remake-modes',
    slug: 'the-last-of-us-part-1-remake-new-modes-enhancements',
    title: 'The Last of Us Remake: New Modes & Gameplay Enhancements',
    subtitle: 'Naughty Dog details Permadeath, Speedrun timers, and over 60 granular accessibility options.',
    excerpt: 'A comprehensive breakdown of how the rebuild from the ground up reimagines combat encounters with upgraded AI flanking logic and haptic audio cues.',
    publishedAt: 'October 23, 2026',
    readTime: '5 min read',
    category: 'Console',
    isTrending: true,
    heroImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop',
      role: 'PlayStation Specialist'
    },
    tags: ['The Last of Us', 'Naughty Dog', 'PlayStation 5', 'Remake'],
    content: [
      'Naughty Dog\'s rebuild of Joel and Ellie\'s harrowing journey takes full advantage of the modern engine architecture developed for The Last of Us Part II.',
      'Enemy AI now communicates dynamically across combat arenas, utilizing authentic flanking paths and coordinating search cones in dense grass and ruined office spaces.',
      'Speedrunners also receive dedicated in-game splits and timer HUD overlays that pause seamlessly during cutscenes, accompanied by Permadeath challenges segmented by chapter or per act.'
    ],
    relatedArticleIds: ['horizon-update-patch', 'god-of-war-ragnarok-japan-launch']
  },
  {
    id: 'valorant-champions-tour-recap',
    slug: 'valorant-champions-tour-season-kickoff-meta-shifts',
    title: 'VCT Champions Tour: Controller Meta Shifts & Neon Surge',
    subtitle: 'Pro teams redefine map control with dual-controller compositions across Lotus and Sunset.',
    excerpt: 'Analyzing pick rates, site execution speed, and how Viper alterations are reshaping international competitive play.',
    publishedAt: 'October 22, 2026',
    readTime: '4 min read',
    category: 'Esports',
    heroImage: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Kai Chen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
      role: 'Esports Correspondent'
    },
    tags: ['Valorant', 'VCT', 'Esports', 'Riot Games', 'Meta Analysis'],
    relatedGameId: 'valorant',
    content: [
      'The international Valorant Champions Tour season has kicked off with drastic alterations to agent pick rates. Following balance adjustments to Viper\'s fuel gauge and Omen\'s Paranoia projectile speed, coaches have favored explosive duelists.',
      'Neon has surged into prominence on maps with extensive linear corridors, with teams chaining slide-peeks with flash assistance to blow through traditional choke holds.',
      'As Masters draws near, regional powerhouses are testing triple-initiator setups that prioritize information denial over static territory anchoring.'
    ],
    relatedArticleIds: ['cs2-autumn-major-results', 'overwatch2-survey-pricing']
  },
  {
    id: 'cs2-autumn-major-results',
    slug: 'counter-strike-2-major-tournament-subtick-analysis',
    title: 'Counter-Strike 2 Major Highlights: Sub-Tick In Action',
    subtitle: 'Valve\'s latest sub-tick updates show measurable reduction in peekers\' advantage during LAN grand finals.',
    excerpt: 'Professional players weigh in on weapon balance, MR12 economy strain, and smoke grenade line-of-sight interactions on LAN.',
    publishedAt: 'October 21, 2026',
    readTime: '5 min read',
    category: 'Esports',
    heroImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Kai Chen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
      role: 'Esports Correspondent'
    },
    tags: ['Counter-Strike 2', 'CS2', 'Valve', 'Esports', 'Major'],
    relatedGameId: 'counter-strike-2',
    content: [
      'The first LAN major running Valve\'s latest network branch concluded this weekend with unprecedented viewership numbers. With sub-tick animations tightly synchronized to frame render times, tournament pros reported crisper AWP flick consistency.',
      'The strategic utilization of HE grenades to briefly punch sightlines through defensive smokes created dramatic round-winning clutch moments in overtime rounds on Anubis.',
      'Analysts continue to monitor round economy, as MR12 demands near-flawless buy discipline, leaving little room for consecutive force-buys.'
    ],
    relatedArticleIds: ['valorant-champions-tour-recap', 'cod-mw2-trailer-breakdown']
  },
  {
    id: 'pc-gaming-handhelds-future',
    slug: 'the-evolution-of-pc-gaming-handhelds-oled-battery',
    title: 'The Evolution of PC Handhelds: Silicon Efficiency & OLED Displays',
    subtitle: 'How APUs and software handheld modes are transforming portable high-end PC gaming.',
    excerpt: 'Comparing performance per watt, battery optimizations, and proton compatibility layers across modern mobile gaming devices.',
    publishedAt: 'October 20, 2026',
    readTime: '5 min read',
    category: 'Tech',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
      role: 'Industry Analyst'
    },
    tags: ['Hardware', 'Steam Deck', 'Handhelds', 'Tech', 'PC Gaming'],
    content: [
      'Portable PC gaming has graduated from an experimental niche into a dominant hardware category. Custom AMD APUs paired with vibrant 90Hz and 120Hz OLED panels now provide battery runtimes exceeding 4 to 6 hours on indie and tactical titles.',
      'Software optimizations—specifically custom driver shaders and intelligent power throttling down to 10W—enable visually demanding titles like Cyberpunk 2077 and Forza Horizon 5 to maintain stable framerates on the go.',
      'As major operating system vendors roll out dedicated handheld UI shells, the barrier between console convenience and PC library freedom has never been thinner.'
    ],
    relatedArticleIds: ['horizon-update-patch', 'cod-mw2-trailer-breakdown']
  }
];
