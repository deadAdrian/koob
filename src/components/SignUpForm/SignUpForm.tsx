"use client";

import { css } from "@emotion/css";
import StyledSignUpForm from "./styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { emailValidation } from "@/constants/appRegExp";
import { Button, TextField} from "@mui/material";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface Props {
  setCurrentPage: Dispatch<SetStateAction<"login" | "landingPage" | "signup">>
}

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

type VisiblePasswords = {
  password: boolean;
  confirmPassword: boolean;
};

export default function SignUpForm({setCurrentPage}: Readonly<Props>) {
  const [signup, setSignup] = useState<Inputs>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState<VisiblePasswords>({
    password: false,
    confirmPassword: false,
  });
  const {
    trigger,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    mode: "all",
    reValidateMode: "onBlur",
    defaultValues: signup,
  });
  const router = useRouter();

  useEffect(() => {
    if(signup.confirmPassword){
      trigger('confirmPassword');
    }
  }, [signup.password, signup.confirmPassword]);

  return (
    <section
      className={css`
        ${StyledSignUpForm()}
      `}
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Required field" },
          pattern: {
            value: emailValidation,
            message: "Invalid email",
          },
        }}
        render={({ field: { onChange, onBlur, ref } }) => (
          <TextField
            type="email"
            inputRef={ref}
            value={signup.email}
            fullWidth={true}
            label="Email"
            helperText={errors?.email?.message ?? " "}
            error={!!errors?.email?.message}
            onChange={(e) => {
              setSignup({ ...signup, email: e.target.value });
              onChange(e.target.value);
            }}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: { value: true, message: "Required field" } }}
        render={({ field: { onChange, onBlur, ref } }) => (
          <TextField
            inputRef={ref}
            value={signup.password}
            fullWidth={true}
            type={passwordVisible.password ? "text" : "password"}
            label="Password"
            helperText={errors?.password?.message ?? " "}
            error={!!errors?.password?.message}
            InputProps={{
              endAdornment: passwordVisible.password ? (
                <VisibilityOffIcon
                  color="primary"
                  onClick={() => {
                    setPasswordVisible({ ...passwordVisible, password: false });
                  }}
                />
              ) : (
                <VisibilityIcon
                  color="primary"
                  onClick={() => {
                    setPasswordVisible({ ...passwordVisible, password: true });
                  }}
                />
              ),
            }}
            onChange={(e) => {
              setSignup({ ...signup, password: e.target.value });
              onChange(e);
              if(signup.confirmPassword){
                trigger("confirmPassword");
              }
            }}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        rules={{ validate: {
          required: (value: string) => {
            if(value !== signup.password)
              return "Passwords do not match"
          }
        } }}
        render={({ field: { onChange, onBlur, ref } }) => (
          <TextField
            inputRef={ref}
            value={signup.confirmPassword}
            fullWidth={true}
            type={passwordVisible.confirmPassword ? "text" : "password"}
            label="Confirm password"
            helperText={errors?.confirmPassword?.message ?? " "}
            error={!!errors?.confirmPassword?.message}
            InputProps={{
              endAdornment: passwordVisible.confirmPassword ? (
                <VisibilityOffIcon
                  color="primary"
                  onClick={() => {
                    setPasswordVisible({ ...passwordVisible, confirmPassword: false });
                  }}
                />
              ) : (
                <VisibilityIcon
                  color="primary"
                  onClick={() => {
                    setPasswordVisible({ ...passwordVisible, confirmPassword: true });
                  }}
                />
              ),
            }}
            onChange={(e) => {
              setSignup({ ...signup, confirmPassword: e.target.value });
              onChange(e);
            }}
            onBlur={onBlur}
          />
        )}
      />
      <div
            className="form-buttons-div"
          >
              <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth={true} 
                  size="large"
                  onClick={async () => {
                      const isFormCorrect = await trigger(undefined, {shouldFocus: true});
                      if(isFormCorrect){
                        setCurrentPage('login');
                      }
                  }}
              >
                  Register
              </Button>
          </div>
    </section>
  );
}
