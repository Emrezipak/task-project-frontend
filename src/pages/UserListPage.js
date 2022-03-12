import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllUser, getUserByName } from '../Api/ApiCalls'
const UserListPage = () => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")

    useEffect(() => {
        getAllUser().then((user) => setUsers(user.data))
    }, [])

    useEffect(() => {
        getUserByName(username).then((user) => setUsers(user.data))
    }, [username])

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-3'>
                    <div className="ui icon input mt-3">
                        <input type="text" placeholder="Search..." name="username" onChange={(event) => { setUsername(event.target.value) }} />
                    </div>

                </div>
                <div className='col-9'>
                    <table className="ui celled table">
                        <thead>
                            <tr><th>Name</th>
                                <th>Email</th>
                                <th>Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td data-label="Name">{user.name}</td>
                                        <td data-label="Age">{user.email}</td>
                                        <td data-label="Job">
                                            <Link to={`/add-task/${user.email}`}>
                                                <button type='submit' className='btn btn-primary'>
                                                    Add Task
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default UserListPage;

