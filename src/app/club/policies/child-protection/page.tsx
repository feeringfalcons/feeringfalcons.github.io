import type { Metadata } from "next";
import { PolicyPage } from "@/components/ui/PolicyPage";
import { CLUB } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Child Protection Policy",
  description:
    "Feering Falcons Youth Football Club child protection policy — safeguarding the welfare of every young player.",
};

export default function ChildProtectionPage() {
  return (
    <PolicyPage title="Child Protection Policy">
      <ol>
        <li>
          Feering Falcons Youth Football Club acknowledges its responsibility to
          safeguard the welfare of every child and young person who has been
          entrusted to its care and is committed to working to provide a safe
          environment for all members. A child or young person is anyone under the
          age of 18 engaged in any club football activity. We subscribe to The
          Football Association&apos;s child protection and best practice policy
          and procedures and endorse and adopt the policy statement contained in
          that document.
        </li>
        <li>
          <p>
            The key principles of The FA Child Protection Policy are that:
          </p>
          <ul className="mt-3">
            <li>
              The child&apos;s welfare is, and must always be, the paramount
              consideration
            </li>
            <li>
              All children and young people have a right to be protected from
              abuse regardless of their age, gender, disability, culture,
              language, racial origin, religious beliefs or sexual orientation
            </li>
            <li>
              All suspicions and allegations of abuse will be taken seriously and
              responded to swiftly and appropriately
            </li>
            <li>
              Working in partnership with other organisations, children and young
              people and their parents or carers is essential
            </li>
          </ul>
          <p className="mt-3">
            We acknowledge that every child or young person who plays or
            participates in football should be able to take part in an enjoyable
            and safe environment and be protected from poor practice and abuse.
            Feering Falcons Youth Football Club recognises that this is the
            responsibility of every adult involved in our club.
          </p>
        </li>
        <li>
          Feering Falcons Youth Football Club has a role to play in safeguarding
          the welfare of all children and young people by protecting them from
          physical, sexual or emotional harm and from neglect or bullying. It is
          noted and accepted that The Football Association&apos;s child
          protection regulation (see The FA Handbook) applies to everyone in
          football whether in a paid or voluntary capacity. This includes those
          who are a volunteer, match official, helper on club tours, football
          coach, club official or medical staff.
        </li>
        <li>
          <p>
            We endorse and adopt The FA&apos;s Child Protection and Best Practice
            Guidelines for Recruiting Volunteers and will:
          </p>
          <ul className="mt-3">
            <li>Develop a role profile</li>
            <li>Request identification documents</li>
            <li>
              As a minimum meet and chat with the applicant(s) and where possible
              conduct interviews before appointing
            </li>
            <li>
              Require an FA DBS Enhanced Disclosure where appropriate in line
              with FA guidelines
            </li>
          </ul>
          <p className="mt-3">
            All current Feering Falcons Youth Football Club members with direct
            access to children and young people will be required to complete a
            DBS Enhanced Disclosure via The FA DBS Unit. If there are concerns
            regarding the appropriateness of an individual who is already
            involved or who has approached us to become part of Feering Falcons
            Youth Football Club, guidance will be sought from The Football
            Association.
          </p>
          <p className="mt-3">
            It is noted and accepted that The FA will consider the relevance and
            significance of the information obtained via the DBS Enhanced
            Disclosure and that all decisions will be made in the best interests
            of children and young people.
          </p>
          <p className="mt-3">
            It is accepted that The FA aims to prevent people with a history of
            relevant and significant offending from having contact with children
            or young people and the opportunity to influence policies or practice
            with children or young people. This is to prevent direct sexual or
            physical harm to children and to minimise the risk of
            &lsquo;grooming&rsquo; within football.
          </p>
        </li>
        <li>
          Feering Falcons Youth Football Club supports The FA&apos;s
          &lsquo;whistle blowing&rsquo; policy. Any adult or young person with
          concerns about a colleague can &lsquo;whistle blow&rsquo; by
          contacting The FA Safeguarding Team on{" "}
          <a href="tel:08001691863">0800 169 1863</a>, by writing to The FA
          Safeguarding Team at The Football Association, Wembley Stadium, London
          HA9 0WS, or by going direct to the police, social services or the
          NSPCC. Feering Falcons Youth Football Club encourages everyone to know
          about it and utilise it if necessary.
        </li>
        <li>
          <p>
            Feering Falcons Youth Football Club has appointed a Club Welfare
            Officer (CWO) in line with The FA&apos;s role profile and required
            completion of the child protection and best practice workshop. The
            post holder will be involved with designated person&apos;s training
            provided by The FA. The CWO is the first point of contact for all
            club members and parents or guardians regarding concerns for the
            welfare of any child or young person. They will liaise directly with
            the CFA CPO and will be familiar with the procedures for referring
            any concerns. They will also play a proactive role in increasing an
            awareness of poor practice and abuse amongst club members.
          </p>
          <div className="mt-4 border-l-4 border-falcon-red bg-falcon-red/5 px-5 py-4">
            <p className="font-medium text-falcon-charcoal">
              Club Welfare Officer: {CLUB.officers.childWelfare.name}
            </p>
            <p className="mt-1 text-sm">
              <a href={`mailto:${CLUB.officers.childWelfare.email}`}>
                {CLUB.officers.childWelfare.email}
              </a>
            </p>
          </div>
        </li>
        <li>
          We acknowledge and endorse The FA&apos;s identification of bullying as
          a category of abuse. Bullying of any kind is not acceptable at our
          club. If bullying does occur, all players, parents or guardians should
          be able to tell and know that incidents will be dealt with promptly.
          Incidents need to be reported to the CWO, a member of the committee
          or, in cases of serious bullying, contact the CFA CPO.
        </li>
        <li>
          <p>
            Codes of conduct for players, parents or spectators, officials and
            coaches have been implemented by Feering Falcons Youth Football Club.
            These codes can be found on the{" "}
            <a href="/club/policies/code-of-conduct">club website</a> and are
            available anytime on request.
          </p>
          <p className="mt-3">
            In order to validate these codes of conduct the club has clear
            sanctions to deal with any misconduct at club level and acknowledges
            the possibility of potential sanctions which may be implemented by
            leagues or the CFA in more serious circumstances. All prospective
            members will be informed of these codes.
          </p>
        </li>
        <li>
          <p>
            Further advice on child protection matters can be obtained from:
          </p>
          <ul className="mt-3">
            <li>
              The County Football Association&apos;s Child Protection Officer,
              whose details can be found in the County Handbook
            </li>
            <li>
              The Football Association / NSPCC Child Protection 24-Hour Helpline:{" "}
              <a href="tel:08088005000">0808 800 5000</a>
            </li>
            <li>
              <a
                href="https://www.thefa.com/football-rules-governance/safeguarding"
                target="_blank"
                rel="noopener noreferrer"
              >
                FA Safeguarding Resources
              </a>
            </li>
            <li>
              The FA Safeguarding Team on{" "}
              <a href="tel:08001691863">0800 169 1863</a>
            </li>
          </ul>
        </li>
      </ol>
    </PolicyPage>
  );
}
