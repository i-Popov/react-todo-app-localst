import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import styles from './ToDoInput.styles.scss';

const ToDoInput = ({ value, onChange, onKeyPress }) => (
    <div className={styles.todo__input__wrapper}>
        <FontAwesomeIcon className={styles.icon__wrapper} icon={faPlus}/>
        <input
            className={styles.todo__input}
            placeholder="Please add task ..."
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
