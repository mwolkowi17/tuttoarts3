import React from 'react'
import Helmet from 'react-helmet'

import PropTypes from 'prop-types'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <h2 className='has-text-weight-semibold is-size-2'>
                  {pricing.heading}
                </h2>
                <div>
                  <ul>
                    <li>EMI Music Classic</li>
                    <li>Outside Music</li>
                    <li>Magic Records</li>
                    <li>Universal Music Poland</li>
                    <li>>Vichy</li>
                    <li>TPminikanie.pl</li>
                    <li>Wydawnictwo Operon</li>
                    <li>Hotel Odyssey</li>
                    <li>Polski Chor Kameralny</li>
                    <li>Tv Religia</li>
                    <li>Tv4</li>
                    <li>TVP</li>
                    <li>Polbank</li>
                    <li>Bre Bank</li>
                    <li>Ministerstwo Środowiska</li>
                    <li>Centrum Nauki Kopernik</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PricingPageTemplate
