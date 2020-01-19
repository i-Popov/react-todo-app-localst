import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToDoItem.styles.scss';

const ToDoItem = ({ text, isCompleted }) => (
    <li className={styles.todo__item}>
        <i className={isCompleted ? 'mark far icon_check_circle' : 'mark far icon_circle'} />
        <span className={isCompleted ? 'completed' : 'text'}>{text}</span>
        <i className="fas icon_times" />
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
};

export default ToDoItem;
