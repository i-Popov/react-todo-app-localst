import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../ToDoItem/ToDoItem';

import styles from './ToDoList.styles.scss';

const ToDoList = ({ tasksList, DeleteTask, CompleteTask }) => (
    <ul className={styles.todo__list}>
        {tasksList.map(({ id, text, isCompleted }) => (
            <ToDoItem CompleteTask={CompleteTask} DeleteTask={DeleteTask} id={id} key={id} text={text} isCompleted={isCompleted} />
        ))}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    DeleteTask: PropTypes.func,
    CompleteTask: PropTypes.func,
};

ToDoList.defaultProps = {
    tasksList: [],
    DeleteTask: () => {},
    CompleteTask: () => {},
};

export default ToDoList;
