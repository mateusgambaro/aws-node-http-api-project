import {  Route, Routes } from "react-router-dom";
import 'bulma/css/bulma.min.css';
import './App.css';
import UsersList from "./components/UsersList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route exact path="/" element={<UsersList/>}/>
            <Route exact path="/add" element={<AddUser/>}/>
            <Route exact path="/edit/:id" element={<EditUser/>}/>

          </Routes>
        </div>
      </div>
    </div>
  );
}
 
export default App;