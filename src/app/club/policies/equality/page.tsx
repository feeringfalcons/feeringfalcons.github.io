import type { Metadata } from "next";
import { PolicyPage } from "@/components/ui/PolicyPage";

export const metadata: Metadata = {
  title: "Equality Policy",
  description:
    "Feering Falcons Youth Football Club equality policy — ensuring everyone is treated fairly and with respect.",
};

export default function EqualityPolicyPage() {
  return (
    <PolicyPage title="Equality Policy">
      <p>
        The aim of this policy is to ensure that everyone is treated fairly and
        with respect and that Feering Falcons Youth Football Club is equally
        accessible to them all.
      </p>

      <p>
        Feering Falcons Youth Football Club is responsible for setting standards
        and values to apply throughout the club at every level. Football belongs
        to and should be enjoyed by, anyone who wants to participate in it.
      </p>

      <p>
        Our commitment is to confront and eliminate discrimination whether by
        reason of gender, sexual orientation, marital status, race, nationality,
        ethnic origin, colour, religion or belief, ability or disability and to
        encourage equal opportunities.
      </p>

      <p>
        This policy is fully supported by the Club Officers who are responsible
        for the implementation of this policy.
      </p>

      <p>
        Feering Falcons Youth Football Club, in all its activities will not
        discriminate, or in any way treat anyone less favourably, on grounds of
        gender, sexual orientation, marital status, race, nationality, ethnic
        origin, colour, religion or belief, ability or disability. It means that
        Feering Falcons Youth Football Club will ensure that it treats people
        fairly and with respect and that it will provide access and
        opportunities for all members of the community to take part in, and
        enjoy, its activities.
      </p>

      <p>
        Feering Falcons Youth Football Club will not tolerate harassment,
        bullying, abuse or victimisation of an individual, which for the
        purposes of this policy and the actions and sanction applicable is
        regarded as discrimination. This includes sexual or racially based
        harassment or other discriminatory behaviour, whether physical or
        verbal.
      </p>

      <p>
        Feering Falcons Youth Football Club will work to ensure that such
        behaviour is met with appropriate action in whatever context it occurs.
      </p>

      <p>
        Feering Falcons Youth Football Club is committed to taking positive
        action where inequalities exist, and to the development of a programme
        of ongoing training and awareness-raising events and activities in order
        to promote the eradication of discrimination and promote equality in
        football.
      </p>

      <p>
        Feering Falcons Youth Football Club is committed to a policy of equal
        treatment of all members and requires all members to abide and adhere to
        these policies and the requirements of the Equality Act 2010 and any
        subsequent amendments or new legislation.
      </p>

      <p>
        Feering Falcons Youth Football Club commits itself to the immediate
        investigation of any claims, when it is brought to its attention, of
        discrimination on the above grounds and where such is found to be the
        case, a requirement that the practice stop and sanctions imposed as
        appropriate.
      </p>
    </PolicyPage>
  );
}
