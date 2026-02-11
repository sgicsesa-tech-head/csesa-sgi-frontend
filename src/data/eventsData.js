// Sample events data
export const upcomingEvents = [
  {
    id: 1,
    title: "Technoverse 2026",
    description: "Our flagship event! Keynotes from industry giants, workshops on Generative AI, and unparalleled networking opportunities.",
    fullDescription: "Join us for our most anticipated event of the year! The Annual Tech Symposium brings together technology leaders, students, and industry professionals for a day of learning and networking. This year's theme focuses on emerging technologies and their impact on society. Expect keynote speeches from leading tech executives, hands-on workshops, panel discussions, and plenty of networking opportunities.",
    date: "Mar 5",
    time: "10:00 AM",
    location: "Main Auditorium",
    venue: "Open to All",
    image: "/images/tech-symposium.jpg",
    category: "Technical",
    tags: ["FEATURED", "TECHNICAL"],
    schedule: [
      { time: "10:00 AM", activity: "Registration & Breakfast" },
      { time: "11:00 AM", activity: "Opening Keynote" },
      { time: "12:30 PM", activity: "Panel Discussion: Future of AI" },
      { time: "2:00 PM", activity: "Workshops (Parallel Sessions)" },
      { time: "4:00 PM", activity: "Networking Session" },
      { time: "5:30 PM", activity: "Closing Remarks" }
    ],
    speakers: [
      { name: "Dr. Sarah Johnson", role: "CTO, TechCorp" },
      { name: "Michael Chen", role: "AI Research Lead, InnovateLabs" }
    ],
    coordinators: [
      { name: "Rajesh Kumar", phone: "+91 98765 43210" },
      { name: "Priya Patel", phone: "+91 98765 43211" }
    ],
    rules: [
      "Registration is mandatory for all participants",
      "Please arrive 30 minutes before the event start time",
      "Carry a valid ID card for entry",
      "Photography and recording allowed only in designated areas",
      "Food and beverages not allowed inside the auditorium",
      "Maintain decorum during keynote sessions"
    ],
    registrationLink: "#",
    capacity: 200,
    registered: 145,
    sponsor: {
      name: "TechCorp Solutions",
      icon: "/images/sponsors/techcorp-icon.png",
      banner: "/images/sponsors/techcorp-banner.png"
    }
  },
  {
    id: 2,
    title: "Intro to Web3 Development",
    description: "A beginner-friendly workshop to get you started with blockchain development. Learn smart contracts and DApps.",
    fullDescription: "Dive into the world of Web3! This comprehensive workshop covers blockchain fundamentals, smart contract development with Solidity, and building decentralized applications. Perfect for developers looking to expand their skillset into blockchain technology.",
    date: "Nov 02",
    time: "2:00 PM",
    location: "Lab 304",
    venue: "Lab 304",
    image: "/images/web3-workshop.jpg",
    category: "Technical",
    tags: ["TECHNICAL", "WORKSHOP"],
    schedule: [
      { time: "2:00 PM", activity: "Introduction to Blockchain" },
      { time: "2:45 PM", activity: "Smart Contracts Basics" },
      { time: "3:30 PM", activity: "Break" },
      { time: "3:45 PM", activity: "Building Your First DApp" },
      { time: "5:00 PM", activity: "Q&A Session" }
    ],
    prerequisites: ["Basic JavaScript knowledge", "Laptop with MetaMask installed"],
    coordinators: [
      { name: "Amit Singh", phone: "+91 98765 43212" },
      { name: "Sneha Reddy", phone: "+91 98765 43213" }
    ],
    rules: [
      "Bring your own laptop with required software installed",
      "Basic programming knowledge is required",
      "Lab capacity is limited to 50 participants",
      "No outside food allowed in the lab",
      "Follow instructor's guidance during hands-on sessions"
    ],
    registrationLink: "#",
    capacity: 50,
    registered: 42,
    sponsor: {
      name: "BlockChain Labs",
      icon: "/images/sponsors/blockchain-icon.png",
      banner: "/images/sponsors/blockchain-banner.png"
    }
  },
  {
    id: 3,
    title: "Freshers' Mixer Night",
    description: "An evening of games, music, and food to welcome the incoming CSESA family. Build connections, enjoy great food, and celebrate!",
    fullDescription: "Welcome to the CSESA family! Join us for an exciting evening designed to help new students connect with each other and senior members. Enjoy games, music, delicious food, and create lasting friendships. This is the perfect opportunity to learn about CSESA's activities and get involved!",
    date: "Nov 10",
    time: "6:00 PM",
    location: "Cafeteria",
    venue: "Cafeteria",
    image: "/images/freshers-mixer.jpg",
    category: "Social",
    tags: ["SOCIAL"],
    schedule: [
      { time: "6:00 PM", activity: "Welcome & Icebreakers" },
      { time: "6:30 PM", activity: "Games & Activities" },
      { time: "7:30 PM", activity: "Dinner" },
      { time: "8:30 PM", activity: "Music & Dance" },
      { time: "10:00 PM", activity: "Event Closes" }
    ],
    coordinators: [
      { name: "Vikram Mehta", phone: "+91 98765 43214" },
      { name: "Anjali Sharma", phone: "+91 98765 43215" }
    ],
    rules: [
      "Open to all first-year students",
      "Entry pass required (collect from registration desk)",
      "Dress code: Smart casual",
      "No alcohol or smoking on premises",
      "Be respectful to all participants and staff",
      "Event will end strictly at 10:00 PM"
    ],
    registrationLink: "#",
    freeEntry: true,
    sponsor: {
      name: "FoodHub Catering",
      icon: "/images/sponsors/foodhub-icon.png",
      banner: "/images/sponsors/foodhub-banner.png"
    }
  },
  {
    id: 4,
    title: "Career Path Guidance",
    description: "A panel session discussing various career paths in tech - from graduation beyond coding. Get insights from alumni and industry professionals.",
    fullDescription: "Confused about your career path? Join us for an enlightening panel discussion featuring successful alumni and industry professionals. Learn about various career trajectories in tech, from software engineering to product management, data science, and entrepreneurship. Get your questions answered and gain valuable insights for your future.",
    date: "Nov 18",
    time: "4:00 PM",
    location: "Seminar Hall",
    venue: "Seminar Hall",
    image: "/images/career-guidance.jpg",
    category: "Non-Technical",
    tags: ["NON-TECHNICAL"],
    schedule: [
      { time: "4:00 PM", activity: "Introduction & Panel Introduction" },
      { time: "4:15 PM", activity: "Panel Discussion" },
      { time: "5:15 PM", activity: "Q&A Session" },
      { time: "6:00 PM", activity: "Networking & Refreshments" }
    ],
    panelists: [
      { name: "Alex Kumar", role: "Senior Software Engineer, Google" },
      { name: "Priya Sharma", role: "Product Manager, Microsoft" },
      { name: "David Lee", role: "Founder, TechStartup" }
    ],
    coordinators: [
      { name: "Neha Gupta", phone: "+91 98765 43216" },
      { name: "Rohan Verma", phone: "+91 98765 43217" }
    ],
    rules: [
      "Open to students from all departments",
      "Prepare questions in advance for Q&A session",
      "Professional attire recommended",
      "Networking cards/resumes welcome",
      "Silent mode for mobile devices during panel discussion",
      "Refreshments will be served after the session"
    ],
    registrationLink: "#",
    freeEntry: true,
    sponsor: {
      name: "Career Connect",
      icon: "/images/sponsors/careerconnect-icon.png",
      banner: "/images/sponsors/careerconnect-banner.png"
    }
  }
];

