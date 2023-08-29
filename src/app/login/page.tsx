"use client"
import { useState, ReactNode, MouseEvent } from "react";
import Link from "next/link";

import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";

import { styled, useTheme } from "@mui/material/styles";

import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "@/hooks/useAuth";

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
}));

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    maxWidth: 400,
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 450,
  },
}));


const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  password: "admin",
  email: "admin@paper.com",
};

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  	const [showPassword, setShowPassword] = useState<boolean>(false);
	
	const auth = useAuth();
	const {
		control,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		mode: "onBlur",
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		const { email, password } = data;
		console.log(email, password);
		alert(email);
	};
  return (
    <Box className="content-right">
      <RightWrapper>
        <Box
          sx={{
            p: 7,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.paper",
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: "flex",
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  ml: 2,
                  lineHeight: 1,
                  fontWeight: 700,
                  fontSize: "1.5rem !important",
                }}
              >
                Login
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography variant="body2">
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label="Email"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder="admin@materialize.com"
                    />
                  )}
                />
                {errors.email && (
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors.email.message}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel
                  htmlFor="auth-login-v2-password"
                  error={Boolean(errors.password)}
                >
                  Password
                </InputLabel>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label="Password"
                      onChange={onChange}
                      id="auth-login-v2-password"
                      error={Boolean(errors.password)}
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {/* <Icon
                              icon={
                                showPassword
                                  ? "mdi:eye-outline"
                                  : "mdi:eye-off-outline"
                              }
                              fontSize={20}
                            /> */}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: "error.main" }} id="">
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{
                  mb: 4,
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body2"
                  component={Link}
                  href="/forgot-password"
                  sx={{ color: "primary.main", textDecoration: "none" }}
                >
                  Forgot Password?
                </Typography>
              </Box>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ mb: 7 }}
              >
                Login
              </Button>
              <Divider
                sx={{
                  "& .MuiDivider-wrapper": { px: 4 },
                  mt: (theme) => `${theme.spacing(5)} !important`,
                  mb: (theme) => `${theme.spacing(7.5)} !important`,
                }}
              >
                or
              </Divider>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  );
};

export default LoginPage;