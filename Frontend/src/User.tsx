import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

interface Props {}

function User(props: Props) {
  const {} = props;
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get("https://randomuser.me/api/");

      const data = await res.data;

      setCurrentUser(data);
    };

    apiCall();
    console.log(currentUser);
  });
  return (
    <div>
      <h1>User!</h1>
    </div>
  );
}

export default User;
