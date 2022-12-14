import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { useSelector, useDispatch } from "react-redux";
import { signupAsync, authAsync } from "../user/userSlice";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
  const isAuth = useSelector((state) => state.user.authStatus);
  const public_key = useSelector((state) => state.user.public_key);
  const dispatch = useDispatch();
  const [key, setKey] = React.useState("");

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate(routes.CONVERSATIONS);
    }
  }, [isLoggedIn, navigate]);

  React.useEffect(() => {
    setKey(public_key);
  }, [public_key]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      await dispatch(
        signupAsync({
          public_key: data.get("public_key"),
          username: data.get("username"),
          password: data.get("password"),
        })
      );
      navigate(routes.CONVERSATIONS);
    } catch (err) {
      console.log("Sign-up Failed: ", err);
      navigate(routes.LOGIN);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="public_key"
                  label="Public Key"
                  name="public_key"
                  autoComplete="text"
                  autoFocus
                  value={key}
                  onChange={(evt) => {
                    setKey(evt.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  onClick={() => {
                    dispatch(authAsync());
                  }}
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      checked={isAuth}
                    />
                  }
                  label="Verify your public key"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="text"
                  autoFocus
                  disabled={!isAuth}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  disabled={!isAuth}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isAuth}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to={routes.LOGIN} variant="body2">
                  Already have an account? Sign in
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
