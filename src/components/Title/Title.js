import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.styles.scss';

const Title = ({ title }) => (
    <h1 className={styles.title}>{title}</h1>
);

Title.propTypes = {
    title: PropTypes.string,
};

Title.defaultProps = {
    title: 'Simple title',
};

export default Title;
