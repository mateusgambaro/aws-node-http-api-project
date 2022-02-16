import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddUser = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('https://3tqiqyjuzi.execute-api.sa-east-1.amazonaws.com',{
            name: name,
        });
        navigate("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveUser }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddUser;