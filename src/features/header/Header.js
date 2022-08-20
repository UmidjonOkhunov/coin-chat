import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { logout } from "../user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link as L, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { ButtonBase } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <ButtonBase onClick={() => navigate(routes.HOME)}>
            <Typography variant="h6" color="inherit" noWrap>
              ChatItOut
            </Typography>
          </ButtonBase>
          <Box sx={{ flexGrow: 1 }} />
          <nav>
            {isLoggedIn && (
              <ButtonBase
                component={L}
                variant="button"
                color="text.primary"
                sx={{ my: 1, mx: 1.5 }}
                to={routes.CONVERSATIONS}
              >
                <Typography variant="body1">Messages</Typography>
              </ButtonBase>
            )}
          </nav>
          {isLoggedIn ? (
            <Button
              onClick={() => dispatch(logout())}
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => navigate(routes.LOGIN)}
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
