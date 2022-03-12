import React, { useEffect, useState } from 'react'
import { getTaskByUserEmail } from '../Api/ApiCalls'
import { useSelector } from 'react-redux'
const UserTaskListPage = (props) => {
    const email=useSelector(store=>store.email)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        getTaskByUserEmail(email).then((task) => setTasks(task.data)).catch((error) => console.log(error))
    },[])
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-9 ml-2'>
                    <table className="table">
                        <thead className="table-light text-secondary">
                            <tr>
                                <th>Task Date</th>
                                <th>Start Task</th>
                                <th>Stop Task</th>
                                <th>Description</th>
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
export default UserTaskListPage