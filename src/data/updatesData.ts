import { GameUpdate } from '../types';

export const GAME_UPDATES: GameUpdate[] = [
  {
    id: 'update-minecraft-1-21',
    gameId: 'minecraft',
    gameTitle: 'Minecraft',
    version: 'Update 1.21',
    title: 'Tricky Trials — The Crafter, Breeze Mobs & Trial Chambers',
    date: 'October 24, 2026',
    category: 'New Content',
    shortDescription: 'Unleashes the revolutionary Crafter block for automatic item fabrication, mysterious subterranean Trial Chambers, and the dynamic Breeze hostile mob.',
    highlights: [
      'The Crafter: Redstone-powered automatic crafting table accepting hopper inputs.',
      'Trial Chambers: Procedurally generated labyrinthine underground combat halls.',
      'The Breeze: High-speed agile mob firing explosive wind charges.',
      'The Mace: New heavy melee weapon with damage scaling based on player fall distance.'
    ],
    fullNotes: [
      'Introduced Trial Spawners that adjust hostile mob waves dynamically according to party size, dropping valuable Trial Keys upon completion.',
      'The Crafter now enables full automated factories without third-party modifications, respecting inventory slots toggled on or off by players.',
      'Added 20+ new Copper and Tuff decorative building blocks, including Copper Grates, Chiseled Copper, and Copper Doors that oxidize over time.',
      'Equipping the new Mace rewards vertical drop attacks: falling 10 blocks before impacting an enemy multiplies kinetic damage exponentially while negating fall impact upon hit.',
      'Fixed over 140 community-reported bugs regarding Nether portal synchronization and villager trade refresh loops.'
    ],
    isVerified: true
  },
  {
    id: 'update-valorant-9-08',
    gameId: 'valorant',
    gameTitle: 'Valorant',
    version: 'Patch 9.08',
    title: 'Sunset Map Rebalancing & Controller Utility Tuning',
    date: 'October 22, 2026',
    category: 'Balance Changes',
    shortDescription: 'Significant geometry adjustments to B Site and Mid Courtyard on Sunset, alongside Omen and Viper ability economy calibrations.',
    highlights: [
      'Sunset B Site rework: Widened choke point and reduced awkward blind corners.',
      'Mid Courtyard: Added low indestructible planters for defender retake options.',
      'Viper Poison Cloud: Fuel regeneration rate normalized by +8%.',
      'Esports Mode: Added spectator tactical radar overlays for live Premier broadcasts.'
    ],
    fullNotes: [
      'Map Sunset: Removed the narrow crevice near B Boba, replacing it with a clean 90-degree corner to reduce spam utility clutter.',
      'Agent Omen: Paranoia flash speed adjusted to standard 1.25s projectile transit, standardizing defensive reaction windows.',
      'Agent Iso: Double Tap shield activation window shortened from 15s to 12s to reward immediate aggressive engagement.',
      'Ranked Performance: Improved server tick consistency during multiple high-density smoke overlaps.',
      'Fixed UI bug where Premier tournament bracket standings occasionally failed to update match overtime scores in real time.'
    ],
    isVerified: true
  },
  {
    id: 'update-gta5-bounties',
    gameId: 'gta-v',
    gameTitle: 'Grand Theft Auto V',
    version: 'Online v1.69',
    title: 'Bottom Dollar Bounties & Police Enforcement Contracts',
    date: 'October 18, 2026',
    category: 'Gameplay',
    shortDescription: 'Establish a licensed bail enforcement agency alongside Maude Eccles, track high-profile fugitive targets across Blaine County, and unlock interceptor cruisers.',
    highlights: [
      'Bottom Dollar Bail Enforcement Agency property purchase available on Maze Bank Foreclosures.',
      'Standard & High-Value Fugitive Targets with non-lethal apprehension bonuses.',
      'New Law Enforcement Dispatch Work utilizing customizable unmarked patrol vehicles.',
      'Increased payout rewards on Gunrunning sell missions and Nightclub safe capacities.'
    ],
    fullNotes: [
      'Players can now operate the Bail Enforcement Office, managing holding cells, tracking vans, and dispatching agent staff for passive income.',
      'Added 9 brand new vehicles, including the Declasse Impaler SZ Cruiser and Bravado Greenwood Cruiser for authorized dispatch missions.',
      'Nightclub daily safe capacity boosted from $250,000 to $300,000, and overall production acceleration increased when popularity exceeds 80%.',
      'PC Platform Quality: Enhanced anti-tamper telemetry and automated matchmaking lobby cleanup routines.',
      'Fixed an exploit where vehicle cargo export timers were bypassed during bad-sport server transfers.'
    ],
    isVerified: true
  },
  {
    id: 'update-fortnite-v31-30',
    gameId: 'fortnite',
    gameTitle: 'Fortnite',
    version: 'v31.30',
    title: 'Fortnitemares & Seasonal Mythic Weapon Crucible',
    date: 'October 15, 2026',
    category: 'Seasonal',
    shortDescription: 'The annual spooky celebration haunts the Island with the return of Billy the Puppet, Chainsaw traversal weapons, and the Horde Rush LTM.',
    highlights: [
      'Chainsaw Weapon: Rev up to dash forward, jump through buildings, or deal devastating melee damage.',
      'Woodstake Shotgun & Pumpkin Launcher unvaulted with updated damage falloffs.',
      'Horde Rush LTM returns: Co-op 4-player survival against Cube Monster waves.',
      'New Halloween crossover outfits and interactive quest punchcards.'
    ],
    fullNotes: [
      'Introduced the Chainsaw weapon class: players can sprint while revving for high-speed linear mobility or execute combo slashes against vehicle armor.',
      'Added Billy the Puppet explosive trike traps: explosive autonomous puppets that track nearest enemy footstep audio.',
      'Zero Build Adjustment: Shield Bubble Jr. deploy duration reduced from 20s to 16s to prevent stagnant end-game camp setups.',
      'Unreal Engine 5.4 performance: Reduced stuttering when entering high-density player POIs like Doomstadt.',
      'Resolved locker preset bug where wrap assignments reverted to default after match completions.'
    ],
    isVerified: true
  },
  {
    id: 'update-cs2-autumn',
    gameId: 'counter-strike-2',
    gameTitle: 'Counter-Strike 2',
    version: 'Build 1.40.1.2',
    title: 'Sub-Tick Jump Alignment & Mirage Texture Polish',
    date: 'October 12, 2026',
    category: 'Bug Fixes',
    shortDescription: 'Precise calibration for grenade jump-throw consistency across all frame rates, plus updated audio reverb occlusion in underground corridors.',
    highlights: [
      'Grenade jump-throw trajectory math normalized to 100% reproducible arcs.',
      'Mirage A-site Palace wood penetration damage curves rebalanced.',
      'Weapon recoil recovery animation smoothed during sudden frame drops.',
      'Overpass community workshop integration and clipping improvements.'
    ],
    fullNotes: [
      'Refined the sub-tick input buffer for jump-throws so grenade release heights are identical regardless of whether user framerate is 60 FPS or 360 FPS.',
      'Adjusted bullet penetration values for wooden boxes on Mirage A-site to match original CS:GO wallbang calculations.',
      'Updated positional audio algorithms in subterranean map areas (e.g. Nuke vents, Overpass sewers) to ensure footsteps above ground are not misidentified as level.',
      'Premier Mode: Clarified map pick/ban phase UI timers and resolved rare disconnection penalties during technical warmups.'
    ],
    isVerified: true
  }
];
