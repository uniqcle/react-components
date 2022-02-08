import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

const Image = ({
    src, alt, className, width, height, circle, ...attrs
}) => {

    if (!src) {
        src = `https://via.placeholder.com/${width}x${height}`
    }

    const classes = classNames(
        className,
        { circle }
    )

    return (
        <img
            {...attrs}
            src={src}
            alt={alt}
            className={classes}
            width={width}
            height={height}
        />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    circle: PropTypes.bool
}

Image.defaultProps = {
    alt: 'image name',
    className: ``,
    width: 100,
    height: 100
}

export default Image; 