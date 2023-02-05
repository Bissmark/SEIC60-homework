import React, {Component} from 'react'

export default class CreateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({task: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createTask(this.state.task)
        this.setState({task: ''})
    }

    render() {
        const {task} = this.state
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input placeholder="Enter a task" value={task} onChange={this.handleChange} autoFocus />
                <button>Add</button>
            </form>
        )
    }
}