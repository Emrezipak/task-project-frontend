import React, { useState, useEffect } from 'react'
import { getAllTask, deleteTask, getTaskByUserEmail } from '../Api/ApiCalls'
export default function TaskListPage() {

    const [tasks, setTasks] = useState([])
    const [email, setEmail] = useState("")
    useEffect(() => {
        getAllTask().then((task) => setTasks(task.data))
    }, [])

    useEffect(() => {
        getTaskByUserEmail(email).then((task) => setTasks(task.data));
    }, [email])

    const onClickButton = (id) => {
        deleteTask(id).then(setTasks(tasks.filter((task) => task.id != id)))
    }

    return (
        <div className='container  mt-5'>
            <div className='row'>
                <div className='col-3'>
                    <input type="text" placeholder="Search..." name="email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className='col-9 ml-2'>
                    <table className="table">
                        <thead className="table-light text-secondary">
                            <tr>
                                <th>Task Date</th>
                                <th>Start Task</th>
                                <th>Stop Task</th>
                                <th>Description</th>
                                <th>User</th>
                                <th>Delete Task</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                tasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.task_date}</td>
                                        <td>{task.start_time}</td>
                                        <td>{task.stop_time}</td>
                                        <td>{task.description}</td>
                                        <td>{task.user.email}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => onClickButton(task.id)}>
                                                Delete Task
                                            </button>

                                        </td>
                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div >
    )
}
