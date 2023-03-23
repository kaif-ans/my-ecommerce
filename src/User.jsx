import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function User() {
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/");
  }
  
  return (
    <div className="user-pg">
      <p>Welcome User </p>
      {/* <br /> */}
      <p>You are logged in.</p>
      <Button variant="contained" size="large" onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
}

export default User;
