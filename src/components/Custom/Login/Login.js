import "./Login.scss";

import { useState } from "react";
import {
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function loginHandler(event) {
    event.preventDefault();

    setLoading(true);

    setTimeout(() => {
      props.onLogin(email, password);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__header">
          <span className="login__title">Log in</span>
          <button className="login__button">
            <CloseIcon />
          </button>
        </div>
        <form className="login__form">
          <FormControl fullWidth>
            <InputLabel htmlFor="input-email">E-mail</InputLabel>
            <OutlinedInput
              id="input-email"
              label="E-mail"
              required
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="input-password">Password</InputLabel>
            <OutlinedInput
              id="input-password"
              label="Password"
              required
              type={showPassword ? "text" : "password"}
              variant="outlined"
              onChange={(event) => setPassword(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <LoadingButton
            loading={loading}
            onClick={loginHandler}
            variant="contained"
            className="login__button--submit"
          >
            Login
          </LoadingButton>
        </form>
      </div>
    </div>
  );
}

export default Login;
