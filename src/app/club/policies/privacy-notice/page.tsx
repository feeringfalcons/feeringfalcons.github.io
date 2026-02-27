import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/ui/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Feering Falcons Youth Football Club privacy notice -how we collect, use and protect your personal data.",
};

export default function PrivacyNoticePage() {
  return (
    <PolicyPage title="Club Privacy Notice">
      <p className="text-lg font-medium text-falcon-charcoal">
        Feering Falcons Youth Football Club takes your privacy very seriously.
      </p>

      <p>
        This Privacy Notice sets out how we use and look after the personal
        information we collect from you. We are the data controller, responsible
        for the processing of any personal data you give us. We take reasonable
        care to keep your information secure and to prevent any unauthorised
        access to or use of it.
      </p>

      <h2>What personal data we hold on you</h2>

      <p>
        Personal data means any information about an individual from which that
        individual can be identified. We collect, use, store and transfer some
        personal data of our participants (and their parents or guardians), and
        other Club members.
      </p>

      <p>
        You provide information about yourself when you register with the Club,
        and by filling in forms at an event or online, or by corresponding with
        us by phone, e-mail or otherwise.
      </p>

      <p>
        The information you give us may include your name, date of birth,
        address, e-mail address, phone number, gender, and the contact details
        of a third party in the case of emergency. We may also ask for relevant
        health information, which is classed as special category personal data,
        for the purposes of your health, wellbeing, welfare and safeguarding.
        Where we hold this data it will be with the explicit consent of the
        participant or, if applicable, the participant&apos;s parent or
        guardian.
      </p>

      <p>
        Where we need to collect personal data to fulfil Club responsibilities
        and you do not provide that data, we may not be able to honour or
        administer your membership.
      </p>

      <h2>Why we need your personal data</h2>

      <p>
        We will only use personal data for any purpose for which it has been
        specifically provided. The reason we need participants&apos; and
        members&apos; personal data is to be able to run the football club and
        arrange matches; to administer memberships, and provide the membership
        services you are signing up to when you register with the club. Our
        lawful basis for processing your personal data is that we have a
        contractual obligation to you as a participant or member to provide the
        services you are registering for.
      </p>

      <h3>How we use your data</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-falcon-charcoal/20">
              <th className="py-2 pr-4 text-left font-heading text-falcon-charcoal">
                Purpose
              </th>
              <th className="py-2 text-left font-heading text-falcon-charcoal">
                Legal Basis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-falcon-border">
            <tr>
              <td className="py-3 pr-4">
                Processing membership forms and payments/subs
              </td>
              <td className="py-3">Performance of a contract</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Organising matches</td>
              <td className="py-3">Performance of a contract</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Sending out match or Club information and updates
              </td>
              <td className="py-3">Performance of a contract</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Sharing data with coaches, managers or officials to run training
                sessions or enter events
              </td>
              <td className="py-3">Performance of a contract</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Sharing data with leagues, county associations and other
                competition providers
              </td>
              <td className="py-3">Performance of a contract</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Sharing data with committee members for club activities and
                membership renewals
              </td>
              <td className="py-3">Legitimate interest</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Sharing data with third party service or facility providers
              </td>
              <td className="py-3">Legitimate interest</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Publishing match and league results (including images and names)
              </td>
              <td className="py-3">
                Consent (children under 13: written parental consent)
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Sending marketing information such as newsletters
              </td>
              <td className="py-3">Consent</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">
                Understanding possible health risks
              </td>
              <td className="py-3">Consent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Who we share your personal data with</h2>

      <p>
        When you become a member of the Club, your information, if you are a
        coach or volunteer, will be (or if you are another participant, may be)
        entered onto the Whole Game System database, which is administered by
        the FA. We also pass your information to the County FA and to leagues to
        register participants and the team for matches, tournaments or other
        events, and for affiliation purposes.
      </p>

      <p>
        We may share your personal data with selected third parties, suppliers
        and sub-contractors such as referees, coaches or match organisers.
        Third-party service providers will only process your personal data for
        specified purposes and in accordance with our instructions.
      </p>

      <p>
        The Club&apos;s data processing may require your personal data to be
        transferred outside of the UK. Where the Club does transfer your
        personal data overseas it is with the sufficient appropriate safeguards
        in place to ensure the security of that personal data.
      </p>

      <h2>Protection of your personal data</h2>

      <p>
        We have put in place appropriate security measures to prevent your
        personal data from being accidentally lost, used or accessed in an
        unauthorised way, altered or disclosed.
      </p>

      <h2>How long we hold your personal data</h2>

      <p>
        We keep personal data on our participants and members while they
        continue to be a participant or member or are otherwise actively
        involved with the Club. We will delete this data as soon as a
        participant or member has left or otherwise ended their membership or
        affiliation, or sooner if specifically requested and we are able to do
        so. We may need to retain some personal data for longer for legal or
        regulatory purposes. The personal data that is stored on Whole Game
        System is subject to their privacy policy so we advise you review that
        policy together with this notice.
      </p>

      <h2>Your rights regarding your personal data</h2>

      <p>
        As a data subject you may have the right at any time to request access
        to, rectification or erasure of your personal data; to restrict or
        object to certain kinds of processing of your personal data, including
        direct marketing; to the portability of your personal data and to
        complain to the UK&apos;s data protection supervisory authority, the
        Information Commissioner&apos;s Office, about the processing of your
        personal data.
      </p>

      <p>
        As a data subject you are not obliged to share your personal data with
        the Club. If you choose not to share your personal data with us we may
        not be able to register or administer your membership.
      </p>

      <p>
        We may update this Privacy Notice from time to time, and will inform you
        of any changes in how we handle your personal data.
      </p>

      <p>
        If you have any questions about this Privacy Notice then please contact
        our{" "}
        <Link
          href="/club#officers"
          className="text-falcon-red underline hover:text-falcon-red-dark"
        >
          Club Secretary
        </Link>
        .
      </p>
    </PolicyPage>
  );
}
