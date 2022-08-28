import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminData } from "../../mock/admin-mock";
import { ILoginInfo } from "./model";

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const adminUserEmail = adminData
    ?.filter((item) => item.isAdmin === true)
    .map((item) => ({
      email: item.email,
      password: item.password,
    }));
  const handleOnSumbit = (data: ILoginInfo) => {
    localStorage.setItem("isAuth", "token");
    const isExist = adminData.find((item) => item.email === data.email);
    try {
      if (isExist) {
        const isAdmin = adminUserEmail?.map((item) => {
          const adminInfo = item.email === data.email;
          return adminInfo;
        });
        console.log(
          "🚀 ~ file: Login.tsx ~ line 34 ~ isAdmin ~ isAdmin",
          isAdmin[0]
        );
        if (isAdmin[0]) {
          navigate("/user-manage");
        } else {
          navigate("/list");
        }
      } else {
        alert("Wrong credentials");
      }
    } catch (error) {
      console.log("e", error);
    }
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
              Login
            </h2>
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
                      placeholder="Write email here"
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
              Login
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
