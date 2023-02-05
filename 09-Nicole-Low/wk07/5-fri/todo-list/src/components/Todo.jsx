import React, {Component} from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

const tasks = []
export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: tasks
        }

        this.createTask = this.createTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    createTask(task) {
        if (task.trim() === '') {
            alert("Task can't be empty")
            return
        }
        tasks.push({task, isCompleted: false})
        this.setState({tasks: tasks})
    }

    toggleTask = (taskId) => {
        const taskItem = tasks[taskId]
        taskItem.isCompleted = !taskItem.isCompleted
        this.setState({tasks: tasks})
    }

    deleteTask(taskId) {
        tasks.splice(taskId, 1)
        this.setState({tasks: tasks})
    }

    editTask = (taskId, task) => {
        const taskItem = tasks[taskId]
        taskItem.task = task
        this.setState({tasks: tasks})
    }

    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                <div>
                    <CreateTask createTask={this.createTask} />
                </div>
                <div>
                    <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} editTask={this.editTask} toggleTask={this.toggleTask} />
                </div>
            </div>
        )
    }
}
