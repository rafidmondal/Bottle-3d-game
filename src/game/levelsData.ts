import { LevelConfig, ObstacleType, LevelStep, RoomTheme, LevelTargetStage } from '../types';

export const HAND_AUTHORED_LEVELS: LevelConfig[] = [
  // ─── CHUNK 1: LEVELS 1–10 (FOUNDATIONS & FIRST CHALLENGES) ───────────────
  {
    id: 1,
    title: 'Close Table Coaster',
    description: 'Gentle short flick! A light drag easily lands on the close table target.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    targetHeight: 0,
    targetDistance: 1.35,
    targetRadius: 0.85,
    targetX: 0,
    obstacleType: 'none',
    starsScoreRequirement: [1, 2, 3],
  },
  {
    id: 2,
    title: 'Left Parcel Box',
    description: 'Angled flick to the left! Pop the bottle squarely onto the cardboard delivery parcel.',
    layoutStyle: 'side-left',
    requiredFlips: 1,
    targetHeight: 0.26,
    targetDistance: 1.55,
    targetRadius: 0.50,
    targetX: -0.28,
    obstacleType: 'minibox',
    starsScoreRequirement: [1, 2, 4],
  },
  {
    id: 3,
    title: 'Study Book Stack',
    description: 'Gentle loft to the right! Stick the landing on the leather encyclopedia stack.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    targetHeight: 0.32,
    targetDistance: 1.65,
    targetRadius: 0.48,
    targetX: 0.28,
    obstacleType: 'books',
    starsScoreRequirement: [1, 2, 4],
  },
  {
    id: 4,
    title: 'Mid-Range Bullseye',
    description: 'Moderate swipe straight ahead onto the colorful precision coaster ring.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    targetHeight: 0,
    targetDistance: 1.80,
    targetRadius: 0.68,
    targetX: 0,
    obstacleType: 'none',
    starsScoreRequirement: [1, 2, 4],
  },
  {
    id: 5,
    title: 'Double Landing Trial',
    description: '2-Flip Sequence! Flip first onto the coffee stool, then stick the parcel box on the right.',
    layoutStyle: 'multi-step',
    requiredFlips: 2,
    targetHeight: 0.38,
    targetDistance: 1.70,
    targetRadius: 0.50,
    targetX: 0,
    obstacleType: 'stool',
    steps: [
      {
        title: 'Step 1: Low Coffee Stool',
        description: 'Moderate center swipe onto the wooden coffee stool.',
        targetHeight: 0.38,
        targetDistance: 1.70,
        targetRadius: 0.50,
        targetX: 0,
        obstacleType: 'stool',
      },
      {
        title: 'Step 2: Delivery Box Right',
        description: 'Angled flick to the right onto the delivery parcel.',
        targetHeight: 0.26,
        targetDistance: 1.95,
        targetRadius: 0.48,
        targetX: 0.30,
        obstacleType: 'minibox',
      },
    ],
    starsScoreRequirement: [2, 4, 6],
  },
  {
    id: 6,
    title: 'Bedside Nightstand',
    description: 'Angled flick to the right onto the polished wooden drawer nightstand.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    targetHeight: 0.45,
    targetDistance: 2.05,
    targetRadius: 0.48,
    targetX: 0.32,
    obstacleType: 'nightstand',
    starsScoreRequirement: [1, 2, 5],
  },
  {
    id: 7,
    title: 'Kitchen Microwave Cart',
    description: 'Land squarely on the countertop microwave cart straight ahead.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    targetHeight: 0.46,
    targetDistance: 2.10,
    targetRadius: 0.50,
    targetX: 0,
    obstacleType: 'microwave',
    starsScoreRequirement: [1, 2, 5],
  },
  {
    id: 8,
    title: 'Living Room TV Console',
    description: 'Wide flick angled left! Stick the wooden credenza top beside the flatscreen.',
    layoutStyle: 'side-left',
    requiredFlips: 1,
    targetHeight: 0.52,
    targetDistance: 2.25,
    targetRadius: 0.54,
    targetX: -0.32,
    obstacleType: 'tv',
    starsScoreRequirement: [1, 2, 5],
  },
  {
    id: 9,
    title: 'Gliding Hover Deck',
    description: 'Close-range moving drone! Time your gentle release as the deck drifts.',
    layoutStyle: 'moving',
    requiredFlips: 1,
    targetHeight: 0.36,
    targetDistance: 1.65,
    targetRadius: 0.50,
    targetX: 0,
    obstacleType: 'moving',
    movingSpeed: 0.85,
    movingDistance: 0.45,
    starsScoreRequirement: [1, 2, 5],
  },
  {
    id: 10,
    title: 'Kitchen Trio Circuit',
    description: '3-Flip Combo! Stick the Left Parcel, Center Microwave, and Right TV Console.',
    layoutStyle: 'multi-step',
    requiredFlips: 3,
    targetHeight: 0.28,
    targetDistance: 1.60,
    targetRadius: 0.48,
    targetX: -0.28,
    obstacleType: 'minibox',
    steps: [
      {
        title: 'Step 1: Left Parcel Box',
        description: 'Angled swipe to the left parcel.',
        targetHeight: 0.28,
        targetDistance: 1.60,
        targetRadius: 0.48,
        targetX: -0.28,
        obstacleType: 'minibox',
      },
      {
        title: 'Step 2: Microwave Cart',
        description: 'Centered medium swipe onto the microwave cart.',
        targetHeight: 0.46,
        targetDistance: 2.05,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'microwave',
      },
      {
        title: 'Step 3: TV Console Right',
        description: 'Angled loft to the right onto the TV console.',
        targetHeight: 0.52,
        targetDistance: 2.25,
        targetRadius: 0.50,
        targetX: 0.32,
        obstacleType: 'tv',
      },
    ],
    starsScoreRequirement: [3, 6, 9],
  },

  // ─── CHUNK 2: LEVELS 11–20 (DIVERSE ANGLES, HEIGHTS & RELAYS) ─────────────
  {
    id: 11,
    title: 'Studio Speaker Tower',
    description: 'Aim far right! Stick the summit of the studio subwoofer tower with confidence.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    targetHeight: 0.58,
    targetDistance: 2.35,
    targetRadius: 0.45,
    targetX: 0.36,
    obstacleType: 'speaker',
    starsScoreRequirement: [1, 3, 5],
  },
  {
    id: 12,
    title: 'Timber Cargo Crate',
    description: 'Solid straight loft onto the rugged wooden shipping crate.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    targetHeight: 0.48,
    targetDistance: 2.45,
    targetRadius: 0.50,
    targetX: 0,
    obstacleType: 'crate',
    starsScoreRequirement: [1, 3, 5],
  },
  {
    id: 13,
    title: 'Zigzag Double Strike',
    description: '2-Flip Challenge: Aim right to the book stack, then whip left to the bedside nightstand.',
    layoutStyle: 'multi-step',
    requiredFlips: 2,
    targetHeight: 0.34,
    targetDistance: 1.75,
    targetRadius: 0.48,
    targetX: 0.30,
    obstacleType: 'books',
    steps: [
      {
        title: 'Step 1: Book Stack Right',
        description: 'Loft rightward onto the encyclopedia volume.',
        targetHeight: 0.34,
        targetDistance: 1.75,
        targetRadius: 0.48,
        targetX: 0.30,
        obstacleType: 'books',
      },
      {
        title: 'Step 2: Nightstand Far Left',
        description: 'Cross-court swipe to the nightstand on the left.',
        targetHeight: 0.46,
        targetDistance: 2.20,
        targetRadius: 0.48,
        targetX: -0.34,
        obstacleType: 'nightstand',
      },
    ],
    starsScoreRequirement: [2, 5, 7],
  },
  {
    id: 14,
    title: 'Stainless Refrigerator',
    description: 'High upward power arc! Reach the tall stainless steel refrigerator top.',
    layoutStyle: 'elevated',
    requiredFlips: 1,
    targetHeight: 0.72,
    targetDistance: 2.65,
    targetRadius: 0.50,
    targetX: 0,
    obstacleType: 'fridge',
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 15,
    title: 'Furniture Hop Triple',
    description: '3-Flip Combo! Conquer the Coffee Stool, Left Books, and Right Washing Machine.',
    layoutStyle: 'multi-step',
    requiredFlips: 3,
    targetHeight: 0.38,
    targetDistance: 1.70,
    targetRadius: 0.50,
    targetX: 0,
    obstacleType: 'stool',
    steps: [
      {
        title: 'Step 1: Coffee Stool',
        description: 'Centered flick onto the round stool.',
        targetHeight: 0.38,
        targetDistance: 1.70,
        targetRadius: 0.50,
        targetX: 0,
        obstacleType: 'stool',
      },
      {
        title: 'Step 2: Study Books Left',
        description: 'Angled flick to the left book stack.',
        targetHeight: 0.34,
        targetDistance: 2.05,
        targetRadius: 0.46,
        targetX: -0.30,
        obstacleType: 'books',
      },
      {
        title: 'Step 3: Washing Machine Right',
        description: 'Power loft to the right washing machine.',
        targetHeight: 0.54,
        targetDistance: 2.35,
        targetRadius: 0.48,
        targetX: 0.32,
        obstacleType: 'washer',
      },
    ],
    starsScoreRequirement: [3, 7, 10],
  },
  {
    id: 16,
    title: 'Long Distance Coaster',
    description: 'Long throw test! A full-power forward swipe to reach the far table coaster ring.',
    layoutStyle: 'far-throw',
    requiredFlips: 1,
    targetHeight: 0,
    targetDistance: 3.10,
    targetRadius: 0.65,
    targetX: 0,
    obstacleType: 'none',
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 17,
    title: 'Laundry Room Washer',
    description: 'Aim leftward into a gentle breeze onto the flat top of the front-load washer.',
    layoutStyle: 'side-left',
    requiredFlips: 1,
    targetHeight: 0.54,
    targetDistance: 2.35,
    targetRadius: 0.48,
    targetX: -0.34,
    obstacleType: 'washer',
    wind: -0.15,
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 18,
    title: 'High Bar Stool Crosswind',
    description: 'Firm swipe slightly right, compensating for the leftward draft.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    targetHeight: 0.58,
    targetDistance: 2.75,
    targetRadius: 0.46,
    targetX: 0.15,
    obstacleType: 'stool',
    wind: 0.22,
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 19,
    title: 'Ascending Ascent Triple',
    description: '3 Consecutive Flips! Climb from Left Parcel, to Center Stool, to High Fridge.',
    layoutStyle: 'multi-step',
    requiredFlips: 3,
    targetHeight: 0.26,
    targetDistance: 1.65,
    targetRadius: 0.48,
    targetX: -0.28,
    obstacleType: 'minibox',
    steps: [
      {
        title: 'Step 1: Delivery Box Left',
        description: 'Short flick onto the delivery parcel.',
        targetHeight: 0.26,
        targetDistance: 1.65,
        targetRadius: 0.48,
        targetX: -0.28,
        obstacleType: 'minibox',
      },
      {
        title: 'Step 2: Bar Stool Center',
        description: 'Mid-range flick onto the high bar stool.',
        targetHeight: 0.52,
        targetDistance: 2.20,
        targetRadius: 0.46,
        targetX: 0,
        obstacleType: 'stool',
      },
      {
        title: 'Step 3: Refrigerator Summit',
        description: 'Massive upward power lob onto the tall freezer top.',
        targetHeight: 0.74,
        targetDistance: 2.85,
        targetRadius: 0.50,
        targetX: 0.22,
        obstacleType: 'fridge',
      },
    ],
    starsScoreRequirement: [3, 7, 11],
  },
  {
    id: 20,
    title: 'Campaign 4-Stage Relay',
    description: '4-Flip Championship Relay! Coaster, Left TV, Right Speaker, and Far Timber Crate.',
    layoutStyle: 'multi-step',
    requiredFlips: 4,
    targetHeight: 0,
    targetDistance: 1.60,
    targetRadius: 0.65,
    targetX: 0,
    obstacleType: 'none',
    steps: [
      {
        title: 'Step 1: Precision Coaster',
        description: 'Smooth flick onto the coaster ring.',
        targetHeight: 0,
        targetDistance: 1.60,
        targetRadius: 0.65,
        targetX: 0,
        obstacleType: 'none',
      },
      {
        title: 'Step 2: Left TV Console',
        description: 'Angled swipe to the wide TV console on the left.',
        targetHeight: 0.52,
        targetDistance: 2.15,
        targetRadius: 0.50,
        targetX: -0.32,
        obstacleType: 'tv',
      },
      {
        title: 'Step 3: Right Speaker Tower',
        description: 'High loft to the audio subwoofer on the right.',
        targetHeight: 0.58,
        targetDistance: 2.45,
        targetRadius: 0.46,
        targetX: 0.35,
        obstacleType: 'speaker',
      },
      {
        title: 'Step 4: Timber Cargo Crate',
        description: 'Solid power toss to the deep cargo crate.',
        targetHeight: 0.50,
        targetDistance: 2.85,
        targetRadius: 0.50,
        targetX: 0,
        obstacleType: 'crate',
      },
    ],
    starsScoreRequirement: [4, 9, 14],
  },

  // ─── CHUNK 3: LEVELS 21–30 (MASTER CHALLENGES & SIDE PRECISION) ───────────
  {
    id: 21,
    title: 'Precision Table Coaster II',
    description: 'Tight precision coaster ring straight ahead with a delicate cross-breeze.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    targetHeight: 0,
    targetDistance: 1.90,
    targetRadius: 0.58,
    targetX: 0,
    obstacleType: 'none',
    wind: 0.16,
    starsScoreRequirement: [1, 3, 5],
  },
  {
    id: 22,
    title: 'Far-Right Study Stack',
    description: 'Sharp right angle! Launch the bottle onto the study books positioned far on the right.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    targetHeight: 0.38,
    targetDistance: 2.20,
    targetRadius: 0.46,
    targetX: 0.40,
    obstacleType: 'books',
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 23,
    title: 'Cross-Room Double',
    description: '2-Flip Challenge: Stick the Gym Weight Bench, then cross to the Bedside Nightstand.',
    layoutStyle: 'multi-step',
    requiredFlips: 2,
    roomTheme: 'gym',
    targetHeight: 0.44,
    targetDistance: 2.10,
    targetRadius: 0.48,
    targetX: -0.32,
    obstacleType: 'benchpress',
    targets: [
      {
        title: 'Step 1: Gym Bench Press Left',
        description: 'Angled swipe to the black leather weight bench on the left.',
        roomTheme: 'gym',
        targetHeight: 0.44,
        targetDistance: 2.10,
        targetRadius: 0.48,
        targetX: -0.32,
        obstacleType: 'benchpress',
      },
      {
        title: 'Step 2: Nightstand Right',
        description: 'Controlled flick across to the wooden nightstand on the right.',
        roomTheme: 'gym',
        targetHeight: 0.48,
        targetDistance: 2.45,
        targetRadius: 0.46,
        targetX: 0.35,
        obstacleType: 'nightstand',
      },
    ],
    starsScoreRequirement: [2, 5, 8],
  },
  {
    id: 24,
    title: 'Deep Range Cargo Crate',
    description: 'Extended long throw! A hefty swipe is required to reach the timber crate at 3.15m in the office.',
    layoutStyle: 'far-throw',
    requiredFlips: 1,
    roomTheme: 'office',
    targetHeight: 0.52,
    targetDistance: 3.15,
    targetRadius: 0.48,
    targetX: 0,
    obstacleType: 'crate',
    targets: [
      {
        title: 'Deep Cargo Crate',
        description: 'Launch deep to the crate at 3.15m.',
        roomTheme: 'office',
        targetHeight: 0.52,
        targetDistance: 3.15,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'crate',
        layoutStyle: 'far-throw',
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 25,
    title: 'Playroom Trio Hop',
    description: '3-Flip Combo! Center Toy Blocks Pyramid, Right Audio Tower, and Left Delivery Box.',
    layoutStyle: 'multi-step',
    requiredFlips: 3,
    roomTheme: 'playroom',
    targetHeight: 0.52,
    targetDistance: 1.80,
    targetRadius: 0.48,
    targetX: 0,
    obstacleType: 'toyblocks',
    targets: [
      {
        title: 'Step 1: Toy Blocks Center',
        description: 'Flick forward onto the colorful stepped toy blocks.',
        roomTheme: 'playroom',
        targetHeight: 0.52,
        targetDistance: 1.80,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'toyblocks',
      },
      {
        title: 'Step 2: Audio Tower Right',
        description: 'High arc swipe to the speaker tower on the right.',
        roomTheme: 'playroom',
        targetHeight: 0.58,
        targetDistance: 2.35,
        targetRadius: 0.45,
        targetX: 0.35,
        obstacleType: 'speaker',
      },
      {
        title: 'Step 3: Parcel Box Left',
        description: 'Angled toss back across to the parcel box on the left.',
        roomTheme: 'playroom',
        targetHeight: 0.28,
        targetDistance: 2.10,
        targetRadius: 0.46,
        targetX: -0.32,
        obstacleType: 'minibox',
      },
    ],
    starsScoreRequirement: [3, 7, 11],
  },
  {
    id: 26,
    title: 'Cruising Kitchen Drone',
    description: 'Hover deck drifting horizontally on the left side. Gauge the timing carefully!',
    layoutStyle: 'moving',
    requiredFlips: 1,
    roomTheme: 'kitchen',
    targetHeight: 0.42,
    targetDistance: 2.15,
    targetRadius: 0.48,
    targetX: -0.28,
    obstacleType: 'moving',
    movingSpeed: 0.95,
    movingDistance: 0.40,
    targets: [
      {
        title: 'Cruising Kitchen Drone',
        description: 'Time your release to land on the moving hover drone.',
        roomTheme: 'kitchen',
        targetHeight: 0.42,
        targetDistance: 2.15,
        targetRadius: 0.48,
        targetX: -0.28,
        obstacleType: 'moving',
        movingSpeed: 0.95,
        movingDistance: 0.40,
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 27,
    title: 'Plush Armchair Loft',
    description: 'Controlled loft onto the cozy mid-century armchair cushion in the living room.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    roomTheme: 'livingroom',
    targetHeight: 0.46,
    targetDistance: 2.40,
    targetRadius: 0.48,
    targetX: 0.28,
    obstacleType: 'armchair',
    targets: [
      {
        title: 'Living Room Armchair',
        description: 'Loft rightward to stick the fabric seat cushion.',
        roomTheme: 'livingroom',
        targetHeight: 0.46,
        targetDistance: 2.40,
        targetRadius: 0.48,
        targetX: 0.28,
        obstacleType: 'armchair',
        layoutStyle: 'side-right',
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 28,
    title: 'Gym Weight Bench Left',
    description: 'Wide lateral angle! Flick strongly leftward to land on the padded gym weight bench.',
    layoutStyle: 'side-left',
    requiredFlips: 1,
    roomTheme: 'gym',
    targetHeight: 0.44,
    targetDistance: 2.50,
    targetRadius: 0.48,
    targetX: -0.40,
    obstacleType: 'benchpress',
    targets: [
      {
        title: 'Gym Weight Bench',
        description: 'Wide leftward flick to stick the bench press pad.',
        roomTheme: 'gym',
        targetHeight: 0.44,
        targetDistance: 2.50,
        targetRadius: 0.48,
        targetX: -0.40,
        obstacleType: 'benchpress',
        layoutStyle: 'side-left',
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 29,
    title: 'Grand Playroom Quad',
    description: '4 Flips in Sequence! Toy Blocks (Left), Cafe Table (Center), File Shelf (Right), & Fridge Summit (Center)!',
    layoutStyle: 'multi-step',
    requiredFlips: 4,
    roomTheme: 'playroom',
    targetHeight: 0.52,
    targetDistance: 1.75,
    targetRadius: 0.48,
    targetX: -0.30,
    obstacleType: 'toyblocks',
    targets: [
      {
        title: 'Step 1: Toy Blocks Left',
        description: 'Short flick to the colorful stepped toy blocks.',
        roomTheme: 'playroom',
        targetHeight: 0.52,
        targetDistance: 1.75,
        targetRadius: 0.48,
        targetX: -0.30,
        obstacleType: 'toyblocks',
      },
      {
        title: 'Step 2: Bistro Cafe Table Center',
        description: 'Loft onto the mahogany pedestal cafe table.',
        roomTheme: 'office',
        targetHeight: 0.50,
        targetDistance: 2.20,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'cafetable',
      },
      {
        title: 'Step 3: Office File Shelf Right',
        description: 'Swipe right onto the shelf with blue ring binders.',
        roomTheme: 'office',
        targetHeight: 0.54,
        targetDistance: 2.55,
        targetRadius: 0.46,
        targetX: 0.32,
        obstacleType: 'shelf_binders',
      },
      {
        title: 'Step 4: Stainless Fridge Summit',
        description: 'High power toss up to the stainless refrigerator top.',
        roomTheme: 'kitchen',
        targetHeight: 0.74,
        targetDistance: 3.00,
        targetRadius: 0.50,
        targetX: 0,
        obstacleType: 'fridge',
      },
    ],
    starsScoreRequirement: [4, 9, 15],
  },
  {
    id: 30,
    title: 'High Speaker Arc',
    description: 'Steep upward throw to the studio speaker tower on the far right in the living room.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    roomTheme: 'livingroom',
    targetHeight: 0.62,
    targetDistance: 2.95,
    targetRadius: 0.44,
    targetX: 0.35,
    obstacleType: 'speaker',
    targets: [
      {
        title: 'High Speaker Arc',
        description: 'Steep upward loft to the audio tower on the right.',
        roomTheme: 'livingroom',
        targetHeight: 0.62,
        targetDistance: 2.95,
        targetRadius: 0.44,
        targetX: 0.35,
        obstacleType: 'speaker',
        layoutStyle: 'side-right',
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },

  // ─── CHUNK 4: LEVELS 31–40 (EXPERT GAUNTLETS & FINALE) ───────────────────
  {
    id: 31,
    title: 'Crosswind Bullseye',
    description: 'Mid-range coaster ring tested with strong opposing crosswind.',
    layoutStyle: 'classic',
    requiredFlips: 1,
    roomTheme: 'kitchen',
    targetHeight: 0,
    targetDistance: 2.20,
    targetRadius: 0.55,
    targetX: 0,
    obstacleType: 'none',
    wind: -0.28,
    targets: [
      {
        title: 'Crosswind Bullseye',
        description: 'Compensate for leftward wind to land on the coaster.',
        roomTheme: 'kitchen',
        targetHeight: 0,
        targetDistance: 2.20,
        targetRadius: 0.55,
        targetX: 0,
        obstacleType: 'none',
        wind: -0.28,
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 32,
    title: 'Far-Right File Shelf',
    description: 'Power toss angled far to the right onto the sturdy office binder shelf.',
    layoutStyle: 'side-right',
    requiredFlips: 1,
    roomTheme: 'office',
    targetHeight: 0.54,
    targetDistance: 2.80,
    targetRadius: 0.46,
    targetX: 0.38,
    obstacleType: 'shelf_binders',
    targets: [
      {
        title: 'Far-Right File Shelf',
        description: 'Angled power swipe onto the file shelf.',
        roomTheme: 'office',
        targetHeight: 0.54,
        targetDistance: 2.80,
        targetRadius: 0.46,
        targetX: 0.38,
        obstacleType: 'shelf_binders',
        layoutStyle: 'side-right',
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 33,
    title: 'Living Room Master Triple',
    description: '3 Consecutive Flips! Books (Right), TV Console (Left), & Armchair Cushion (Center).',
    layoutStyle: 'multi-step',
    requiredFlips: 3,
    roomTheme: 'livingroom',
    targetHeight: 0.36,
    targetDistance: 1.85,
    targetRadius: 0.46,
    targetX: 0.32,
    obstacleType: 'books',
    targets: [
      {
        title: 'Step 1: Book Stack Right',
        description: 'Loft right to the book stack.',
        roomTheme: 'livingroom',
        targetHeight: 0.36,
        targetDistance: 1.85,
        targetRadius: 0.46,
        targetX: 0.32,
        obstacleType: 'books',
      },
      {
        title: 'Step 2: TV Console Left',
        description: 'Cross-room flick to the TV console on the left.',
        roomTheme: 'livingroom',
        targetHeight: 0.52,
        targetDistance: 2.30,
        targetRadius: 0.50,
        targetX: -0.34,
        obstacleType: 'tv',
      },
      {
        title: 'Step 3: Mid-Century Armchair Center',
        description: 'Centered stick on the plush armchair seat cushion.',
        roomTheme: 'livingroom',
        targetHeight: 0.46,
        targetDistance: 2.70,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'armchair',
      },
    ],
    starsScoreRequirement: [3, 8, 12],
  },
  {
    id: 34,
    title: 'Drifting Drone Crosswind',
    description: 'Moving drone platform in the gym drifting against a gust of wind.',
    layoutStyle: 'moving',
    requiredFlips: 1,
    roomTheme: 'gym',
    targetHeight: 0.45,
    targetDistance: 2.40,
    targetRadius: 0.48,
    targetX: 0.30,
    obstacleType: 'moving',
    movingSpeed: 1.10,
    movingDistance: 0.42,
    wind: 0.22,
    targets: [
      {
        title: 'Gym Crosswind Drone',
        description: 'Account for drift and wind to stick the drone deck.',
        roomTheme: 'gym',
        targetHeight: 0.45,
        targetDistance: 2.40,
        targetRadius: 0.48,
        targetX: 0.30,
        obstacleType: 'moving',
        movingSpeed: 1.10,
        movingDistance: 0.42,
        wind: 0.22,
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 35,
    title: '4-Stage Precision Circuit',
    description: '4-Flip Circuit! Cafe Table (Left), File Shelf (Center), Microwave (Right), Crate (Far Center)!',
    layoutStyle: 'multi-step',
    requiredFlips: 4,
    roomTheme: 'office',
    targetHeight: 0.50,
    targetDistance: 2.05,
    targetRadius: 0.48,
    targetX: -0.32,
    obstacleType: 'cafetable',
    targets: [
      {
        title: 'Step 1: Bistro Cafe Table Left',
        description: 'Swipe left onto the mahogany bistro table.',
        roomTheme: 'office',
        targetHeight: 0.50,
        targetDistance: 2.05,
        targetRadius: 0.48,
        targetX: -0.32,
        obstacleType: 'cafetable',
      },
      {
        title: 'Step 2: File Shelf Center',
        description: 'Centered flick onto the binder shelf.',
        roomTheme: 'office',
        targetHeight: 0.54,
        targetDistance: 2.35,
        targetRadius: 0.46,
        targetX: 0,
        obstacleType: 'shelf_binders',
      },
      {
        title: 'Step 3: Microwave Right',
        description: 'Aim rightward onto the kitchen microwave cart.',
        roomTheme: 'kitchen',
        targetHeight: 0.48,
        targetDistance: 2.55,
        targetRadius: 0.48,
        targetX: 0.34,
        obstacleType: 'microwave',
      },
      {
        title: 'Step 4: Industrial Cargo Crate',
        description: 'Deep throw onto the timber crate.',
        roomTheme: 'office',
        targetHeight: 0.52,
        targetDistance: 3.00,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'crate',
      },
    ],
    starsScoreRequirement: [4, 10, 16],
  },
  {
    id: 36,
    title: 'Apex Fridge Long Throw',
    description: 'Extreme deep power launch! Stick the tall refrigerator summit at 3.30m.',
    layoutStyle: 'far-throw',
    requiredFlips: 1,
    roomTheme: 'kitchen',
    targetHeight: 0.78,
    targetDistance: 3.30,
    targetRadius: 0.48,
    targetX: 0,
    obstacleType: 'fridge',
    targets: [
      {
        title: 'Apex Fridge Long Throw',
        description: 'Max power swipe to stick the refrigerator top at 3.30m.',
        roomTheme: 'kitchen',
        targetHeight: 0.78,
        targetDistance: 3.30,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'fridge',
        layoutStyle: 'far-throw',
      },
    ],
    starsScoreRequirement: [1, 3, 7],
  },
  {
    id: 37,
    title: 'Far-Left Armchair Breeze',
    description: 'Sharp left angle onto the armchair seat with challenging crosswind in the living room.',
    layoutStyle: 'side-left',
    requiredFlips: 1,
    roomTheme: 'livingroom',
    targetHeight: 0.46,
    targetDistance: 2.65,
    targetRadius: 0.48,
    targetX: -0.36,
    obstacleType: 'armchair',
    wind: -0.20,
    targets: [
      {
        title: 'Far-Left Armchair Cushion',
        description: 'Leftward angled loft to stick the fabric armchair.',
        roomTheme: 'livingroom',
        targetHeight: 0.46,
        targetDistance: 2.65,
        targetRadius: 0.48,
        targetX: -0.36,
        obstacleType: 'armchair',
        wind: -0.20,
        layoutStyle: 'side-left',
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 38,
    title: 'Triple Gym Conquest',
    description: '3 Challenging Platforms! Weight Bench (Left), High Stool (Center), & Fridge (Right).',
    layoutStyle: 'multi-step',
    requiredFlips: 3,
    roomTheme: 'gym',
    targetHeight: 0.44,
    targetDistance: 2.35,
    targetRadius: 0.48,
    targetX: -0.34,
    obstacleType: 'benchpress',
    targets: [
      {
        title: 'Step 1: Gym Bench Press Left',
        description: 'Loft leftward to the leather weight bench.',
        roomTheme: 'gym',
        targetHeight: 0.44,
        targetDistance: 2.35,
        targetRadius: 0.48,
        targetX: -0.34,
        obstacleType: 'benchpress',
      },
      {
        title: 'Step 2: High Stool Center',
        description: 'Centered stick on the elevated bar stool.',
        roomTheme: 'gym',
        targetHeight: 0.62,
        targetDistance: 2.65,
        targetRadius: 0.45,
        targetX: 0,
        obstacleType: 'stool',
      },
      {
        title: 'Step 3: High Fridge Right',
        description: 'Power upward arc to the tall refrigerator on the right.',
        roomTheme: 'kitchen',
        targetHeight: 0.76,
        targetDistance: 3.05,
        targetRadius: 0.48,
        targetX: 0.28,
        obstacleType: 'fridge',
      },
    ],
    starsScoreRequirement: [3, 8, 13],
  },
  {
    id: 39,
    title: 'Playroom Hover Drone',
    description: 'Rapidly cruising hover deck above the playroom! Match its rhythm to land cleanly.',
    layoutStyle: 'moving',
    requiredFlips: 1,
    roomTheme: 'playroom',
    targetHeight: 0.48,
    targetDistance: 2.60,
    targetRadius: 0.48,
    targetX: 0,
    obstacleType: 'moving',
    movingSpeed: 1.25,
    movingDistance: 0.50,
    targets: [
      {
        title: 'Playroom Drone Deck',
        description: 'Time your release to land on the speeding hover deck.',
        roomTheme: 'playroom',
        targetHeight: 0.48,
        targetDistance: 2.60,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'moving',
        movingSpeed: 1.25,
        movingDistance: 0.50,
      },
    ],
    starsScoreRequirement: [1, 3, 6],
  },
  {
    id: 40,
    title: 'The Master Grand Gauntlet',
    description: 'The Ultimate 5-Flip Championship! Toy Blocks, Cafe Table, Armchair, File Shelf, & Gym Weight Bench!',
    layoutStyle: 'multi-step',
    requiredFlips: 5,
    roomTheme: 'office',
    targetHeight: 0.52,
    targetDistance: 1.70,
    targetRadius: 0.48,
    targetX: -0.30,
    obstacleType: 'toyblocks',
    targets: [
      {
        title: 'Step 1: Toy Blocks Left',
        description: 'Short flick onto the colorful stepped toy blocks.',
        roomTheme: 'playroom',
        targetHeight: 0.52,
        targetDistance: 1.70,
        targetRadius: 0.48,
        targetX: -0.30,
        obstacleType: 'toyblocks',
      },
      {
        title: 'Step 2: Cafe Bistro Table Right',
        description: 'Angled swipe right to the mahogany pedestal table.',
        roomTheme: 'office',
        targetHeight: 0.50,
        targetDistance: 2.05,
        targetRadius: 0.48,
        targetX: 0.30,
        obstacleType: 'cafetable',
      },
      {
        title: 'Step 3: Armchair Cushion Left',
        description: 'Loft across to the plush armchair on the left.',
        roomTheme: 'livingroom',
        targetHeight: 0.46,
        targetDistance: 2.40,
        targetRadius: 0.48,
        targetX: -0.32,
        obstacleType: 'armchair',
      },
      {
        title: 'Step 4: Office File Shelf Right',
        description: 'Power toss to the file shelf with blue binders on the right.',
        roomTheme: 'office',
        targetHeight: 0.54,
        targetDistance: 2.75,
        targetRadius: 0.46,
        targetX: 0.32,
        obstacleType: 'shelf_binders',
      },
      {
        title: 'Step 5: Gym Bench Press Grand Summit',
        description: 'The Final Glory: Stick the padded gym weight bench at 3.10m with breeze!',
        roomTheme: 'gym',
        targetHeight: 0.44,
        targetDistance: 3.10,
        targetRadius: 0.48,
        targetX: 0,
        obstacleType: 'benchpress',
        wind: 0.18,
      },
    ],
    starsScoreRequirement: [5, 12, 18],
  },
];

// Seeded pseudorandom generator for deterministic procedural levels 41+
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ALL_OBSTACLES: ObstacleType[] = [
  'toyblocks',
  'benchpress',
  'cafetable',
  'armchair',
  'shelf_binders',
  'tv',
  'fridge',
  'minibox',
  'microwave',
  'stool',
  'books',
  'speaker',
  'washer',
  'nightstand',
  'crate',
  'moving',
];

const OBJECT_DISPLAY_NAMES: Record<ObstacleType, string> = {
  none: 'Table Coaster',
  toyblocks: 'Toy Blocks Pyramid',
  benchpress: 'Gym Weight Bench',
  cafetable: 'Cafe Bistro Table',
  armchair: 'Living Room Armchair',
  shelf_binders: 'Office File Shelf',
  stool: 'Bar Stool',
  box: 'Wooden Pedestal',
  books: 'Library Book Stack',
  moving: 'Hover Drone Deck',
  tv: 'Flatscreen TV Console',
  fridge: 'Kitchen Refrigerator',
  minibox: 'Delivery Parcel Box',
  microwave: 'Kitchen Microwave Cart',
  speaker: 'Studio Audio Tower',
  washer: 'Washing Machine',
  nightstand: 'Bedside Nightstand',
  crate: 'Timber Cargo Crate',
};

const STAGE_ADJECTIVES = [
  'Precision',
  'Elevated',
  'Grand',
  'Acrobat',
  'High Wire',
  'Crosswind',
  'Apex',
  'Midnight',
  'Swift',
  'Mastery',
  'Breeze',
  'Zenith',
  'Vanguard',
  'Mirage',
];

const ROOM_THEMES: RoomTheme[] = ['kitchen', 'playroom', 'gym', 'office', 'livingroom'];

// Procedural generator for Unlimited Levels 41+
export function getLevelConfig(levelNumber: number): LevelConfig {
  if (levelNumber <= 40 && levelNumber >= 1) {
    return HAND_AUTHORED_LEVELS[levelNumber - 1];
  }

  // Deterministic calculation for Level 41+
  const progressRatio = Math.min(1.0, Math.max(0.0, (levelNumber - 40) / 60));
  const rand = mulberry32(levelNumber * 7919 + 104729);

  // Randomly combine OLD-style (front-facing) and NEW-style (side-left, side-right, far-throw, multi-flip)
  const styleRoll = rand();
  let layoutStyle: 'classic' | 'side-right' | 'side-left' | 'far-throw' | 'elevated' | 'multi-step' | 'moving';
  if (styleRoll < 0.26) {
    layoutStyle = 'classic';
  } else if (styleRoll < 0.48) {
    layoutStyle = rand() > 0.5 ? 'side-right' : 'side-left';
  } else if (styleRoll < 0.68) {
    layoutStyle = rand() > 0.5 ? 'far-throw' : 'elevated';
  } else if (styleRoll < 0.80) {
    layoutStyle = 'moving';
  } else {
    layoutStyle = 'multi-step';
  }

  const adj = STAGE_ADJECTIVES[Math.floor(rand() * STAGE_ADJECTIVES.length)];
  const primaryTheme = ROOM_THEMES[Math.floor(rand() * ROOM_THEMES.length)];

  // ── Multi-Flip Procedural Level (2, 3, or 4 Flips) ──
  if (layoutStyle === 'multi-step') {
    const flipCount = rand() < 0.5 ? 2 : rand() < 0.85 ? 3 : 4;
    const targets: LevelTargetStage[] = [];

    for (let s = 0; s < flipCount; s++) {
      const stepObs = ALL_OBSTACLES[Math.floor(rand() * ALL_OBSTACLES.length)];
      const stepDist = Math.round((1.55 + s * 0.40 + rand() * 0.35) * 10) / 10;
      const xChoices = s % 2 === 0 ? [-0.34, -0.25, 0] : [0.25, 0.34, 0];
      const stepX = xChoices[Math.floor(rand() * xChoices.length)];

      let baseH = 0.40;
      if (stepObs === 'fridge') baseH = 0.68;
      else if (stepObs === 'stool') baseH = 0.52;
      else if (stepObs === 'minibox') baseH = 0.28;
      else if (stepObs === 'tv' || stepObs === 'speaker') baseH = 0.54;
      else if (stepObs === 'shelf_binders') baseH = 0.54;
      else if (stepObs === 'toyblocks') baseH = 0.52;
      else if (stepObs === 'cafetable') baseH = 0.50;
      else if (stepObs === 'armchair') baseH = 0.46;
      else if (stepObs === 'benchpress') baseH = 0.44;
      const stepH = Math.min(0.78, Math.round((baseH + rand() * 0.12) * 100) / 100);

      const stepTheme = ROOM_THEMES[Math.floor(rand() * ROOM_THEMES.length)];
      const stepName = OBJECT_DISPLAY_NAMES[stepObs] || 'Target Platform';
      targets.push({
        title: `Step ${s + 1}: ${stepName}`,
        description: `Land on the ${stepName.toLowerCase()} at ${stepDist}m.`,
        roomTheme: stepTheme,
        targetHeight: stepH,
        targetDistance: Math.min(3.25, stepDist),
        targetRadius: Math.max(0.44, Math.round((0.52 - progressRatio * 0.06) * 100) / 100),
        targetX: stepX,
        obstacleType: stepObs,
        movingSpeed: stepObs === 'moving' ? Math.round((0.85 + rand() * 0.4) * 10) / 10 : undefined,
        movingDistance: stepObs === 'moving' ? 0.45 : undefined,
      });
    }

    const firstStep = targets[0];
    return {
      id: levelNumber,
      title: `Stage ${levelNumber}: ${adj} ${flipCount}-Flip Circuit`,
      description: `Complete ${flipCount} consecutive successful bottle flips across varied furniture platforms!`,
      layoutStyle: 'multi-step',
      requiredFlips: flipCount,
      roomTheme: firstStep.roomTheme,
      targetHeight: firstStep.targetHeight,
      targetDistance: firstStep.targetDistance,
      targetRadius: firstStep.targetRadius,
      targetX: firstStep.targetX,
      obstacleType: firstStep.obstacleType,
      targets,
      starsScoreRequirement: [flipCount, flipCount * 2 + 1, flipCount * 3 + 2],
    };
  }

  // ── Single-Flip Procedural Level (Classic, Side, Far, Elevated, Moving) ──
  let obstacleType = ALL_OBSTACLES[Math.floor(rand() * ALL_OBSTACLES.length)];
  if (layoutStyle === 'moving') obstacleType = 'moving';

  // Lateral Position
  let targetX = 0;
  if (layoutStyle === 'side-left') {
    targetX = -Math.round((0.24 + rand() * 0.18) * 100) / 100;
  } else if (layoutStyle === 'side-right') {
    targetX = Math.round((0.24 + rand() * 0.18) * 100) / 100;
  } else if (rand() < 0.35) {
    targetX = (rand() > 0.5 ? 1 : -1) * Math.round((0.15 + rand() * 0.12) * 100) / 100;
  }

  // Distance
  let targetDistance = 2.10;
  if (layoutStyle === 'far-throw') {
    targetDistance = Math.round((2.95 + rand() * 0.35) * 10) / 10;
  } else if (layoutStyle === 'classic') {
    targetDistance = Math.round((1.65 + rand() * 0.90) * 10) / 10;
  } else {
    targetDistance = Math.round((1.75 + rand() * 0.95 + progressRatio * 0.3) * 10) / 10;
  }
  targetDistance = Math.min(3.35, Math.max(1.40, targetDistance));

  // Height
  let baseHeight = 0.42;
  if (obstacleType === 'fridge') {
    baseHeight = 0.68 + progressRatio * 0.10;
  } else if (obstacleType === 'stool') {
    baseHeight = 0.50 + progressRatio * 0.16;
  } else if (obstacleType === 'minibox') {
    baseHeight = 0.26 + progressRatio * 0.08;
  } else if (obstacleType === 'speaker' || obstacleType === 'tv' || obstacleType === 'shelf_binders') {
    baseHeight = 0.52 + progressRatio * 0.10;
  } else if (obstacleType === 'toyblocks') {
    baseHeight = 0.52;
  } else if (obstacleType === 'cafetable') {
    baseHeight = 0.50;
  } else if (obstacleType === 'armchair') {
    baseHeight = 0.46;
  } else if (obstacleType === 'benchpress') {
    baseHeight = 0.44;
  } else {
    baseHeight = 0.38 + progressRatio * 0.16;
  }
  const targetHeight = Math.min(0.80, Math.round((baseHeight + rand() * 0.10) * 100) / 100);

  // Target Radius
  const targetRadius = Math.max(0.44, Math.round((0.52 - progressRatio * 0.06 + (rand() - 0.5) * 0.04) * 100) / 100);

  // Crosswind
  const hasWind = rand() > 0.62;
  const windStrength = hasWind ? (rand() > 0.5 ? 1 : -1) * (0.15 + progressRatio * 0.18) : 0;
  const wind = Math.round(windStrength * 100) / 100;

  // Moving Platform dynamics
  const isMoving = obstacleType === 'moving';
  const movingSpeed = isMoving ? Math.round((0.85 + progressRatio * 0.40 + rand() * 0.25) * 10) / 10 : undefined;
  const movingDistance = isMoving ? Math.round((0.40 + progressRatio * 0.15 + rand() * 0.12) * 10) / 10 : undefined;

  const objName = OBJECT_DISPLAY_NAMES[obstacleType] || 'Target Platform';
  const title = `Stage ${levelNumber}: ${adj} ${objName}`;

  let desc = `Land squarely on the ${objName.toLowerCase()} at ${targetDistance}m.`;
  if (layoutStyle === 'side-left') {
    desc = `Aim left! Stick the landing on the ${objName.toLowerCase()} on the left.`;
  } else if (layoutStyle === 'side-right') {
    desc = `Angle right! Pop the bottle onto the ${objName.toLowerCase()} on the right.`;
  } else if (layoutStyle === 'far-throw') {
    desc = `Far range! Full-power swipe needed to reach the ${objName.toLowerCase()} at ${targetDistance}m.`;
  } else if (isMoving) {
    desc = `Time your release to stick the moving ${objName.toLowerCase()}.`;
  } else if (wind !== 0) {
    desc = `Compensate for the ${wind > 0 ? 'rightward' : 'leftward'} breeze on the ${objName.toLowerCase()}.`;
  }

  return {
    id: levelNumber,
    title,
    description: desc,
    layoutStyle,
    requiredFlips: 1,
    roomTheme: primaryTheme,
    targetHeight,
    targetDistance,
    targetRadius,
    targetX,
    obstacleType,
    movingSpeed,
    movingDistance,
    wind,
    targets: [
      {
        title: `${adj} ${objName}`,
        description: desc,
        roomTheme: primaryTheme,
        targetHeight,
        targetDistance,
        targetRadius,
        targetX,
        obstacleType,
        movingSpeed,
        movingDistance,
        wind,
        layoutStyle,
      },
    ],
    starsScoreRequirement: [1, 3, 5],
  };
}
