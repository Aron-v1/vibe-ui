const oldBanner = () => (
  <div className="govuk-phase-banner" aria-label="Site status">
    <p className="govuk-phase-banner__content">
      <strong className="govuk-tag govuk-phase-banner__content__tag">Alpha</strong>
      <span className="govuk-phase-banner__text">
        This is a new service. <a className="govuk-link" href="#">Help us improve it</a> and <a className="govuk-link" href="#">give your feedback</a>.
      </span>
    </p>
  </div>
)

export default function GovPhaseBanner() {
  return (
    <div className="govuk-width-container">
      <div className="govuk-!-padding-top-2">
        <div className="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
          <div className="govuk-notification-banner__header">
            <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
              Important
            </h2>
          </div>
          <div className="govuk-notification-banner__content">
            <p className="govuk-notification-banner__heading">This is a prototype</p>
            <p className="govuk-notification-banner__text">It is not a live service. It is available Monday to Friday, 9am to 5pm, until 17th April 2026.</p>
            <p className="govuk-notification-banner__text"><a className="govuk-notification-banner__link" 
               href="https://forms.office.com/pages/responsepage.aspx?id=KEeHxuZx_kGp4S6MNndq2BWuCYiathpHp2puk8YlVv9UN01JWkhETE9KQ1lSSjFLVlNHOTFWN0ZDOC4u&route=shorturl">Give feedback</a> to help us improve the search results.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
