import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { userData } from "../../mock/user-mock";
import { useNavigate } from "react-router-dom";
import { IUser } from "./model";

const User = () => {
  const navigate = useNavigate();
  const id = useId();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: Number(id),
      name: "",
      surname: "",
      email: "",
      password: "",
    },
  });

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  const handleOnSumbit = (data: IUser) => {
    userData.push(data);
  };

  const errorStyle = {
    color: "red",
  };
  const inputStyle = {
    marginBottom: 15,
  };
  const cardStyle = {
    padding: 50,
    margin: 141,
  };

  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 600 }}>
      <Button type="submit" variant="outlined" color="error" onClick={logout}>
        Logout
      </Button>
      <Paper style={cardStyle}>
        <Grid container>
          <form onSubmit={handleSubmit(handleOnSumbit)}>
            <h2
              style={{
                fontSize: 30,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              User Create
            </h2>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Name is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write name here"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.name?.message}</span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="surname"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Surname is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write surname here"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.surname?.message}</span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: `Email should accept  "@" symbol`,
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write email address here"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.email?.message}</span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum length should be 6",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write password here"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.password?.message}</span>
              </FormControl>
            </Grid>
            <Button type="submit" variant="contained" style={{ width: "100%" }}>
              Create user
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default User;
