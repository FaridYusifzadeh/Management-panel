import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { organizationData } from "../../mock/organization-mock";
import { IOrganization } from "./model";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      organization: "",
      phone: "",
      address: "",
      username: "",
      email: "",
      password: "",
      isAdmin: true,
    },
  });

  const handleOnSumbit = (data: IOrganization) => {
    organizationData.push(data);
    console.log(organizationData);
    navigate("/user-manage");
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
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
              Sign Up
            </h2>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="organization"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Organization name is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write organization name"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.organization?.message}</span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Phone number is required",
                    minLength: {
                      value: 12,
                      message: "Minimum length should be 12",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write phone number"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.phone?.message}</span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="address"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Address is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write address here"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.address?.message}</span>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Username is required",
                  }}
                  render={({ field }) => (
                    <TextField
                      placeholder="Write username"
                      onChange={field.onChange}
                      style={inputStyle}
                    />
                  )}
                />
                <span style={errorStyle}>{errors?.username?.message}</span>
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
                      placeholder="Write email address"
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
              Register
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignUp;
