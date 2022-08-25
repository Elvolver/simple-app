import * as React from 'react';
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import {Link as ALink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {checkEmail, signup} from "../asyncActions/auth";
import {EMAIL_PATTERN} from "../utils/patterns";

const theme = createTheme();
const REQUIRED = "Обязательно"

export default function SignUp() {
    const dispatch = useDispatch()

    const {
        register,
        setError,
        reset,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm()

    const onSubmit = async data => {
        console.log(data)
        let response = await dispatch(checkEmail(data))
        let result = await response.result
        console.log('result', result)
        if (result === false) {
            let registration = await dispatch(signup(data))
            if (registration) {
                reset()
            }
        } else {
            setError('email', {type: 'custom', message: 'Email уже зарегистрирован'});
        }
    }

    const formFields = [
        {
            size: 6,
            field: (
                <TextField
                    {...register('firstname', {
                        required: REQUIRED,
                        minLength: {
                            value: 2,
                            message: "Слишком короткое имя"
                        },
                        maxLength: {
                            value: 64,
                            message: "Слишком длинное имя"
                        }
                    })}
                    error={errors.firstname}
                    helperText={errors.firstname ? errors.firstname.message : " "}
                    autoComplete="firstname"
                    fullWidth
                    label="Имя"
                    autoFocus
                />
            )
        },
        {
            size: 6,
            field: (
                <TextField
                    {...register('lastname', {
                        required: REQUIRED
                    })}
                    error={errors.lastname}
                    helperText={errors.lastname ? errors.lastname.message : " "}
                    fullWidth
                    id="lastname"
                    label="Фамилия"
                    autoComplete="lastname"
                />
            )
        },
        {
            size: 12,
            field: (<TextField
                {...register('email', {
                    required: REQUIRED,
                    pattern: {
                        value: EMAIL_PATTERN,
                        message: 'Введите валидный email адрес',
                    },
                })}
                error={errors.email}
                helperText={errors.email ? errors.email.message : " "}
                fullWidth
                id="email"
                label="Email адрес"
                autoComplete="email"
            />)
        },
        {
            size: 12,
            field: (<TextField
                {...register('password', {
                    required: REQUIRED,
                    minLength: {
                        value: 6,
                        message: "Слишком короткий пароль"
                    },
                    maxLength: {
                        value: 64,
                        message: "Слишком длинный пароль"
                    }
                })}
                error={errors.password}
                helperText={errors.password ? errors.password.message : " "}
                fullWidth
                label="Пароль"
                type="password"
                id="password"
                autoComplete="password"
            />)
        },

    ]

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}><LockOutlinedIcon/></Avatar>
                    <Typography component="h1" variant="h5">Регистрация</Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            {formFields.map((item, idx) => (
                                <Grid item xs={item.size} key={idx}>
                                    {item.field}
                                </Grid>
                            ))}
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>
                            Зарегистрироваться
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link>
                                    <ALink to="/signin">
                                        Уже есть аккаунт? Войти
                                    </ALink>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}