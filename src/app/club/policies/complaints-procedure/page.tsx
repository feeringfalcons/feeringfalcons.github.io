import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/ui/PolicyPage";

export const metadata: Metadata = {
  title: "Complaints Procedure",
  description:
    "How to raise a complaint at Feering Falcons Youth Football Club -reporting discrimination or breaches of club policies.",
};

export default function ComplaintsProcedurePage() {
  return (
    <PolicyPage title="Club Complaints Procedure">
      <p>
        In the event that any member feels that he or she has suffered
        discrimination in any way or that the Club Policies, Rules or{" "}
        <Link
          href="/club/policies/code-of-conduct"
          className="text-falcon-red underline hover:text-falcon-red-dark"
        >
          Code of Conduct
        </Link>{" "}
        have been broken they should follow the procedures below.
      </p>

      <ol>
        <li>
          <p>
            They should report the matter to the Club Secretary or another member
            of the Committee (details can be found on the{" "}
            <Link
              href="/club#officers"
              className="text-falcon-red underline hover:text-falcon-red-dark"
            >
              Club Info page
            </Link>
            ).
          </p>
          <p className="mt-3">The report should include:</p>
          <ol className="mt-2" type="a">
            <li>
              Details of what, when, and where the occurrence took place
            </li>
            <li>Any witness statement and names</li>
            <li>
              Names of any others who have been treated in a similar way
            </li>
            <li>
              Details of any former complaints made about the incident, date,
              when and to whom made
            </li>
            <li>A preference for a solution to the incident</li>
          </ol>
        </li>
        <li>
          The Club&apos;s Management Committee will sit for any hearings that are
          requested.
        </li>
        <li>
          <p>
            The Club&apos;s Management Committee will have the power to:
          </p>
          <ol className="mt-2" type="a">
            <li>Warn as to future conduct</li>
            <li>Suspend from membership</li>
            <li>
              Remove from membership any person found to have broken the
              Club&apos;s Policies or Codes of Conduct
            </li>
          </ol>
        </li>
      </ol>

      <p>
        If the complaint is with regard to the Club&apos;s Management Committee
        the member has the right to report the discrimination direct to the
        relevant County Football Association.
      </p>
    </PolicyPage>
  );
}
