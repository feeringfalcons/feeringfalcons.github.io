export const CLUB = {
  name: "Feering Falcons Youth Football Club",
  shortName: "Feering Falcons",
  founded: 1978,
  tagline:
    "Born in the fields of Feering and Kelvedon. Still here, still playing.",
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
  playerCount: "200+",
  // FA Full-Time feeds.
  //
  // There is no API and no iCal feed (the FA deferred .ics to Matchday), the
  // robots.txt is `User-agent: * / Disallow: /`, and fixture data is injected
  // client-side rather than server-rendered — so there is nothing to fetch at
  // build time. The official code snippet is the supported route.
  //
  // To add a feed: log in at fulltime.thefa.com (team admin or higher) →
  // Media → Code Snippets. Pick a type, division and season, then copy the
  // number out of the generated `var lrcode = '...'` — that number is `code`
  // below. Six types exist; "Club - Fixtures" and "Club - Results" cover every
  // Falcons team in that league at once, so they are the two worth having.
  //
  // One snippet covers one league, and Falcons span C&DYL *and* BDYFL, so
  // expect up to four codes for full coverage.
  //
  // Verified working example (C&DYL U13 A Division table, from the league's
  // own public site): code "307148219" — useful for checking the styling.
  fullTime: {
    snippets: [
      { label: "Upcoming fixtures", code: "320717005" },
    ] as { label: string; code: string }[],
    publicUrl: "https://fulltime.thefa.com/home/index.html?league=702034869",
  },
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
  // 2026/27 season — from the club's Team / League List.
  teams: [
    "Fledglings",
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
    "U12 Reds",
    "U13 Blues",
    "U13 Raptors",
  ],
  joinAgeGroups: [
    "Fledglings",
    "Under 7",
    "Under 8",
    "Under 9",
    "Under 10",
    "Under 11",
    "Under 12",
    "Under 13",
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
  // Registration is split across two sessions by age group (2026 information letter).
  registration: {
    am: {
      label: "Morning session",
      registerBy: "9:00am",
      kickOff: "9:30am",
      ageGroups: ["Under 7", "Under 10", "Under 12", "Under 15"],
    },
    pm: {
      label: "Afternoon session",
      registerBy: "1:15pm",
      kickOff: "approx 1:45pm",
      ageGroups: [
        "Under 8",
        "Under 8 Girls",
        "Under 9",
        "Under 11",
        "Under 13",
        "Under 14",
      ],
    },
  },
  onTheDay: ["BBQ", "Drinks", "Cakes"],
  infoDocument: "/documents/feering-falcons-5aside-information-2026.pdf",
  directions: [
    {
      from: "From Colchester",
      steps: [
        "Leave the A12 at Junction 25 (Marks Tey) and join the A120 (signposted Stansted, Bishops Stortford).",
        "Continue along the A120, passing Poplar Nurseries Garden Centre on your left.",
        "In approx 0.5 miles turn left into Elm Lane.",
        "Continue along Elm Lane for approx 0.5 miles.",
        "Turn right into Elm Farm at the two 'Public Footpath' signs.",
      ],
    },
    {
      from: "From Braintree",
      steps: [
        "Join the A120 at Marks Farm Roundabout, heading towards Colchester.",
        "Continue along the A120 using the Coggeshall Bypass.",
        "Ignore the signs for Feering & Kelvedon, stay on the A120, passing the Kings Head pub on your left.",
        "Just after the Kings Head the ground should be visible on your right from the A120. Turn right into Elm Lane.",
        "Continue along Elm Lane for approx 0.5 miles, then turn into Elm Farm at the two 'Public Footpath' signs.",
      ],
    },
    {
      from: "From Chelmsford",
      steps: [
        "Take the A12 towards Colchester, leaving at Junction 23 (Kelvedon).",
        "Continue through Kelvedon and enter Feering by the Railway Tavern pub.",
        "Passing the Blue Anchor on your right, turn left into Coggeshall Road (opposite the former Police Station).",
        "Continue along Coggeshall Road, past the Community Centre and under the railway bridge. In approx 100 yards turn right, passing the Bell pub on your left.",
        "Continue forward for approx 1.5 miles (the road is quite narrow). Elm Farm is on your left at the two 'Public Footpath' signs.",
      ],
    },
  ],
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
    phoneHours: "between 7pm and 8.30pm",
    address:
      "The Hollies, Orchard Road, Kelvedon, Colchester, Essex, CO5 9NA",
  },
} as const;

