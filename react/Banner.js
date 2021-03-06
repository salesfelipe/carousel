import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'render'

/**
 * Banner component. Shows an image with a description and one link.
 */
class Banner extends Component {
  getParams = params => {
    const json = {}
    if (params) {
      const array = params.split(',')
      array.forEach(item => {
        const pair = item.split('=')
        json[pair[0]] = pair[1]
      })
      return json
    }
  }

  render() {
    const {
      height,
      image,
      mobileImage,
      description,
      page,
      params,
      mobileHeight,
      typeOfRoute,
    } = this.props

    const content = (
      <div className="vtex-carousel__img-container">
        <div className="vtex-carousel__img-regular"
          style={{ maxHeight: `${height}px` }}>
          <img className="w-100" src={image} alt={description} />
        </div>
        <div className="vtex-carousel__img-mobile"
          style={{ maxHeight: `${mobileHeight}px` }}>
          <img className="w-100" src={mobileImage} alt={description} />
        </div>
      </div>
    )

    return (
      typeOfRoute === 'internal'
        ? <div>
          <Link page={page} params={this.getParams(params)}>
            {content}
          </Link>
        </div>
        : <div>
          <a href={page} target="_blank">
            {content}
          </a>
        </div>
    )
  }
}

Banner.propTypes = {
  /** The image of the banner */
  image: PropTypes.string.isRequired,
  /** Max height size of the banner */
  height: PropTypes.number.isRequired,
  /** The image of the banner on mobile */
  mobileImage: PropTypes.string.isRequired,
  /** Max height size of the banner on mobile  */
  mobileHeight: PropTypes.number.isRequired,
  /** The description of the image */
  description: PropTypes.string.isRequired,
  /** The page where the image is pointing to */
  page: PropTypes.string,
  /** Params of the url */
  params: PropTypes.object,
  /** Type of route */
  typeOfRoute: PropTypes.string,
}

Banner.defaultProps = {
  typeOfRoute: 'internal',
  height: 420,
}

export default Banner
