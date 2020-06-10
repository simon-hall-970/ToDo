import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ToDoItem(props) {

    const toggleStatus = (evt) => {
        let id = evt.target.name
        let newStatus = {completed: evt.target.checked}
        props.completionStatus(id, newStatus)
    }
    
    const delTask = () => {
        props.delTask(props.id)
    }


    return(
        <li>
            <label className={props.completed ? "container completed" : "container"} >{props.task}
                <input type="checkbox" 
                name={props.id} 
                checked={props.completed} 
                onChange={toggleStatus} />
                <span className="checkmark"></span>
            </label> 
            <div className="delete" name={props.id} onClick={delTask}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        </li>
    )
}

export default ToDoItem