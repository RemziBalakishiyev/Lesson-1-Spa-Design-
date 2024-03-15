import React, { useEffect } from "react";
import Input from "../components/Reusable/Input";
import Button from "../components/Reusable/Button";
import styling from "../components/Authentications/Login.module.css";
import useForm from "../hooks/useForm";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const { login, isAuth } = useAuth();
  const navigate = useNavigate();

  const signInUser = (e) => {
    const { email, password } = values;
    if (!email || !password) return;
    login(email, password);
  };
  const { handleChange, values, handleSubmit } = useForm(
    { email: "", password: "" },
    signInUser
  );

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <form className={styling.login} onSubmit={handleSubmit}>
      <Input
        name='email'
        placeholder='email'
        type='email'
        onChange={handleChange}
      />
      <Input
        name='password'
        placeholder='password'
        type='password'
        onChange={handleChange}
      />
      <Button>Login</Button>
    </form>
  );
}

export default Login;
