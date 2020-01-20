import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../ToDoItem/ToDoItem';

import styles from './ToDoList.styles.scss';

const ToDoList = ({ tasksList, DeleteTask }) => (
    <ul className={styles.todo__list}>
        {tasksList.map(({ id, text, isCompleted }) => (
            <ToDoItem DeleteTask={DeleteTask} id={id} key={id} text={text} isCompleted={isCompleted} />
        ))}
    </ul>
);

ToDoList.propTypes = {
    tasksList: PropTypes.array,
    DeleteTask: PropTypes.func,
};

ToDoList.defaultProps = {
    tasksList: [],
    DeleteTask: () => {}
};

export default ToDoList;
