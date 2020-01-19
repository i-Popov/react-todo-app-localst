import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToDoInput.styles.scss';

const ToDoInput = ({ value, onChange }) => (
    <div className={styles.todoinputwrapper}>
        <i className={styles.faplus} />
        <input
            className={styles.todoinput}
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

ToDoInput.defaultProps = {
    onChange: () => {},
    value: '',
};

export default ToDoInput;
