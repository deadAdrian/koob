import { css } from "@emotion/css";
import  { Button, TextField, useTheme } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm, Controller } from "react-hook-form"
import { emailValidation } from "@/constants/appRegExp";
import { StyledLoginForm } from "./styles";
import { useState } from "react";

type Inputs = {
    email: string,
    password: string
}

export default function LoginForm(){
    const theme = useTheme();
    const [login, setLogin] = useState<Inputs>({email: '', password: ''});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const{
        trigger,
        formState: {errors},
        control,
    } = useForm<Inputs>({mode: 'all', reValidateMode: "onBlur", defaultValues: login});

    return (
        <section
          className={css`
            ${StyledLoginForm(theme)}
          `}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: {value: true, message: 'Required field'},
              pattern: {
                value: emailValidation,
                message: 'Invalid email'
              }
            }}
            render={({field: {onChange, onBlur, ref}}) => (
              <TextField
                type="email"
                inputRef={ref}
                value={login.email} 
                fullWidth={true} 
                label="Email"
                helperText={errors?.email?.message ?? ' '}
                error={!!errors?.email?.message}
                onChange={(e) => {
                  setLogin({...login, email: e.target.value});
                  onChange(e.target.value);
                }}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{required: {value: true, message: 'Required field'}}}
            render={({field: {onChange, onBlur, ref}}) => (
              <TextField 
                inputRef={ref}
                value={login.password}
                fullWidth={true}
                type={passwordVisible ? 'text' : 'password'}
                label="Password"
                helperText={errors?.password?.message ?? ' '}
                error={!!errors?.password?.message}
                InputProps={{
                  endAdornment: (
                    passwordVisible
                      ? <VisibilityOffIcon color="primary" onClick={() => {
                        setPasswordVisible(false);
                      }}/>
                      : <VisibilityIcon color="primary" onClick={() => {
                        setPasswordVisible(true);
                      }}/>
                  )
                }}
                onChange={(e) => {
                  setLogin({...login, password: e.target.value});
                  onChange(e);
                }}
                onBlur={onBlur}
              />
            )}
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
                      trigger(undefined, {shouldFocus: true});
                  }}
              >
                  Log in
              </Button>
              <Button variant="outlined" color="primary" fullWidth={true} size="large">Sign up</Button>
          </div>
      </section>
    )
}