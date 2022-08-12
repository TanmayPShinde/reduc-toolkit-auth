import { Button, Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PersonAdd, Login, Logout } from "@mui/icons-material";
import { logout, reset } from "../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Stack justifyContent="flex-start">
            <Link to="/">Auth Practice</Link>
          </Stack>
        </Grid>
        <Grid item xs={8} style={{ paddingInlineEnd: "5rem" }}>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            {user ? (
              <Button onClick={onLogout}>
                <Logout /> Logout
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Login /> Login
                </Link>
                <Link to="/register">
                  <PersonAdd /> Register
                </Link>
              </>
            )}
          </Stack>
        </Grid>
      </Grid>
      <hr />
    </>
  );
}

export default Navbar;
