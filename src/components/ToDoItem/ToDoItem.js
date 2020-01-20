import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'


import styles from './ToDoItem.styles.scss';

const ToDoItem = ({ text, isCompleted, DeleteTask, id, CompleteTask }) => (
    <li className={styles.todo__item}>
        <FontAwesomeIcon
            onClick={() => CompleteTask(id)}
            icon={isCompleted ? faCheckCircle : faCircle}
            className={isCompleted ? 'mark icon_check_circle' : 'mark icon_circle'}
        />
        <span className={isCompleted ? 'completed' : 'text'}>{text}</span>
        <FontAwesomeIcon
            onClick={() => DeleteTask(id)}
            className={styles.icon_times} icon={faTrash}
        />
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
    id: '',
};

export default ToDoItem;
