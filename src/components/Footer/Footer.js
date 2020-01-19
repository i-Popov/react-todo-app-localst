import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

const Footer = ({ amount, activeFilter }) => (
    <div className={styles.footer}>
        <span className={styles.amount}>{`${amount} Tasks left`}</span>
        <div className={styles.btngroup}>
            {FILTERS_BTN.map(({ text, id }) => (
                <button
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                >{text}</button>
            ))}
        </div>
    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
};

Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
};

export default Footer;
