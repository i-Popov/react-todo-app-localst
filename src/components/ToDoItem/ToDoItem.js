import React from 'react';
import PropTypes from 'prop-types';

import styles from './ToDoItem.styles.scss';

const ToDoItem = ({ text, isCompleted, DeleteTask, id, CompleteTask }) => (
    <li className={styles.todo__item}>
        <i onClick={() => CompleteTask(id)} className={isCompleted ? 'mark far icon_check_circle' : 'mark far icon_circle'}>o</i>
        <span className={isCompleted ? 'completed' : 'text'}>{text}</span>
        {/*<i onClick={() => EditTask(id)} className={styles.icon_times}>/</i>*/}
        <i onClick={() => DeleteTask(id)} className={styles.icon_times}>x</i>
    </li>
);

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    DeleteTask: PropTypes.func,
    //EditTask: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    DeleteTask: () => {},
    //EditTask: () => {},
    id: '',
};

export default ToDoItem;
