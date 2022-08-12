import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PersonAdd } from "@mui/icons-material";
import { Button, TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const { name, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert("<div style='color: red'>" + message + "</div>");
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, isError, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    if (name === "" || password === "") {
      alert("Please fill both the fields.");
    } else {
      const userData = {
        name,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <h1>
        <PersonAdd /> Register
      </h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          name="name"
          id="name"
          value={name}
          variant="standard"
          onChange={onChange}
        ></TextField>
        <TextField
          label="Password"
          name="password"
          id="password"
          value={password}
          variant="standard"
          onChange={onChange}
        ></TextField>
        <Button onClick={onSubmit}>Submit</Button>
      </Box>
    </>
  );
}

export default Register;
