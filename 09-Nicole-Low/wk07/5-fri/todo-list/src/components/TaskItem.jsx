import React, {Component} from 'react'

export default class TaskItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            task: this.props.taskItem.task,
            isEditing: false
        }

        this.deleteTask = this.deleteTask.bind(this)
    }

    setEditingState = (isEditing) => {
        this.setState({isEditing: isEditing})
    }

    toggleTask = () => {
        this.props.toggleTask(this.props.id)
    }

    deleteTask() {
        this.props.deleteTask(this.props.id)
    }

    handleChange = (event) => {
        this.setState({task: event.target.value})
    }

    handleSubmit = (event) =>  {
        event.preventDefault()
        this.props.editTask(this.props.id, this.state.task)
        this.setState({isEditing: false})
    }

    render() {
        return (
           <tr>
            {this.state.isEditing?
            <>
            <td>
                <form onSubmit={this.handleSubmit}>
                    <input defaultValue={this.state.task} onChange={this.handleChange} autoFocus />
                </form>
            </td>

            <td>
                <button type='submit' onClick={this.handleSubmit}>Save</button>
                <button type='button' onClick={() => this.setEditingState(false )}>Cancel</button>
            </td>
            </>
            :
            <>
            <td className="task-align" onClick={this.toggleTask}>
                <input type="checkbox" readOnly checked={this.props.taskItem.isCompleted} />
                <span className={this.props.taskItem.isCompleted?"completed":"not-completed"}>
                    {this.props.taskItem.task}
                </span>
            </td>

            <td className="table-right">
                <button onClick={() => this.setEditingState(true)} >Edit</button>
                <button onClick={this.deleteTask}>Delete</button>
            </td>
            </>
            }
            
           </tr>
        )
    }
}