export const pastEvents = [
  {
    id: 101,
    title: "CodeSprint Hackathon 2023",
    description: "A 24-hour hackathon where 50 teams competed to build innovative solutions for sustainable development goals.",
    fullDescription: "CodeSprint Hackathon 2023 was an intense 24-hour coding marathon where teams of passionate developers came together to create innovative solutions addressing sustainable development goals. The event featured mentorship from industry experts, exciting prizes, and valuable networking opportunities.",
    date: "Sep 15, 2023",
    location: "Tech Auditorium",
    venue: "Tech Auditorium",
    image: "https://drive.google.com/file/d/1s43IGnmvUN5WVHUcuogOq5DpNa3l7-yr/view",
    category: "Technical",
    tags: ["TECHNICAL", "HACKATHON"],
    outcomes: [
      "50 teams participated",
      "15 projects submitted",
      "3 winning solutions deployed"
    ],
    winners: [
      { team: "EcoTrack", project: "Carbon Footprint Tracker App", prize: "First Prize" },
      { team: "CleanWater.ai", project: "AI-powered Water Quality Monitoring", prize: "Second Prize" },
      { team: "FoodShare", project: "Community Food Sharing Platform", prize: "Third Prize" }
    ],
    highlights: [
      "Keynote by industry leader on sustainable tech",
      "24-hour mentorship available",
      "Prize pool of $5000"
    ],
    coordinators: [
      { name: "Sanjay Desai", phone: "+91 98765 43218" },
      { name: "Kavya Nair", phone: "+91 98765 43219" }
    ],
    gallery: ["/images/gallery/codesprint1.jpg", "/images/gallery/codesprint2.jpg"],
    report: "#",
    videoLink: "#",
    sponsor: {
      name: "DevTech Corp",
      icon: "/images/sponsors/devtech-icon.png",
      banner: "/images/sponsors/devtech-banner.png"
    }
  },
  {
    id: 102,
    title: "AI in Healthcare: Guest Lecture",
    description: "Dr. Alan Grant discussed the future of diagnostics using machine learning models in a packed seminar hall.",
    fullDescription: "An insightful seminar where Dr. Alan Grant, a renowned expert in medical AI, explored how machine learning is revolutionizing healthcare diagnostics. The talk covered real-world applications, ethical considerations, and future trends in medical AI.",
    date: "Aug 20, 2023",
    location: "Seminar Hall B",
    venue: "Seminar Hall B",
    image: "/images/ai-healthcare.jpg",
    category: "Seminar",
    tags: ["SEMINAR", "AI"],
    attendance: 150,
    keyTakeaways: [
      "ML models can detect diseases earlier than traditional methods",
      "Ethical AI development is crucial in healthcare",
      "Interdisciplinary collaboration is key to success"
    ],
    speakerBio: "Dr. Alan Grant is a leading researcher in medical AI with over 15 years of experience. He has published numerous papers and developed AI systems currently used in hospitals worldwide.",
    coordinators: [
      { name: "Arjun Iyer", phone: "+91 98765 43220" },
      { name: "Pooja Joshi", phone: "+91 98765 43221" }
    ],
    report: "#",
    sponsor: {
      name: "HealthTech AI",
      icon: "/images/sponsors/healthtech-icon.png",
      banner: "/images/sponsors/healthtech-banner.png"
    }
  },
  {
    id: 103,
    title: "Spring Cultural Fest",
    description: "A vibrant celebration of music, dance, and art showcasing the diverse talents of our student body.",
    fullDescription: "The Spring Cultural Fest was a spectacular showcase of creativity and talent. Students performed various cultural dances, musical acts, and displayed their artistic creations. The event promoted diversity and unity within the CSESA community.",
    date: "May 08, 2023",
    location: "Open Air Theatre",
    venue: "Open Air Theatre",
    image: "/images/cultural-fest.jpg",
    category: "Cultural",
    tags: ["CULTURAL", "ENTERTAINMENT"],
    performances: [
      { type: "Dance", acts: 12 },
      { type: "Music", acts: 8 },
      { type: "Drama", acts: 3 },
      { type: "Art Exhibition", displays: 45 }
    ],
    attendance: 500,
    highlights: [
      "15+ cultural performances",
      "Art exhibition with 45 displays",
      "Live music and food stalls"
    ],
    gallery: ["/images/gallery/cultural1.jpg", "/images/gallery/cultural2.jpg", "/images/gallery/cultural3.jpg"],
    videoLink: "#",
    sponsor: {
      name: "Arts & Culture Foundation",
      icon: "/images/sponsors/arts-icon.png",
      banner: "/images/sponsors/arts-banner.png"
    }
  }
];

// Helper function to get event by ID
export const getEventById = (id, isPast = false) => {
  const eventsList = isPast ? pastEvents : upcomingEvents;
  return eventsList.find(event => event.id === parseInt(id));
};

// Helper function to filter events by category
export const getEventsByCategory = (category, isPast = false) => {
  const eventsList = isPast ? pastEvents : upcomingEvents;
  if (category === 'All') return eventsList;
  return eventsList.filter(event => event.category === category);
};
