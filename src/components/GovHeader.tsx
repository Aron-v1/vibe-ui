import Link from "next/link";

export default function GovHeader() {
  return (
    <nav
      className="govuk-service-navigation govuk-service-navigation--inverse"
      aria-label="Primary"
      data-module="govuk-service-navigation"
    >
      <div className="govuk-width-container">
        <div className="govuk-service-navigation__container">
          <div className="govuk-service-navigation__service-name">
            <Link
              className="govuk-service-navigation__link"
              href="/"
              aria-current="page"
            >
              GOV Reuse Library
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
