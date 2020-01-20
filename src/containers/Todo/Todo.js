import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Todo.styles.scss';
import uuid from 'uuid/v1';

import { AddTask } from "../../actions/AddTask";
import { DeleteTask } from "../../actions/DeleteTask";

import ToDoInput from '../../components/ToDoInput/ToDoInput';
import ToDoList from '../../components/ToDoList/ToDoList';
import Footer from '../../components/Footer/Footer';
import Title from "../../components/Title/Title";



class ToDo extends Component {

    state = {
        activeFilter: 'all',
        taskText: ''
    };

    handleInputChange = ({target: {value} }) => {
        this.setState({
            taskText: value,
        })
    };

    AddTask = ({ key }) => {
        const { taskText } = this.state;
        //const id = uuid();

        if (taskText.length > 3 && key === 'Enter') {
            const { AddTask } = this.props;
            const id = uuid();

            //AddTask(id, taskText, false);
            AddTask(id, taskText, false);

            this.setState({
                taskText: '',
            })
        }
    };

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks, DeleteTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className={styles.todo__wrapper}>
                <Title title="Задачи" />
                <ToDoInput onKeyPress={this.AddTask} onChange={this.handleInputChange} value={taskText} />
                {isTasksExist && <ToDoList tasksList={tasks} DeleteTask={DeleteTask} />}
                {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.Tasks,
}), { AddTask, DeleteTask })(ToDo);
