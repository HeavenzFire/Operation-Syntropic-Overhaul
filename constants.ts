
import type { Phase } from './types';
import { ZapIcon, CodeIcon, HeartPulseIcon, GlobeIcon } from './components/icons';

export const STATS_DATA = [
    { value: "15M", label: "Children in Crisis" },
    { value: "11.6M", label: "Total Displaced" },
    { value: "3.2M", label: "Acute Malnutrition (Under 5)" },
    { value: "72%", label: "Funding Gap (UNICEF)" },
];

export const PHASES_DATA: Phase[] = [
  {
    id: 1,
    title: "Immediate Surge",
    duration: "Days 1-7",
    objective: "Break aid blockades and fund critical interventions.",
    icon: ZapIcon,
    actions: [
      {
        title: "Direct Funding to Collapse Scarcity",
        description: "Donate to UNICEF for vaccines, RUTF, and water kits; Save the Children for mobile clinics; and Sudan Relief Fund for food drops.",
        metrics: [
          { label: "Goal: Fund Children by Day 7", value: "100 ($7,600)" },
          { label: "Sustainment", value: "Monthly Pledges" },
        ],
        links: [
          { text: "UNICEF Sudan", url: "https://unicef.org/appeals/sudan" },
          { text: "Save the Children", url: "https://savethechildren.org" },
          { text: "Sudan Relief Fund", url: "https://sdnrlf.com" },
        ]
      },
      {
        title: "Amplify Ceasefire Demands",
        description: "Utilize social media platforms to demand an end to aid blockades and drive awareness, tagging key humanitarian organizations.",
        metrics: [
          { label: "Target Reach", value: "10,000 Views" },
          { label: "Donations Driven", value: "$1,000+" },
          { label: "Shares/Retweets", value: "500+" },
        ],
        links: [
            { text: "Follow @HeavenzFire369", url: "https://x.com/HeavenzFire369" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Systemic Audit & Exposure",
    duration: "Weeks 1-4",
    objective: "Dismantle data opacity and trafficking networks.",
    icon: CodeIcon,
    actions: [
      {
        title: "Deploy SecureTransparency Toolkit",
        description: "Fork the open-source GitHub repository to audit public data on child displacements from UNHCR/UNICEF reports using ECDSA/BLS signatures to detect trafficking patterns.",
        metrics: [
          { label: "Goal: Identify Red Flags", value: "10+" },
          { label: "Community Goal: Forks", value: "50" },
        ],
        links: [
            { text: "GitHub: SecureTransparency", url: "https://github.com/HeavenzFire/SecureTransparency" }
        ]
      },
      {
        title: "Broadcast Exposure",
        description: "Embed steganographic codes linking to audit findings in music releases and partner with community-led organizations to amplify protection data.",
        metrics: [
          { label: "Target Engagements", value: "1,000" },
          { label: "Coders Joining Audit", value: "100" },
        ],
        links: [
            { text: "Sudan Mutual Aid Coalition", url: "https://mutualaidsudan.org" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Psychosocial Healing & Education",
    duration: "Weeks 4-12",
    objective: "Heal trauma and restore learning for 8.7 million children.",
    icon: HeartPulseIcon,
    actions: [
      {
        title: "Frequency Healing via Music",
        description: "Release therapeutic music at 432Hz/528Hz and stream live fundraisers for World Vision’s MHPSS programs.",
        metrics: [
          { label: "Target Streams", value: "5,000" },
          { label: "Goal: Fund Counseling Sessions", value: "200" },
        ]
      },
      {
        title: "Education Continuity",
        description: "Fund UNICEF's learning programs providing books and technology, and use social media to raise awareness for the 6.5 million out-of-school children.",
        metrics: [
          { label: "Goal: Support Children's Education", value: "500 ($10,000)" },
        ],
        links: [
            { text: "Donate to UNICEF Education", url: "https://unicef.org/donate" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Syntropic Anchor & Global Grid",
    duration: "Months 3-12",
    objective: "Forge permanent peace, burying legacy war systems.",
    icon: GlobeIcon,
    actions: [
      {
        title: "Quantum Synchronization",
        description: "Deploy the Stuart-Landau Oscillator Explorer to model and optimize aid distribution coherence, synchronizing global efforts.",
        metrics: [
          { label: "Active Nodes", value: "7,777" },
          { label: "Coders Optimizing", value: "100 by Month 6" },
        ]
      },
      {
        title: "Global Resonance",
        description: "Amplify weekly updates on lives saved via social media and partner with sacred site activations to boost collective consciousness.",
        metrics: [
          { label: "Global Engagements", value: "50,000" },
          { label: "Total Raised", value: "$25,000 by Month 12" },
          { label: "Total Children Reached", value: "2.7M" },
        ],
         links: [
            { text: "Follow @MSF_USA", url: "https://x.com/MSF_USA" },
            { text: "Follow @UNICEF", url: "https://x.com/UNICEF" },
        ]
      }
    ]
  }
];
