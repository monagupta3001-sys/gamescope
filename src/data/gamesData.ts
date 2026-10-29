import { Game } from '../types';

export const GAMES_DATA: Game[] = [
  {
    id: 'minecraft',
    slug: 'minecraft',
    title: 'Minecraft',
    shortDescription: 'The sandbox building and survival phenomenon that lets players explore infinite procedurally generated block worlds.',
    genre: 'Sandbox',
    releaseYear: 2011,
    developer: 'Mojang Studios',
    publisher: 'Xbox Game Studios',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch', 'iOS', 'Android'],
    rating: 9.8,
    esrb: 'Everyone 10+',
    rank: 1,
    isPopular: true,
    isFeatured: true,
    bannerUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Minecraft transports players into an infinite 3D voxel sandbox. There is no predefined narrative; instead, emergent stories are shaped entirely by player curiosity, survival instincts, and boundless architectural ambition across the Overworld, Nether, and The End dimensions.',
      coreGameplay: 'Players gather resources, craft tools, harvest crops, brew potions, construct fortifications, and fend off nocturnal hostile mobs including Creepers, Skeletons, and Phantoms. Gameplay flows seamlessly between perilous subterranean exploration and deliberate creative engineering.',
      specialMechanics: [
        'Redstone Logic: Turing-complete in-game electrical wiring allowing automation, computing machines, and trap mechanisms.',
        'Procedural Biome Generation: Dynamic terrain generation featuring jagged peaks, lush deep dark caves, mangrove swamps, and trial chambers.',
        'Extensive Modding Ecosystem: Complete player-driven engine extensions, shader packs, and server-side datapacks.'
      ],
      editionsAndModes: [
        {
          title: 'Java Edition',
          description: 'The original PC release optimized for community modding (Fabric/Forge), snapshot testing, and deeply customizable multiplayer servers.'
        },
        {
          title: 'Bedrock Edition',
          description: 'Built on the RenderDragon C++ engine providing seamless cross-play across consoles, mobile devices, and Windows with Minecraft Marketplace integration.'
        },
        {
          title: 'Survival & Hardcore Mode',
          description: 'Manage health, hunger, and gear degradation. In Hardcore, world death is permanent with locked difficulty.'
        },
        {
          title: 'Creative & Adventure Mode',
          description: 'Unlimited resources with flying mechanics for majestic builds, or locked block permissions for custom narrative story maps.'
        }
      ],
      systemRequirements: {
        minimum: {
          os: 'Windows 10 (64-bit) / macOS 10.14.5 / Linux',
          cpu: 'Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz',
          gpu: 'Intel HD Graphics 4000 / AMD Radeon R5 series',
          ram: '4 GB RAM',
          storage: '4 GB available space'
        },
        recommended: {
          os: 'Windows 11 / Latest 64-bit Linux distribution',
          cpu: 'Intel Core i5-4690 3.5GHz / AMD FX-8370 4.0 GHz',
          gpu: 'GeForce 700 Series / AMD Radeon Rx 200 Series',
          ram: '8 GB RAM',
          storage: '8 GB SSD space'
        }
      }
    },
    keyFeatures: [
      'Infinite block world procedural generation',
      'Complex Redstone automation circuits',
      'Cross-platform Bedrock multiplayer and Java dedicated servers',
      'Rich survival loop: Mining, Crafting, Enchanting, and Boss battles',
      'Vibrant community resource packs, shaders, and community creations'
    ],
    guidesSummary: [
      { id: 'minecraft-first-night', title: 'Surviving Your First Night & Basic Tool Hierarchy', readTime: '5 min read', difficulty: 'Beginner' },
      { id: 'minecraft-redstone-basics', title: 'Redstone Logic Gates and Automatic Crop Harvesters', readTime: '9 min read', difficulty: 'Intermediate' },
      { id: 'minecraft-nether-navigation', title: 'Bastion Raiding and Netherite Armor Upgrading', readTime: '7 min read', difficulty: 'Advanced' }
    ]
  },
  {
    id: 'gta-v',
    slug: 'gta-v',
    title: 'Grand Theft Auto V',
    shortDescription: 'The genre-defining open-world crime epic set in the sprawling, satirical sun-soaked metropolis of Los Santos and Blaine County.',
    genre: 'Open World Action',
    releaseYear: 2013,
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One'],
    rating: 9.7,
    esrb: 'Mature 17+',
    rank: 2,
    isPopular: true,
    isFeatured: true,
    bannerUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Set in the fictional state of San Andreas, GTA V weaves the intertwined lives of three distinct protagonists: retired bank robber Michael De Santa, street hustler Franklin Clinton, and unpredictable psychopath Trevor Philips. Together they pull off audacious multi-part heists while surviving corrupt federal agencies.',
      coreGameplay: 'Seamlessly switch between characters on the fly. Experience high-octane vehicle handling, intense cover-based gunplay, aerial dogfights, and rich side activities including golf, stock trading, skydiving, and deep property management.',
      specialMechanics: [
        'Tri-Protagonist Dynamics: Unique special abilities (Franklin\'s driving bullet-time, Michael\'s combat focus, Trevor\'s berserk damage reduction).',
        'Multi-stage Heist Planning: Choose between subtle stealth setups or heavy brute-force approaches with hired specialist crew members.',
        'GTA Online Universe: A continuously expanding persistent multiplayer ecosystem with player-owned criminal enterprises, night clubs, and doomsday heists.'
      ],
      editionsAndModes: [
        {
          title: 'Story Mode',
          description: 'A cinematic 30-hour blockbuster narrative following the three protagonists across Los Santos.'
        },
        {
          title: 'GTA Online',
          description: 'Multiplayer underworld sandbox supporting 30-player sessions with continuous updates, races, and collaborative business empires.'
        },
        {
          title: 'Director Mode & Rockstar Editor',
          description: 'Advanced in-game cinematic suite enabling players to film, stage, and edit custom machinima videos.'
        }
      ],
      systemRequirements: {
        minimum: {
          os: 'Windows 10 64 Bit',
          cpu: 'Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core @ 2.5GHz',
          gpu: 'NVIDIA 9800 GT 1GB / AMD HD 4870 1GB',
          ram: '4 GB RAM',
          storage: '72 GB available space'
        },
        recommended: {
          os: 'Windows 11 64 Bit',
          cpu: 'Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz',
          gpu: 'NVIDIA GTX 660 2GB / AMD HD 7870 2GB',
          ram: '8 GB RAM',
          storage: '100 GB SSD space'
        }
      }
    },
    keyFeatures: [
      'Expansive world combining urban Los Santos with rural Blaine County',
      'Dynamic character swapping between Michael, Trevor, and Franklin',
      'Multi-stage cinematic heists with customizable crew choices',
      'Massive online sandbox with persistent businesses and heists',
      'First-person driving and shooting viewpoints added on modern platforms'
    ],
    guidesSummary: [
      { id: 'gta-stock-market-guide', title: 'Maximizing Assassination Missions with the Bawsaq Stock Exchange', readTime: '6 min read', difficulty: 'Intermediate' },
      { id: 'gta-online-starter-guide', title: 'Top Solo Businesses to Build Your First 10 Million Dollars', readTime: '8 min read', difficulty: 'Beginner' }
    ]
  },
  {
    id: 'valorant',
    slug: 'valorant',
    title: 'Valorant',
    shortDescription: 'Riot Games\' tactical 5v5 character-based first-person shooter combining razor-sharp precision gunplay with hyper-unique agent abilities.',
    genre: 'Tactical Shooter',
    releaseYear: 2020,
    developer: 'Riot Games',
    publisher: 'Riot Games',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X/S'],
    rating: 9.3,
    esrb: 'Teen 13+',
    rank: 3,
    isPopular: true,
    isFeatured: true,
    bannerUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Set in a near-future Earth following a catastrophic global event known as First Light. Radiation alters life on the planet and empowers select individuals called Radiants with superhuman capabilities, recruited by the secretive Valorant Protocol to defend against parallel mirror realities.',
      coreGameplay: 'Two teams of 5 attack or defend the Spike across 25 rounds (first to 13 wins). One-shot headshot lethality is paramount, demanding precise crosshair placement, spray pattern counter-movement, and strict team economy management every round.',
      specialMechanics: [
        'Agent Roles: Duelists (entry fraggers), Initiators (recon & flash gathering), Controllers (smoke vision blockers), and Sentinels (defensive anchors).',
        'Tactical Ability Economy: Abilities are purchased during pre-round buy phases and augment gunplay rather than replace it.',
        '128-Tick Dedicated Servers: High-performance netcode with Riot Vanguard proprietary kernel-level anti-cheat security.'
      ],
      editionsAndModes: [
        {
          title: 'Competitive (Ranked)',
          description: 'Standard 24+ round overtime tournament rules with rank tiers from Iron through Radiant.'
        },
        {
          title: 'Unrated & Swiftplay',
          description: 'Casual rule sets including Swiftplay (first to 5 rounds) for rapid 15-minute warmup sessions.'
        },
        {
          title: 'Spike Rush & Deathmatch',
          description: 'Fast-paced weapon mastery and target practice environments.'
        },
        {
          title: 'Premier Tournament System',
          description: 'In-client competitive path-to-pro division tournaments bridging casual players directly into the VCT challenger leagues.'
        }
      ],
      systemRequirements: {
        minimum: {
          os: 'Windows 10 (Build 17134+) 64-bit',
          cpu: 'Intel Core 2 Duo E8400 / AMD Athlon 200GE',
          gpu: 'Intel HD 4000 / AMD Radeon R5 200 (30 FPS)',
          ram: '4 GB RAM',
          storage: '30 GB SSD space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel i3-4150 / AMD Ryzen 3 1200',
          gpu: 'GeForce GT 730 / AMD Radeon R7 240 (60-144+ FPS)',
          ram: '8 GB RAM',
          storage: '40 GB SSD space'
        }
      }
    },
    keyFeatures: [
      'Precision gunplay with strict counter-strafing requirements',
      '25+ unique Agents divided into 4 strategic combat roles',
      '128-tick rate competitive dedicated server infrastructure',
      'Rich VCT global esports circuit with international Masters tournaments',
      'Deep map variety with unique features like teleporters and ziplines'
    ],
    guidesSummary: [
      { id: 'valorant-crosshair-placement', title: 'Crosshair Placement & Counter-Strafing Fundamentals', readTime: '4 min read', difficulty: 'Beginner' },
      { id: 'valorant-smoke-lineups', title: 'Essential Controller Smoke Lineups on Ascent and Haven', readTime: '8 min read', difficulty: 'Intermediate' }
    ]
  },
  {
    id: 'counter-strike-2',
    slug: 'counter-strike-2',
    title: 'Counter-Strike 2',
    shortDescription: 'Valve\'s definitive overhaul of the legendary competitive tactical shooter, powered by the Source 2 engine with volumetric smoke and sub-tick precision.',
    genre: 'Tactical Shooter',
    releaseYear: 2023,
    developer: 'Valve',
    publisher: 'Valve',
    platforms: ['PC'],
    rating: 9.4,
    esrb: 'Mature 17+',
    rank: 4,
    isPopular: true,
    isFeatured: true,
    bannerUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'The ultimate pure competitive simulation of Counter-Terrorists confronting Terrorists over high-stakes bomb defusal and hostage rescue objectives in legendary global locales including Mirage, Inferno, Nuke, Dust II, and Anubis.',
      coreGameplay: 'Zero superpowers or character abilities. Pure mastery of weapon recoil spray patterns, movement mechanics, situational sound cues, utility trajectory geometry (flashbangs, HE grenades, Molotovs, smokes), and disciplined round budgeting.',
      specialMechanics: [
        'Responsive Volumetric Smoke: Smoke grenades create dynamic 3D volumetric clouds that interact with environmental lighting, bullets, and HE grenades that briefly blow openings through them.',
        'Sub-Tick Architecture: Server updates tick rate tracking so firing, jumping, and peeking calculate the exact millisecond inputs occurred.',
        'Overhauled Source 2 Rendering: Physically based rendering (PBR), realistic reflections, water caustics, and enhanced audio clarity.'
      ],
      editionsAndModes: [
        {
          title: 'Premier Mode',
          description: 'Active duty map veto system with MR12 (first to 13 rounds) and numerical global CS Rating leaderboards.'
        },
        {
          title: 'Competitive Mode',
          description: 'Per-map skill groups allowing players to hone rankings on specific maps independently.'
        },
        {
          title: 'Deathmatch & Arms Race',
          description: 'Rapid respawn gun game practice modes for warmup and weapon muscle memory.'
        }
      ],
      systemRequirements: {
        minimum: {
          os: 'Windows 10 64-bit',
          cpu: '4 hardware CPU threads - Intel Core i5 750 or higher',
          gpu: 'Video card must be 1 GB or more and should be DirectX 11-compatible',
          ram: '8 GB RAM',
          storage: '85 GB available space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
          gpu: 'NVIDIA RTX 3060 / AMD Radeon RX 6600 XT',
          ram: '16 GB RAM',
          storage: '85 GB NVMe SSD space'
        }
      }
    },
    keyFeatures: [
      'Revolutionary volumetric smokes interactable with bullets and grenades',
      'Sub-tick server architecture eliminating tick-based input discrepancies',
      'Revamped Premier mode with official CS Rating leaderboards',
      'Complete physical material rendering and realistic lighting',
      'Valve Anti-Cheat (VAC) live match cancellation systems'
    ],
    guidesSummary: [
      { id: 'cs2-ak47-spray', title: 'Mastering the AK-47 Recoil Pattern & Burst Control in CS2', readTime: '5 min read', difficulty: 'Beginner' },
      { id: 'cs2-mirage-smokes', title: 'Essential Mirage A-Site Smoke Lineups from T-Spawn', readTime: '6 min read', difficulty: 'Intermediate' }
    ]
  },
  {
    id: 'fortnite',
    slug: 'fortnite',
    title: 'Fortnite',
    shortDescription: 'Epic Games\' vibrant 100-player Battle Royale phenomenon, creative sandbox universe, and global pop-culture crossover platform.',
    genre: 'Battle Royale',
    releaseYear: 2017,
    developer: 'Epic Games',
    publisher: 'Epic Games',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch', 'Android', 'iOS'],
    rating: 9.2,
    esrb: 'Teen 13+',
    rank: 5,
    isPopular: true,
    isFeatured: true,
    bannerUrl: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Drop from the Battle Bus onto a constantly evolving island centered around the Zero Point. With every seasonal chapter, realities collide, altering terrain, bringing mythological gods, cinematic superheroes, anime icons, and sci-fi weaponry into the loop.',
      coreGameplay: 'Skydive, loot weapons, shields, and consumables, outrun the shrinking storm circle, and fight to be the last survivor or squad standing. Players choose between standard high-speed building combat or the fluid, positioning-focused Zero Build mode.',
      specialMechanics: [
        'Zero Build Mode: Removes wood/brick/metal construction, granting an overshield and emphasizing tactical cover, mantle acrobatics, and tactical sprinting.',
        'Unreal Engine 5 Showcase: Powered by Nanite virtualized geometry, Lumen real-time global illumination, and Chaos destruction physics.',
        'Unreal Editor for Fortnite (UEFN): Deep Creator economy allowing independent studios to build full bespoke game genres in-client.'
      ],
      editionsAndModes: [
        {
          title: 'Battle Royale & Zero Build',
          description: 'Solo, Duos, Trios, and Squads competitive survival with ongoing seasonal ranked divisions.'
        },
        {
          title: 'LEGO Fortnite',
          description: 'A massive survival crafting adventure developed in official collaboration with the LEGO Group.'
        },
        {
          title: 'Rocket Racing & Fortnite Festival',
          description: 'Arcade racing from Psyonix and rhythm gameplay curated by Harmonix directly inside the launcher.'
        }
      ],
      systemRequirements: {
        minimum: {
          os: 'Windows 10 64-bit',
          cpu: 'Core i3-3225 3.3 GHz',
          gpu: 'Intel HD 4000 / AMD Radeon Vega 8',
          ram: '8 GB RAM',
          storage: '40 GB available space'
        },
        recommended: {
          os: 'Windows 11 64-bit',
          cpu: 'Core i7-8700 / AMD Ryzen 7 3700x',
          gpu: 'Nvidia RTX 2060 / AMD Radeon RX 5700',
          ram: '16 GB RAM',
          storage: '60 GB SSD space'
        }
      }
    },
    keyFeatures: [
      'Battle Royale and Zero Build modes accommodating all combat playstyles',
      'Unreal Engine 5.4 Nanite & Lumen cutting-edge visual presentation',
      'Extensive interconnected multiverse: LEGO, Rocket Racing, and Festival',
      'Dynamic seasonal events, mythic weapons, and vehicle modifications',
      'Cross-progression and unified inventory across all platforms'
    ],
    guidesSummary: [
      { id: 'fortnite-zero-build-tips', title: 'Top 7 Rotational Strategies to Win in Zero Build Ranked', readTime: '5 min read', difficulty: 'Beginner' },
      { id: 'fortnite-movement-tech', title: 'Slide Kicking, Sprint Staminas, and Mantle Speed Boosts', readTime: '6 min read', difficulty: 'Intermediate' }
    ]
  },
  {
    id: 'roblox',
    slug: 'roblox',
    title: 'Roblox',
    shortDescription: 'The ultimate virtual universe enabling millions of creators to build, share, and monetize deeply diverse 3D multiplayer experiences.',
    genre: 'Platform / Creation',
    releaseYear: 2006,
    developer: 'Roblox Corporation',
    publisher: 'Roblox Corporation',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox One', 'iOS', 'Android'],
    rating: 8.9,
    esrb: 'Everyone 10+',
    rank: 6,
    isPopular: true,
    bannerUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Roblox is an expansive social gaming platform where users don dynamic custom avatars and jump across millions of player-created worlds, from anime combat arenas and roleplay towns to horror escapes and hyper-detailed driving simulators.',
      coreGameplay: 'Users browse and launch distinct games created in Roblox Studio using the Luau scripting engine. Persistent avatars maintain collected clothing, accessories, and social friendships across worlds.',
      specialMechanics: [
        'Luau Scripting Engine: Lightweight, sandboxed scripting language allowing creators to craft custom physics and multiplayer networking.',
        'Avatar Customization: Millions of UGC (User Generated Content) hats, outfits, body rigs, and expressive emotes.',
        'Virtual Economy: Robux micro-currency facilitating developer payouts and in-experience trading.'
      ]
    },
    keyFeatures: [
      'Millions of user-created games spanning all imaginable genres',
      'Roblox Studio developer suite with cloud hosting and asset libraries',
      'Seamless cross-platform co-op on PC, consoles, and mobile devices',
      'Vibrant social avatar customization with UGC marketplace'
    ]
  },
  {
    id: 'pubg-battlegrounds',
    slug: 'pubg-battlegrounds',
    title: 'PUBG: Battlegrounds',
    shortDescription: 'The gritty, realistic military survival shooter that pioneered the battle royale genre across realistic massive tactical battlefields.',
    genre: 'Battle Royale',
    releaseYear: 2017,
    developer: 'PUBG Studios',
    publisher: 'KRAFTON',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One'],
    rating: 8.8,
    esrb: 'Teen 13+',
    rank: 7,
    isPopular: true,
    bannerUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: '100 players parachute onto sprawling islands including Erangel, Miramar, Taego, and Deston. Military equipment, armor vests, medical kits, and attachments are scavenged under tension as the blue energy zone steadily constricts.',
      coreGameplay: 'Hardcore ballistics modeling including bullet drop, muzzle velocity, and wind resistance. Players utilize real military tactics, vehicle ambushes, and building breach maneuvers.',
      specialMechanics: [
        'Realistic Ballistics Simulation: Bullet trajectory is physically computed with real velocity falloff and drag.',
        'Tactical Gear & Vehicles: Drones, blue chip transmitters, mountain bikes, and tactical packs expand situational awareness.'
      ]
    },
    keyFeatures: [
      'Authentic military gunplay with realistic recoil and bullet flight physics',
      'Expansive 8x8 km tactical maps with distinct weather conditions',
      'Free-to-play model with competitive ranked seasons',
      'Intense Winner Winner Chicken Dinner adrenaline rush'
    ]
  },
  {
    id: 'apex-legends',
    slug: 'apex-legends',
    title: 'Apex Legends',
    shortDescription: 'Respawn Entertainment\'s fluid, high-mobility squad hero shooter set in the iconic frontier sci-fi universe of Titanfall.',
    genre: 'Battle Royale',
    releaseYear: 2019,
    developer: 'Respawn Entertainment',
    publisher: 'Electronic Arts',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One', 'Nintendo Switch'],
    rating: 9.1,
    esrb: 'Teen 13+',
    rank: 8,
    isPopular: true,
    bannerUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Out on the fringes of the Outlands, legendary competitors battle for glory, fame, and fortune in the Apex Games. Each Legend possesses a distinct backstory, motivations, and tactical kit.',
      coreGameplay: 'Fast-paced 3-player squad combat focused on unmatched slide jumping, wall running, zip-line surfing, and synergy between Legend abilities.',
      specialMechanics: [
        'Smart Ping Communication System: Non-verbal contextual ping wheel communicating loot, enemy locations, and tactical movements.',
        'Respawn Beacons: Eliminating full squad wipeout by recovering teammate banner cards and calling in dropships.',
        'Evolving Body Shields: Shields level up through dealing combat damage, rewarding aggressive skirmishes.'
      ]
    },
    keyFeatures: [
      'World-class movement mechanics engineered by Respawn',
      'Diverse cast of 25+ Legends with complimentary abilities',
      'Revolutionary non-verbal ping wheel system',
      'Dynamic ring progression and evo-armor mechanics'
    ]
  },
  {
    id: 'league-of-legends',
    slug: 'league-of-legends',
    title: 'League of Legends',
    shortDescription: 'Riot Games\' premier 5v5 multiplayer online battle arena (MOBA) boasting deep strategic depth and the world\'s largest esports ecosystem.',
    genre: 'MOBA',
    releaseYear: 2009,
    developer: 'Riot Games',
    publisher: 'Riot Games',
    platforms: ['PC'],
    rating: 9.2,
    esrb: 'Teen 13+',
    rank: 9,
    isPopular: true,
    bannerUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1600&auto=format&fit=crop',
    coverUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=600&auto=format&fit=crop',
    overview: {
      storyAndWorld: 'Set in the magical continent of Runeterra, champions from rival kingdoms including Demacia, Noxus, Ionia, Piltover, and Zaun clash on Summoner\'s Rift for arcane supremacy.',
      coreGameplay: 'Two teams of 5 champions command lanes, farm minions for gold, secure elemental dragon and Baron Nashor objectives, and push to shatter the enemy Nexus.',
      specialMechanics: [
        '165+ Champions: Broad role categorization across Top, Jungle, Mid, Bot Carry, and Support.',
        'Dynamic Itemization: Complex item builds allowing adaptive counter-play against magic and physical damage.',
        'Vision Control: Strategic ward placement to illuminate the fog of war.'
      ]
    },
    keyFeatures: [
      'Unsurpassed strategic depth with over 160 unique champions',
      'Premier global esports circuit culminating in the World Championship',
      'Regular fortnightly balance patches and seasonal overhauls',
      'Completely free to play with strictly cosmetic monetization'
    ]
  },
  {
    id: 'call-of-duty',
    slug: 'call-of-duty',
    title: 'Call of Duty: Modern Warfare',
    shortDescription: 'The explosive military first-person shooter franchise delivering blockbuster cinematic campaigns and high-octane multiplayer.',
    genre: 'First-Person Shooter',
    releaseYear: 2022,
    developer: 'Infinity Ward',
    publisher: 'Activision',
    platforms: ['PC', 'PlayStation 5', 'PlayStation 4', 'Xbox Series X/S', 'Xbox One'],
    rating: 9.0,
    esrb: 'Mature 17+',
    rank: 10,
    isPopular: true,
    bannerUrl: '/assets/aistudio/kB7KIeE4XiJ1PObcDGzVnd0Uer0YEzllVF2yiwIfAfepMotXCRFJvakLkAZPZNFyhx-usZwJWX7uNYnh4Q9sfkFzvKTNHNgDbBEZ2OUDoiMPtgIeduu0bJV5dG7eSyE-Bxe6M1IdrvZueWDS6T3HaB4XHiPX6EBP6DtRVWA7FOoMp0_lkRdPmqhy7mtWTREv_48b214fb.jpeg',
    coverUrl: '/assets/aistudio/kB7KIeE4XiJ1PObcDGzVnd0Uer0YEzllVF2yiwIfAfepMotXCRFJvakLkAZPZNFyhx-usZwJWX7uNYnh4Q9sfkFzvKTNHNgDbBEZ2OUDoiMPtgIeduu0bJV5dG7eSyE-Bxe6M1IdrvZueWDS6T3HaB4XHiPX6EBP6DtRVWA7FOoMp0_lkRdPmqhy7mtWTREv_48b214fb.jpeg',
    overview: {
      storyAndWorld: 'Join the legendary Task Force 141 featuring Captain John Price, Kyle "Gaz" Garrick, Simon "Ghost" Riley, and John "Soap" MacTavish on covert global operations combatting rogue cartels and terrorist networks.',
      coreGameplay: 'Visceral, tactile weapon handling with advanced Gunsmith customization, tactical sprint, swimming mechanics, and fast time-to-kill gunplay across multiplayer maps and Warzone battle royale.',
      specialMechanics: [
        'Gunsmith 2.0: Deep receiver and attachment tuning allowing cross-weapon component sharing.',
        'Warzone Integration: Massive multi-squad tactical operations across Urzikstan with Gulag 1v1 redeployment.',
        'Water and Amphibious Combat: Realistic underwater ballistics and vehicle traversal.'
      ]
    },
    keyFeatures: [
      'Iconic Task Force 141 campaign and intense tactical missions',
      'Industry-leading sound design and weapon animations',
      'Seamless Warzone Battle Royale cross-progression',
      'Gunsmith platform progression sharing attachments between weapons'
    ]
  }
];
