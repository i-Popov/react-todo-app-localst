import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToDoInput.styles.scss';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <div className={styles.todo__input__wrapper}>
        <i className={styles.icon__wrapper} />
        <input
            className={styles.todo__input}
            placeholder="Введите задачу и нажмите 'Enter'"
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
};

ToDoInput.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: '',
};

export default ToDoInput;
