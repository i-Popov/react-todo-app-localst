import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToDoItem.styles.scss';

const ToDoItem = ({ text, isCompleted, DeleteTask, id }) => (
    <li className={styles.todo__item}>
        <i className={isCompleted ? 'mark far icon_check_circle' : 'mark far icon_circle'} />
        <span className={isCompleted ? 'completed' : 'text'}>{text}</span>
        <i onClick={() => DeleteTask(id)} className="fas icon_times">x</i>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    DeleteTask: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    DeleteTask: () => {},
    id: '0',
};

export default ToDoItem;
