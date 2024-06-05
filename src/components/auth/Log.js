import React, { useState } from "react";
import axios from "axios";
import { isAuthenticated, setAuthentification } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../App/AuthSlice";
import Navigation from "../Navigation";

const Log = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handelSubmit = async () => {
    await axios
      .post("http://localhost:4000/api/login", { ...values })
      .then((res) => {
        console.log("test:", res);
        setAuthentification(res.data.found, res.data.token);
        setUser(res.data.found);
        console.log(isAuthenticated().role);
        if (isAuthenticated() && isAuthenticated().role === "admin") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ backgroundColor: "" }}>
      <Navigation />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBlock: "50px",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "initial",
          }}
        >
          <label for="email">Email :</label>
          <input
            type="email"
            placeholder="email@agag.com"
            name="email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <label for="password">Password :</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <div>
            <input type="checkbox" name="password" />
            <label for="">save password</label>{" "}
          </div>
          <div
            style={{
              marginBlock: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={() => handelSubmit()}> Login</button>
          </div>
          <div
            style={{
              marginBlock: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <label for="create account">Don't have account?</label>
            <button
              style={{ borderStyle: "none", backgroundColor: "transparent" }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              {" "}
              create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Log;
