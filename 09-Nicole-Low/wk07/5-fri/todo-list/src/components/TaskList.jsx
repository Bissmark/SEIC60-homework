import React, {Component} from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {

    render() {
        return (
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th className="table-right">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.tasks.map((task, index) => {
                        return <TaskItem key={index} taskItem={task} id={index} deleteTask={this.props.deleteTask} editTask={this.props.editTask} toggleTask={this.props.toggleTask} />
                    })}
                </tbody>
            </table>
        )
    }
}