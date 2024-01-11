import React, { useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  function onChangeSearchValue(event) {
    setSearchValue(event.target.value);
  }

  function onClickInvite(id) {
    invites.includes(id)
      ? setInvites((prev) => prev.filter((_id) => _id !== id))
      : setInvites((prev) => [...prev, id]);
    setUsers(users.filter((_id) => _id !== id));
  }

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          onClickInvite={onClickInvite}
          invites={invites}
          setSuccess={setSuccess}
        />
      )}
    </div>
  );
}

export default App;
