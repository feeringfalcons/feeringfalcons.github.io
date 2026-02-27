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

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Tournament", href: "/tournament" },
  { label: "Club Info", href: "/club" },
  { label: "Sponsorship", href: "/sponsorship" },
] as const;

export const POLICIES = [
  {
    title: "Club Constitution",
    href: "/documents/constitution.pdf",
    external: true,
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
