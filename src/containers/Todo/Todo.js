import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Todo.styles.scss';

import uuid from 'uuid/v1';

import { AddTask } from "../../actions/AddTask";

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
        const id = uuid(); //добавили id


        if (taskText.length > 3 && key === 'Enter') {
            const { AddTask } = this.props;

            AddTask(id, taskText, false);
            // AddTask((new Date()).getTime(), taskText, false);

            this.setState({
                taskText: '',
            })
        }
    };

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className={styles.todo__wrapper}>
                <Title title="Задачи" />
                <ToDoInput onKeyPress={this.AddTask} onChange={this.handleInputChange} value={taskText} />
                {isTasksExist && <ToDoList tasksList={tasks} />}
                {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

export default connect(state => ({
    tasks: state.Tasks,
}), { AddTask })(ToDo);
