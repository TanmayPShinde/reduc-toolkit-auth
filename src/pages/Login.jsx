import { useState, useEffect } from "react";
import { Login as LoginIcon } from "@mui/icons-material";
import { Button, TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

function Login() {
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
      alert(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

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

      dispatch(login(userData));
    }
  };

  return (
    <>
      <h1>
        <LoginIcon /> Login
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

export default Login;
