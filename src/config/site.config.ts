export interface Member {
  name: string;
  role: string;
  bio: string;
  photo: string | null;
  instruments?: string[];
  founding?: boolean;
  variant?: number;
}

export interface Program {
  title: string;
  description: string;
  icon: string;
}

export interface SiteEvent {
  title: string;
  date: string;
  time?: string;
  description: string;
  status: 'upcoming' | 'recurring' | 'planned';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const siteConfig = {
  name: 'Bhutanese Musical Group of Rochester',
  shortName: 'BMGR',
  tagline: 'Preserving and promoting Bhutanese Nepali music, arts, and culture',
  nepaliName: 'भूटानी सङ्गीत समूह रोचेस्टर',
  description:
    'The Bhutanese Musical Group of Rochester preserves and promotes Bhutanese Nepali music, arts, and culture by uniting our community through performance, education, and cultural celebration.',
  domain: 'https://bmgr-v2.pages.dev',
  locale: 'en_US',
  founded: 2019,
  logo: { src: '/images/bmgr-logo.png', alt: 'BMGR Logo' },
  seo: {
    title: 'BMGR — Bhutanese Musical Group of Rochester',
    description:
      'Preserving and promoting Bhutanese Nepali music, arts, and culture through performance, education, and community events in Rochester, NY.',
    keywords: ['BMGR', 'Bhutanese music', 'Nepali music Rochester', 'Bhutanese community Rochester', 'Nepali cultural group'],
    ogImage: '/images/bmgr-group.jpg',
  },
  contact: {
    email: 'bmgr.rochester@gmail.com',
    address: {
      street: '201 Scottsville West Henrietta Rd',
      city: 'West Henrietta',
      state: 'NY',
      zip: '14586',
      country: 'US',
      full: 'BCGR Community Hall, 201 Scottsville West Henrietta Rd, West Henrietta, NY 14586',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100063440693031',
  },
  mission:
    'The Bhutanese Musical Group of Rochester preserves and promotes Bhutanese Nepali music, arts, and culture by uniting our community through performance, education, and cultural celebration. We aim to pass our rich cultural legacy to future generations while fostering cultural understanding in our new home.',
  vision:
    'Our vision is to build a vibrant community where Bhutanese Nepali music, arts, and cultural identity thrive — connecting generations and sharing our unique heritage with the wider community.',
  about:
    'Founded in 2019, BMGR brings together passionate musicians, singers, and cultural enthusiasts from the Bhutanese Nepali community in Rochester, New York. Our roots trace back to the Flamingo Band, co-founded in 1993 in Timai, Jhapa, Nepal. Today, we organize musical events, conduct harmonium classes, perform at community celebrations, and work to preserve and share our rich musical heritage with future generations.',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Members', href: '/members/' },
    { label: 'Events', href: '/events/' },
    { label: 'Gallery', href: '/gallery/' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Contact', href: '/contact/' },
  ] as const,
  members: [
    {
      name: 'Birkha Gurung',
      role: 'President & Program Director',
      bio: 'One of the founding members and President of BMGR since 2019. Over 35 years of harmonium experience. Completed a 3rd Year Diploma in Indian Classical Vocal from Prayag Sangeet Samiti, Allahabad. Co-founded the Flamingo Band in Timai, Jhapa, Nepal in 1993. Also serves as President of the Bhakti Sangeet Team of UMDCC, leading devotional music across multiple US states.',
      photo: null,
      instruments: ['Harmonium', 'Keyboard', 'Guitar'],
      founding: true,
      variant: 1,
    },
    {
      name: 'Lalit Gurung',
      role: 'Vocalist & Lead Percussionist',
      bio: 'Founding member and versatile musician with over 25 years playing dukki tabla. Performs numerous instruments including madal, dholak, naal, conga, and drum. Co-founded the Flamingo Band in 1993 in Nepal. Has performed in countless musical and cultural programs in both the US and Nepal.',
      photo: '/images/members/lalit-gurung.jpg',
      instruments: ['Tabla', 'Madal', 'Dholak', 'Conga', 'Drum'],
      founding: true,
    },
    {
      name: 'Ruban Rai',
      role: 'Vocalist & Marketing',
      bio: 'Founding member and active supporter of BMGR\'s musical initiatives. Works as a Patient Care Technician at Strong Memorial Hospital while pursuing Radiology. Has participated in numerous events and plays a vital role in organizing and managing programs.',
      photo: '/images/members/ruban-rai.jpg',
      instruments: ['Vocals'],
      founding: true,
    },
    {
      name: 'Usha Gurung',
      role: 'Female Vocalist',
      bio: 'Versatile vocalist with a passion for Hindi and Nepali songs. Began on TikTok in 2021 earning second place in a singing competition. Has performed alongside legendary composer Ranjeet Gajmer in Cincinnati and Harrisburg, and at a Bhutanese American Music Association concert in Pittsburgh. Has recorded two Nepali songs.',
      photo: '/images/members/usha-gurung.jpg',
      instruments: ['Vocals'],
    },
    {
      name: 'Harkapal Sanyak',
      role: 'Vocalist & Songwriter',
      bio: 'President of the Kirat Community of Rochester and a Kirat Priest. Board of Directors member of BCGR. Has released several original compositions. Creates vlogs on YouTube and Facebook documenting community events, cultural programs, and nature.',
      photo: '/images/members/harkapal.jpg',
      instruments: ['Vocals', 'Songwriting'],
    },
    {
      name: 'Dawa Tamang',
      role: 'Event Coordinator',
      bio: 'Dedicated to organizing and managing musical events and logistics. Widely appreciated for his willingness to serve. Currently serves as Treasurer of the Universal Manav Dharma Rochester, NY Sakha.',
      photo: '/images/members/dawa-tamang.jpg',
      instruments: [],
    },
    {
      name: 'Kiran Pele',
      role: 'Arts & Drama Director',
      bio: 'Over 100 stage dramas across Nepal and India. Film credits include Jhupadi Ko Jindagi, Tukriyeko Mutu, and Mission Nepal. Trained by filmmaker Upendra Subba. Over 25 letters of appreciation for contributions to arts and community. Former President of multiple community organizations.',
      photo: '/images/KiranPeleGurung.jpg',
      instruments: ['Acting', 'Drama Direction'],
      variant: 2,
    },
    {
      name: 'Saraswati Adhikari',
      role: 'Treasurer',
      bio: 'Health Home Care Manager who teaches Nepali Literacy Classes and actively participates in BCGR programs. Enjoys singing songs and bhajans. Makes meaningful contributions to cultural connection and community engagement in Rochester.',
      photo: null,
      instruments: ['Vocals'],
      variant: 3,
    },
    {
      name: 'Pooja Bhattarai',
      role: 'Member & Devotional Singer',
      bio: 'Patient Care Technician at the University of Rochester with a deep passion for Nepali religious Aarati, Upasana, and Bhajans. Believes in prioritizing family, community, and compassionate service.',
      photo: null,
      instruments: ['Vocals', 'Devotional Singing'],
      variant: 4,
    },
    {
      name: 'Tiyarong Gurung',
      role: 'Singer & Composer',
      bio: 'Technology professional, singer, composer, and songwriter. Founding member of Nepali band The Sparsha. Their original song "Nindari" reflects his dedication to promoting Nepali culture within the diaspora.',
      photo: null,
      instruments: ['Vocals', 'Composition', 'Songwriting'],
      variant: 5,
    },
    {
      name: 'Yogesh Adhikari',
      role: 'Operations & Technology',
      bio: 'Handles technology, digital design, and operational support for BMGR. Responsible for the group\'s web presence, meeting documentation, and digital communications.',
      photo: null,
      instruments: [],
      variant: 1,
    },
    {
      name: 'Tek Acharya',
      role: 'Vocalist & Secretary',
      bio: 'Serves as Treasurer and Secretary for BMGR, managing finances, inventory, and supplies. Also contributes to marketing efforts and performs as a vocalist at group events.',
      photo: '/images/members/TekAcharya.jpg',
      instruments: ['Vocals'],
      variant: 2,
    },
    {
      name: 'Kumar Mishra',
      role: 'Lyricist & Member',
      bio: 'A dedicated member of BMGR who contributes original lyrics and songwriting to the group\'s growing musical repertoire.',
      photo: null,
      instruments: ['Lyrics', 'Songwriting'],
      variant: 3,
    },
  ] as Member[],
  programs: [
    { title: 'Harmonium Classes', description: 'Weekly lessons at the community center for all ages and skill levels.', icon: 'lucide:music' },
    { title: 'Bhajan Sandhya', description: 'Devotional song evenings bringing the community together through spiritual music.', icon: 'lucide:heart' },
    { title: 'Cultural Performances', description: 'Musical performances at Dashain, Tihar, Saraswati Puja, and other celebrations.', icon: 'lucide:mic-2' },
    { title: 'Youth Music', description: "Kids' orchestra and choral group to inspire the next generation.", icon: 'lucide:users' },
    { title: 'Community Concerts', description: 'Large-scale events featuring Nepali folk songs, dances, and celebration.', icon: 'lucide:radio' },
    { title: 'Skills & Education', description: 'Workshops to help members grow as vocalists and instrumentalists.', icon: 'lucide:graduation-cap' },
  ] as Program[],
  events: [
    { title: 'Grand Community Musical Event', date: 'June 2026', description: 'A large musical and cultural program with Nepali folk songs, dances, drama, and volunteer appreciation.', status: 'planned' as const },
    { title: 'Dashain/Tihar BMGR Nite', date: 'Fall 2026', description: 'Annual celebration featuring BMGR performances during the festive season.', status: 'planned' as const },
    { title: 'Weekly Harmonium Class', date: 'Every Week', time: 'Community Center', description: 'Open to all skill levels in a supportive group environment.', status: 'recurring' as const },
  ] as SiteEvent[],
  timeline: [
    { year: '1993', title: 'Flamingo Band', description: 'Birkha Gurung and Lalit Gurung co-founded the Flamingo Band in Timai, Jhapa, Nepal.' },
    { year: '2000s', title: 'New Beginnings', description: 'Members resettled in the US as Bhutanese refugees, carrying their music to Rochester.' },
    { year: '2019', title: 'BMGR Founded', description: 'The Bhutanese Musical Group of Rochester was officially established.' },
    { year: '2024', title: 'Growing Roots', description: 'Successful Deusi-Bhailo fundraiser, expanded membership, and increased visibility.' },
    { year: '2026', title: 'The Road Ahead', description: 'Pursuing 501(c)(3) status, planning a grand summer concert and youth programs.' },
  ] as TimelineItem[],
  values: [
    { title: 'Cultural Preservation', description: 'Safeguarding Nepali music, arts, and traditions for future generations.' },
    { title: 'Community Unity', description: 'Bringing people together through music and shared heritage.' },
    { title: 'Education', description: 'Nurturing talent through classes, workshops, and mentorship.' },
    { title: 'Discipline', description: 'High standards of commitment and respectful communication.' },
  ],
  leadership: [
    { role: 'Program Director', name: 'Birkha Gurung' },
    { role: 'Treasurer & Secretary', name: 'Tek Acharya' },
    { role: 'Marketing & Outreach', name: 'Ruban Rai & Tek Acharya' },
  ],
  songs: [
    { title: 'Bandhan Ko Chino', description: 'Celebrating bonds and togetherness.' },
    { title: 'Himali Bhutan Sundar Thiyo', description: 'Remembering the beauty of our homeland.' },
    { title: 'Akashaima Chil Ho Ki Besara', description: 'A folk song for group participation.' },
    { title: 'Devotional Bhajans', description: 'Sacred songs for Bhajan Sandhya evenings.' },
  ],
  equipment: [
    { name: 'Powered Speakers', count: '4', icon: 'lucide:speaker' },
    { name: 'Subwoofers', count: '2', icon: 'lucide:volume-2' },
    { name: 'Wireless Mics', count: '2', icon: 'lucide:mic' },
    { name: 'Harmonium', count: '1', icon: 'lucide:music' },
    { name: 'Tabla', count: '1', icon: 'lucide:circle-dot' },
    { name: 'Madal', count: '1', icon: 'lucide:circle-dot' },
  ],
};
