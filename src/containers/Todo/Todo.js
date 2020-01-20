import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Todo.styles.scss';
import uuid from 'uuid/v1';

import { AddTask } from "../../actions/AddTask";
import { DeleteTask } from "../../actions/DeleteTask";
import { CompleteTask } from "../../actions/CompleteTask";
import { ChangeFilter } from "../../actions/ChangeFilter";
//import { EditTask } from "../../actions/EditTask";

import ToDoInput from '../../components/ToDoInput/ToDoInput';
import ToDoList from '../../components/ToDoList/ToDoList';
import Footer from '../../components/Footer/Footer';
import Title from "../../components/Title/Title";



class ToDo extends Component {

    state = {
        taskText: ''
    };

    handleInputChange = ({target: {value} }) => {
        this.setState({
            taskText: value,
        })
    };

    AddTask = ({ key }) => {
        const { taskText } = this.state;

        if (taskText.length > 3 && key === 'Enter') {
            const { AddTask } = this.props;
            const id = uuid();

            AddTask(id, taskText, false);

            this.setState({
                taskText: '',
            })
        }
    };

    FilterTasks = (Tasks, activeFilter) => {
        switch (activeFilter) {

            case 'completed':
                return Tasks.filter(Task => Task.isCompleted);
                break;

            case 'active':
                return Tasks.filter(Task => !Task.isCompleted);
                break;

            default:
                return Tasks;
        }
    };

    getActiveTasksCounter = Tasks => Tasks.filter(Task => !Task.isCompleted).length;

    render() {
        const { taskText } = this.state;
        const { Tasks, DeleteTask, CompleteTask, Filters, ChangeFilter } = this.props;
        const isTasksExist = Tasks && Tasks.length > 0;
        const FilteredTasks = this.FilterTasks(Tasks, Filters);
        const TaskCounter = this.getActiveTasksCounter(Tasks);

        return (
            <div className={styles.todo__wrapper}>
                <Title title="Задачи" />
                <ToDoInput onKeyPress={this.AddTask} onChange={this.handleInputChange} value={taskText} />
                {isTasksExist && <ToDoList CompleteTask={CompleteTask} tasksList={FilteredTasks} DeleteTask={DeleteTask} />}
                {isTasksExist && <Footer ChangeFilter={ChangeFilter} amount={TaskCounter} activeFilter={Filters} />}
            </div>
        );
    }
}

export default connect(({Tasks, Filters}) => ({
    Tasks,
    Filters,
}), { AddTask, DeleteTask, CompleteTask, ChangeFilter })(ToDo);
