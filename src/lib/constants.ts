export const CLUB = {
  name: "Feering Falcons Youth Football Club",
  shortName: "Feering Falcons",
  founded: 1978,
  tagline:
    "Join us as we take flight into a new era of youth football, where passion meets precision",
  originLine: "Born in the fields of Feering and Kelvedon",
  ground: {
    name: "Elm Farm",
    address: "Elm Farm, Elm Lane, Marks Tey",
    postcode: "CO6 1HU",
    fullAddress: "Elm Farm, Elm Lane, Marks Tey, CO6 1HU",
    mapQuery: "Elm+Farm,+Elm+Lane,+Marks+Tey,+CO6+1HU",
  },
  leagues: [
    { name: "Colchester and District Youth League", shortName: "C&DYL", url: "https://cdyfl.co.uk/" },
    { name: "Blackwater and Dengie Youth Football League", shortName: "BDYFL", url: "https://bdyfl.org/" },
  ],
  accreditation: "England Football Accredited Club",
  values: [
    { title: "Positivity First", description: "Play positive, win positive" },
    {
      title: "Built with Care",
      description:
        "We're passionate about helping kids learn to love sport",
    },
    {
      title: "Pride of North Essex",
      description: "Representing our community with pride since 1978",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/feeringfalconsfc",
    instagram: "https://www.instagram.com/feeringfalconsfc/",
  },
  shop: "https://feering-falcons-yfc.pendlesportswear.co.uk/",
  secondGround: {
    name: "Feering Park",
    note: "Used for 7-a-side games",
  },
  contact: {
    sponsorship: "simonpreed@gmail.com",
    chairman: "chairman@feeringfalcons.com",
    secretary: "secretary@feeringfalcons.com",
    treasurer: "treasurer@feeringfalcons.com",
    childwelfare: "childwelfare@feeringfalcons.com",
  },
  officers: {
    chairman: { name: "D Scott", email: "chairman@feeringfalcons.com" },
    secretary: { name: "P Jenkins", email: "secretary@feeringfalcons.com" },
    treasurer: { name: "A Booth", email: "treasurer@feeringfalcons.com" },
    childWelfare: { name: "I Hayhoe", email: "childwelfare@feeringfalcons.com" },
  },
  presentationNight: "Friday 5th June",
  teams: [
    "Fledglings",
    "U6",
    "U7 Blues",
    "U7 Reds",
    "U8 Girls",
    "U8 Blues",
    "U8 Reds",
    "U9 Blues",
    "U9 Reds",
    "U10 Blues",
    "U10 Reds",
    "U11 Blues",
    "U11 Reds",
    "U12 Blues",
    "U12 Raptors",
    "U13",
    "U14",
  ],
  joinAgeGroups: [
    "Fledglings",
    "Under 6",
    "Under 7",
    "Under 8",
    "Under 9",
    "Under 10",
    "Under 11",
    "Under 12",
    "Under 13",
    "Under 14",
  ],
} as const;

export const TOURNAMENT = {
  name: "Feering Falcons 5-A-Side Tournament",
  date: "Saturday 13th June 2026",
  dateISO: "2026-06-13",
  venue: "Elm Farm Football Ground, Elm Lane, Nr Feering, Essex",
  entryFee: 50,
  deadline: "31st May 2026",
  deadlineISO: "2026-05-31",
  ageGroups: [
    "Under 7",
    "Under 8",
    "Under 9",
    "Under 10",
    "Under 11",
    "Under 12",
    "Under 13",
    "Under 14",
    "Under 15",
  ],
  squadSizes: {
    small: { groups: ["Under 7", "Under 8"], max: 8 },
    large: {
      groups: [
        "Under 9",
        "Under 10",
        "Under 11",
        "Under 12",
        "Under 13",
        "Under 14",
        "Under 15",
      ],
      max: 7,
    },
  },
  payment: {
    bankName: "Feering Falcons Youth Football Club",
    sortCode: "30-98-90",
    accountNumber: "15156868",
    chequePayable: "Feering Falcons YFC",
    reference: "surname / club and age group",
  },
  contact: {
    name: "Andrew Booth",
    email: "feeringfalcons5aside@btinternet.com",
    phone: "07768 005378",
    phoneHours: "between 7pm – 8.30pm",
    address:
      "The Hollies, Orchard Road, Kelvedon, Colchester, Essex, CO5 9NA",
  },
} as const;

export const PRESENTATION = {
  name: "Presentation Night 2026",
  date: "Friday 5th June 2026",
  dateISO: "2026-06-05",
  venue: "Feering Village Hall",
  intro:
    "A chance for our players to celebrate their hard work and successes this season.",
  halls: {
    eyebrow: "NEW FOR THIS YEAR",
    heading: "TWO HALLS, YOUR CHOICE",
    intro:
      "We've changed things this year. We are no longer asking everyone to sit in silence in the main hall, so we have set aside a separate room for catching up. Pick whichever suits you on the night, and feel free to move between the two.",
    punchline: "Want to watch? Main hall. Want to chat? Small hall.",
    rooms: [
      {
        tag: "FOR THE PRESENTATIONS",
        name: "Main Hall",
        desc: "This is where it all happens. If you are here to watch the teams go up on stage, please keep it quiet and respectful while the managers are speaking, so everyone can hear and every child gets their moment.",
      },
      {
        tag: "FOR CHATTING AND CATCHING UP",
        name: "Small Hall",
        desc: "Here to see friends and have a catch up? The small hall (the bar area) is open all evening for exactly that. Grab a drink, have a natter, and there is no need to keep your voice down.",
      },
    ],
  },
  info: [
    "Drinks are sold in the bar, so please do not bring or drink your own alcohol. You are welcome to bring your own snacks.",
    "In the main hall, please keep the noise down while managers are presenting so everyone can hear. If you would rather chat, that is exactly what the small hall is for this year.",
    "We are a growing club with lots of teams to get through. Our aim is to run to time so that the evening runs smoothly, so please support us by being ready promptly at the start of each session and after the break, with your child at the front with their team ready for their turn on stage.",
    "The Player's Player Award for all teams will be given out at the end of each session.",
  ],
  sessions: [
    {
      title: "Session 1",
      ages: "Under 7s to Under 9s",
      doors: "6:00pm",
      schedule: [
        { time: "6:30pm", label: "Welcome from the Chairman", person: "Derek Scott", type: "welcome" },
        { time: "6:45pm", label: "Under 7 Blues", person: "Ed Peters", type: "team" },
        { time: "6:55pm", label: "Under 7 Reds", person: "Jay Francis", type: "team" },
        { time: "7:05pm", label: "Under 8 Girls", person: "Mike Wood & Liz Herd", type: "team" },
        { time: "7:15pm", label: "Break & Refreshments", type: "break" },
        { time: "7:25pm", label: "Under 8 Blues", person: "Richard Shand", type: "team" },
        { time: "7:35pm", label: "Under 8 Reds", person: "Ross Moran", type: "team" },
        { time: "7:45pm", label: "Under 9 Blues", person: "Dan Garrett", type: "team" },
        { time: "7:55pm", label: "Under 9 Reds", person: "Mike Pipe", type: "team" },
        { time: "8:05pm", label: "Player's Player Awards", person: "All Teams", type: "awards" },
        { time: "8:15pm", label: "Close", type: "close" },
      ],
    },
    {
      title: "Session 2",
      ages: "Under 10s to Under 14s",
      doors: "8:00pm",
      doorsNote:
        "Please use the small bar area to get yourselves a drink before the main hall is ready.",
      schedule: [
        { time: "8:30pm", label: "Welcome from the Chairman", person: "Derek Scott", type: "welcome" },
        { time: "8:45pm", label: "Under 10 Blues", person: "Dan Midwinter", type: "team" },
        { time: "8:55pm", label: "Under 10 Reds", person: "Adam Cutting", type: "team" },
        { time: "9:05pm", label: "Under 11 Blues", person: "Michaela Bacon", type: "team" },
        { time: "9:15pm", label: "Under 11 Reds", person: "Ian Whittle", type: "team" },
        { time: "9:25pm", label: "Break & Refreshments", type: "break" },
        { time: "9:35pm", label: "Under 12 Blues", person: "Tom Flint", type: "team" },
        { time: "9:45pm", label: "Under 12 Raptors", person: "Karl Rushen", type: "team" },
        { time: "9:55pm", label: "Under 13", person: "Sam Gallagher", type: "team" },
        { time: "10:05pm", label: "Under 14", person: "Paul Nicholls", type: "team" },
        { time: "10:15pm", label: "Player's Player Awards", person: "All Teams", type: "awards" },
        { time: "10:30pm", label: "Close", type: "close" },
      ],
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Presentation", href: "/presentation" },
  { label: "Tournament", href: "/tournament" },
  { label: "Club Info", href: "/club" },
  { label: "Sponsorship", href: "/sponsorship" },
] as const;

export const POLICIES = [
  {
    title: "Club Constitution",
    href: "/club/policies/constitution",
    external: false,
  },
  {
    title: "FA Respect Code of Conduct",
    href: "/club/policies/fa-respect-code",
    external: false,
  },
  {
    title: "Code of Conduct",
    href: "/club/policies/code-of-conduct",
    external: false,
  },
  {
    title: "Child Protection Policy",
    href: "/club/policies/child-protection",
    external: false,
  },
  {
    title: "Complaints Procedure",
    href: "/club/policies/complaints-procedure",
    external: false,
  },
  {
    title: "Equality Policy",
    href: "/club/policies/equality",
    external: false,
  },
  {
    title: "Data Protection Policy",
    href: "/club/policies/data-protection",
    external: false,
  },
  {
    title: "Privacy Notice",
    href: "/club/policies/privacy-notice",
    external: false,
  },
  {
    title: "FA Whole Game System Privacy Policy",
    href: "/documents/the-fa-whole-game-system-privacy-policy.pdf",
    external: true,
  },
] as const;
