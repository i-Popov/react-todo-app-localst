import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../ToDoItem/ToDoItem';

import styles from './ToDoList.styles.scss';

const ToDoList = ({ tasksList }) => (
    <ul className={styles.todolist}>
        {tasksList.map(({ id, text, isCompleted }) => (
            <ToDoItem key={id} text={text} isCompleted={isCompleted} />
        ))}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
}

ToDoList.defaultProps = {
    tasksList: [],
}

export default ToDoList;
