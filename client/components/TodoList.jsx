import React from 'react'
import { connect } from 'react-redux'

import ToDoItem from './ToDoItem'

import {addTask, markComplete, deleteTask} from '../api'

import {fetchList} from '../actions'

class TodoList extends React.Component {
    state = {
        task: '',
        description: '',
        priority: 0,
        completed: 'false'
    }
    defaultState = {
        task: '',
        description: '',
        priority: 0,
        completed: 'false'
    }
    componentDidMount(){
        this.props.dispatch(fetchList())
    }

    taskInputField = (evt) => {
        this.setState({
            task: evt.target.value
        })
    }

    refresh = () => {
        this.props.dispatch(fetchList())
    }

    clickAddTask = (evt) => {
        evt.preventDefault()
        addTask(this.state)
        .then(res => {
            this.setState(this.defaultState)
        })
        .then(this.refresh())      
    }

    completionStatus = (id, newStatus) => {
        markComplete(id, newStatus)
        .then(this.refresh()) 
    }

    deleteHandler = (id) => {
        deleteTask(id)
        .then(this.refresh())
    }

    render() {

        const tasks = this.props.tasks
        const taskList = tasks.map(task => (
                <ToDoItem 
                key={task.id}
                id={task.id}
                task={task.task}
                description={task.description}
                priority={task.priority}
                completed={task.completed}
                delTask={this.deleteHandler}
                completionStatus={this.completionStatus} />
        ))

        return (
            <>
            <ul className="todo-list">
            {taskList}
            </ul>

            <form>
                <input type="text" name="task" onChange={this.taskInputField} value={this.state.task}/>
                <input type="submit" value="Add" onClick={this.clickAddTask}/>
            </form>
        </>
        )
    }
}

function mapStateToProps (state) {
    return {
        tasks: state.taskList
    }
}

export default connect(mapStateToProps)(TodoList)