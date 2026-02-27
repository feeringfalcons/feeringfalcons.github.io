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
  league: "Colchester and District Youth League",
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
  contact: {
    sponsorship: "simonpreed@gmail.com",
  },
  teams: [
    "Under 7",
    "Under 8",
    "Under 9",
    "Under 10",
    "Under 11",
    "Under 12",
    "Under 13",
    "Under 14",
    "Under 15",
    "Under 16",
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
  { label: "Teams", href: "/teams" },
  { label: "Tournament", href: "/tournament" },
  { label: "Find Us", href: "/find-us" },
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Policies", href: "/policies" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
] as const;
