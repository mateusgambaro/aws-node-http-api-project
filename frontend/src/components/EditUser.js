/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditUser = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateUser = async (e) => {
        e.preventDefault();
        await axios.put(`https://3tqiqyjuzi.execute-api.sa-east-1.amazonaws.com/user/${id}`,{
            name: name,
        });
        navigate("/");
    }
 
    useEffect(() => {
        getUserById();
    }, []);
 
    const getUserById = async () => {
        const response = await axios.get(`https://3tqiqyjuzi.execute-api.sa-east-1.amazonaws.com/user/${id}`);
        setName(response.data.name);
    }
 
    return (
        <div>
            <form onSubmit={ updateUser }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditUser;