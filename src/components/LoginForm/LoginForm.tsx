import { css } from "@emotion/css";
import  { Button, TextField, useTheme } from "@mui/material";
import { useForm } from "react-hook-form"
import { emailValidation } from "@/constants/appRegExp";
import { StyledLoginForm } from "./styles";

type Inputs = {
    email: string,
    password: string
}

export default function LoginForm(){
    const theme = useTheme();

    const{
        register,
        trigger,
        formState: {errors},
    } = useForm<Inputs>();

    return (
        <section
          className={css`
            ${StyledLoginForm(theme)}
          `}
        >
          <TextField 
            fullWidth={true} 
            label="Email"
            helperText={errors?.email?.message ?? ' '}
            {...register("email",
              {
                required: {value: true, message: 'Required field'},
                pattern: {
                  value: emailValidation,
                  message: 'Invalid email'
                }
              }
            )}
            error={!!errors?.email?.message}
          />
          <TextField 
            fullWidth={true}
            type="password"
            label="Password"
            {...register("password", {required: {value: true, message: 'Required field'}})}
            helperText={errors?.password?.message ?? ' '}
            error={!!errors?.password?.message}
          />
          <div>
            <span className="forgot-password-span">
              Forgot password?
            </span>
          </div>
          <div
            className="form-buttons-div"
          >
              <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth={true} 
                  size="large"
                  onClick={() => {
                      trigger();
                  }}
              >
                  Log in
              </Button>
              <Button variant="outlined" color="primary" fullWidth={true} size="large">Sign up</Button>
          </div>
      </section>
    )
}