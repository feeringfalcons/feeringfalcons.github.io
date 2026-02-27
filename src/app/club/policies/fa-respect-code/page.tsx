import type { Metadata } from "next";
import { PolicyPage } from "@/components/ui/PolicyPage";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FA Respect Code of Conduct",
  description:
    "The FA Respect Code of Conduct for young players at Feering Falcons Youth Football Club — play fair, show respect, enjoy the game.",
};

export default function FaRespectCodePage() {
  return (
    <PolicyPage title="FA Respect Code of Conduct">
      <p>
        Feering Falcons Youth Football Club is committed to The FA&apos;s
        Respect programme. We expect everyone involved with the club — players,
        parents, coaches and officials — to follow these codes of conduct.
      </p>

      <h2>Young Players</h2>
      <p className="font-medium text-falcon-charcoal">
        When playing football, I will:
      </p>
      <ul>
        <li>
          Always play to the best of my ability and for the benefit of my team
        </li>
        <li>
          Play fairly — I won&apos;t cheat, dive, complain or waste time
        </li>
        <li>
          Respect my team-mates, the other team, the referee or my
          coach/manager
        </li>
        <li>Play by the rules, as directed by the referee</li>
        <li>
          Be gracious in victory and defeat — I will shake hands with the other
          team and referee at the end of the game
        </li>
        <li>
          Listen and respond to what my coach/team manager tells me
        </li>
        <li>
          Understand that a coach has to do what is best for the team and not
          one individual player
        </li>
        <li>
          Talk to someone I trust or the{" "}
          <a href={`mailto:${CLUB.officers.childWelfare.email}`}>
            club welfare officer
          </a>{" "}
          if I&apos;m unhappy about anything at my club
        </li>
      </ul>

      <h2>Spectators &amp; Parents</h2>
      <p className="font-medium text-falcon-charcoal">
        When watching football, I will:
      </p>
      <ul>
        <li>
          Remember that children play for fun and learning — winning isn&apos;t
          everything
        </li>
        <li>
          Let the coaches do their job and not confuse players by
          calling out instructions
        </li>
        <li>Encourage and applaud effort, not just results</li>
        <li>
          Respect the referee&apos;s decisions — they are human and doing their
          best
        </li>
        <li>
          Never use abusive language or engage in intimidating behaviour
        </li>
        <li>
          Never criticise a child for making a mistake — mistakes are part of
          learning
        </li>
        <li>
          Applaud good play from both teams
        </li>
        <li>
          Show respect to our club volunteers — they give up their time to
          provide football for your child
        </li>
      </ul>

      <h2>Coaches &amp; Team Managers</h2>
      <p className="font-medium text-falcon-charcoal">
        When coaching football, I will:
      </p>
      <ul>
        <li>
          Place the well-being, safety and enjoyment of each player above
          everything, including winning
        </li>
        <li>
          Never engage in or tolerate bullying or inappropriate behaviour
        </li>
        <li>
          Encourage each player to accept responsibility for their own
          behaviour and performance
        </li>
        <li>
          Ensure all activities are appropriate for the players&apos; age,
          ability and experience
        </li>
        <li>
          Respect and co-operate with match officials and opposing coaches
        </li>
        <li>
          Be positive during the game and help players enjoy the experience
        </li>
        <li>
          Not use inappropriate language or tolerate it from players or parents
        </li>
        <li>
          Promote fair play and respect among all players
        </li>
      </ul>

      <h2>Match Officials</h2>
      <p className="font-medium text-falcon-charcoal">
        When officiating, I will:
      </p>
      <ul>
        <li>
          Be consistent, objective and courteous when making decisions
        </li>
        <li>
          Communicate any decisions clearly and in a manner that helps
          understanding
        </li>
        <li>
          Take time to explain decisions to young players when appropriate
        </li>
        <li>
          Not tolerate unsporting behaviour and deal with it firmly but fairly
        </li>
        <li>
          Set a positive example by my own behaviour
        </li>
      </ul>

      <div className="mt-10 border-l-4 border-falcon-red bg-falcon-red/5 px-5 py-4">
        <p className="font-heading text-lg text-falcon-charcoal">
          REPORT A CONCERN
        </p>
        <p className="mt-2 text-sm">
          If you witness any behaviour that breaches these codes of conduct,
          please speak to a team manager, the{" "}
          <a href={`mailto:${CLUB.officers.childWelfare.email}`}>
            Club Welfare Officer ({CLUB.officers.childWelfare.name})
          </a>
          , or contact the FA Safeguarding Team on{" "}
          <a href="tel:08001691863">0800 169 1863</a>.
        </p>
      </div>

      <p className="mt-6 text-sm text-falcon-charcoal/40">
        Based on The FA&apos;s Respect Code of Conduct. For more information
        visit{" "}
        <a
          href="https://www.englandfootball.com/participate/behaviour/the-grassroots-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Grassroots Code
        </a>{" "}
        on England Football.
      </p>
    </PolicyPage>
  );
}
