import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const UsersList = () => {
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        getUsers();
    }, []);
 
    const getUsers = async () => {
        const response = await axios.get('https://3tqiqyjuzi.execute-api.sa-east-1.amazonaws.com/users');
        setUsers(response.data);
    }
 
    const deleteUsers = async (id) => {
        await axios.delete(`https://3tqiqyjuzi.execute-api.sa-east-1.amazonaws.com/user/${id}`);
        getUsers();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => (
                        <tr key={ user.id }>
                            <td>{ index + 1 }</td>
                            <td>{ user.name }</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteUsers(user.id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}

export default UsersList;