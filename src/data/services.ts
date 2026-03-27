export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: 'Legal Solutions',
    description: 'Access to qualified attorneys across all 50 states — because legal issues don\'t care which state you\'re parked in. From traffic stops to contract disputes, you\'re covered wherever the road takes you.',
    icon: 'fa-solid fa-scale-balanced',
    features: [
      'Access to attorneys in all 50 states',
      'Traffic ticket and accident assistance',
      'Document review and preparation',
      'Trial defense representation',
    ],
  },
  {
    title: 'Identity Protection',
    description: 'Around-the-clock monitoring and full-service restoration if your identity is compromised. Because RVers rely on public Wi-Fi, campground networks, and mobile banking — making you a prime target.',
    icon: 'fa-solid fa-shield-halved',
    features: [
      '24/7 identity theft monitoring',
      'Full-service restoration if compromised',
      'Credit monitoring and alerts',
      'Dark web surveillance',
    ],
  },
  {
    title: 'Online Defense',
    description: 'Enterprise-grade internet security and content filtering built for life on the road. Protects every device on your network — even on sketchy campground Wi-Fi — so your kids stay safe and your data stays private.',
    icon: 'fa-solid fa-lock',
    features: [
      'Internet security and VPN protection',
      'Content filtering for families',
      'Public Wi-Fi safety',
      'Device protection across platforms',
    ],
  },
];
