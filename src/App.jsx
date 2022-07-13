import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import usersData from "./users.json";

function App() {
  const [users, setUsers] = useState(usersData);

  const [search, setSearch] = useState("");

  const [isStudent, setIsStudent] = useState(false);

  const [isTeacher, setIsTeacher] = useState(false);

  const [city, setCity] = useState(["Berlin", "Paris", "Lisbon"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount([newMovie, ...movies]);
    // // reset the input fields
    // setTitle("");
    // setDirector("");
    // setRating(0);
    // setHasOscars(false);
  };

  const isStudentHandle = (event) => {
    setIsStudent(event.target.checked);
  };

  const isTeacherHandle = (event) => {
    setIsTeacher(event.target.checked);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChangeCity = (e) => {
    setCity([e.target.value]);
    // console.log(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    if (isStudent && user.role !== "student") {
      return false;
    }

    if (isTeacher && user.role !== "teacher") {
      return false;
    }

    if (!city.includes(user.campus)) {
      return false;
    }
    return (
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>IronBook</h2>

      <form onSubmit={handleSubmit}>
        {/* this is an example how to call setState directly in onChange */}
        <input type="text" value={search} onChange={handleSearchChange} />

        <label htmlFor="">Student</label>
        <input type="checkbox" checked={isStudent} onChange={isStudentHandle} />

        <label htmlFor="">Teacher</label>
        <input type="checkbox" checked={isTeacher} onChange={isTeacherHandle} />
        {/* <button type="submit">Add this movie</button> */}

        <lable for="">Choose a Campus:</lable>
        <select onChange={(e) => handleChangeCity(e)}>
          <option value="Lisbon">Lisbon</option>
          <option value="Berlin">Berlin</option>
          <option value="Paris">Paris</option>
        </select>
      </form>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => {
              return (
                <tr className="tblrow">
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                  <td>{user.linkedin ? "true" : "false"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