// Official tournament rules, transcribed from the 2026 information letter / rules sheet.
export const TOURNAMENT_RULES = {
  squads: [
    {
      groups: "Under 7s and Under 8s",
      detail:
        "A squad of up to 8 players. Each team is 5 players (one a goalkeeper), with 3 substitutes who may come on at any time.",
    },
    {
      groups: "Under 9s to Under 15s",
      detail:
        "A squad of up to 7 players. Each team is 5 players (one a goalkeeper), with 2 substitutes who may come on at any time.",
    },
  ],
  players: [
    "All players' names must be on the registration form, handed in to the organisers on arrival.",
    "A player may not play for more than one team in the tournament. If they do, every team they played for takes no further part in the competition.",
  ],
  format:
    "The format for each age group may vary depending on the number of teams entered. The aim is always to give every age group the maximum number of games possible.",
  duration: [
    { round: "Preliminary rounds", length: "5 minutes each way" },
    { round: "Quarter-finals", length: "5 minutes each way" },
    { round: "Semi-finals", length: "6 minutes each way" },
    { round: "Finals", length: "7 minutes each way" },
  ],
  durationNote:
    "In the knockout stages, if scores are level at full time, extra time of 2 minutes each way is played. If still level, all players on the field (including the goalkeeper) take penalties, then sudden death if needed.",
  ball: [
    "The first-named team in each game supplies the match ball.",
    "Size 3 for Under 7, 8, 9 and 10. Size 4 for Under 11, 12, 13 and 14. Size 5 for Under 15.",
  ],
  footwear:
    "All players should bring both football boots and trainers. In wet weather it is football boots only; in dry weather it is your own choice of boots or trainers.",
  shinguards:
    "Every player MUST wear shinguards. All jewellery and watches must be removed.",
  points: [
    "Three points for a win, one point for a draw.",
    "If teams are level on points, position is decided on goal difference, then goals scored.",
    "If still level, a play-off is arranged, with extra time and penalties if necessary.",
    "Any team failing to turn up for a match may, at the organisers' discretion, forfeit it 3-0.",
  ],
  discipline: [
    "A player who is dismissed, or who receives 2 bookings during the tournament, takes no further part in the competition.",
    "The organisers may exclude any team or club for bad sportsmanship, foul or abusive language, or violent conduct by players, managers, parents or spectators.",
    "All disciplinary matters are reported to the Essex County Football Association.",
  ],
  playYounger: {
    title: "Under 7 to Under 10",
    intro:
      "Normal C&DYL Mini-Soccer rules apply. For the avoidance of doubt, please note the following:",
    rules: [
      "Each half starts with a kick-off, and play restarts with a kick-off after a goal. All players retreat to their own half.",
      "Kick-ins or dribble-ins follow C&DYL rules. A goal can be scored from one provided the player has taken a touch first, and they may go straight to the goalkeeper.",
      "Corners are taken and goals can be scored direct from a corner.",
      "Goal kicks can be taken from anywhere in the goalkeeper's area; opponents retreat to their own half until the ball is in play.",
      "The goalkeeper may put the ball into play by throwing (over or under arm) or kicking. A back-pass is allowed, but the keeper must play it with their feet (normal back-pass rule).",
      "All players are allowed in the goalkeeper's area, and the goalkeeper is allowed out of it.",
      "There is no offside, and the ball does not need to stay below the referee's head height.",
      "All free kicks are direct, except for deliberate headers or a keeper picking up a deliberate back-pass / throw-in from a teammate (indirect). Opponents stay at least 5 yards from the ball.",
      "Substitutions may be made at any time with the referee's permission.",
    ],
  },
  playOlder: {
    title: "Under 11 to Under 15",
    intro: "Please note the following:",
    rules: [
      "Each half starts with a kick-off, and play restarts with a kick-off after a goal. All players retreat to their own half.",
      "Throw-ins are taken underarm. A goal cannot be scored direct from a throw-in, but it can go straight to the goalkeeper.",
      "Corners are taken and goals can be scored direct from a corner.",
      "The goalkeeper may only restart play with an underarm throw. An overarm throw or a kick gives a free kick 2 metres from where the ball left the semi-circle.",
      "Only the goalkeeper is allowed in the goalkeeper's area and may not leave it. A defender entering the area concedes a penalty; an attacker entering it concedes a free kick to the defending team.",
      "A player receiving the ball from their keeper cannot return it until another player has touched it. A pass-back straight to the keeper gives a free kick.",
      "There is no offside, and sliding tackles are not permitted.",
      "The ball must stay below the referee's head height (except rebounds off a save, post or crossbar). Otherwise a free kick is given against the last player to touch it.",
      "All free kicks are direct, with opponents at least 2 metres from the ball. Substitutions may be made at any time with the referee's permission.",
    ],
  },
  referees: [
    "The referees are the sole judges of time for all games. Separate timekeepers are not allowed.",
    "The referee's decision is final in all games.",
    "Any other disputes are settled by the tournament organisers, whose decision is final.",
  ],
} as const;

// Retained for reuse next year. The /presentation page and its site links were
// removed after the 2026 event; update the details below and re-add the page to revive it.
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
