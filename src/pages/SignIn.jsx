import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Form} from 'react-final-form';
import {TextField} from 'mui-rff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {ARRAY_ERROR} from 'final-form'
import {Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link} from "@mui/material";
import {login, logout} from "../asyncActions/auth";
import {clearLoginFormAction} from "../store/loginFormReducer";
import Typography from "@mui/material/Typography";
import {Link as ALink} from "react-router-dom";


let LoginForm = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.data)

    useEffect(() => {
    }, [auth])

    const validate = values => {
        const errors = {auth: {}};
        if (values && values.auth && !values.auth.email) {
            errors.auth.email = 'Обязательное';
        }
        if (values && values.auth && !values.auth.password) {
            errors.auth.password = 'Обязательное';
        }

        return errors;
    };

    const formFields = [
        {
            size: 12,
            field: (
                <TextField
                    autoFocus
                    label="Email адрес"
                    id="auth.email"
                    name="auth.email"
                    type="text"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    required={true}
                />
            ),
        },
        {
            size: 12,
            field: (
                <TextField
                    label="Пароль"
                    id="auth.password"
                    name="auth.password"
                    type="text"
                    margin="dense"
                    fullWidth
                    variant="outlined"
                    required={true}
                />
            ),
        }
    ]
    console.log(auth)


    return <Form
        initialValues={auth}
        validate={validate}
        onSubmit={(values, form) => {
            console.log("asd")
            const auth = values.auth
            console.log('auth2', auth)
            dispatch(login(auth))

            console.log(ARRAY_ERROR)

            dispatch(clearLoginFormAction())
            form.resetFieldState('auth.email')
            form.resetFieldState('auth.password');
        }}
        clearForm={() => {

        }}

        render={({handleSubmit, pristine, form, submitting, values, clearForm}) => (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Вход в систему
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container alignItems="flex-start" spacing={2}>
                            {formFields.map((item, idx) => (
                                <Grid item xs={item.size} key={idx}>
                                    {item.field}
                                </Grid>
                            ))}
                            <Grid item style={{marginTop: 8}}>

                            </Grid>
                        </Grid>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомнить меня"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={submitting}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Button onClick={() => {
                            dispatch(logout())
                        }}>
                            EXIT
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <ALink to="#">
                                    <Link variant="body2">
                                        Забыли пароль?
                                    </Link>
                                </ALink>
                            </Grid>
                            <Grid item>
                                <ALink to="/signup">
                                    <Link  variant="body2">
                                        {"Нет аккаутна? Зарегистрироваться"}
                                    </Link>
                                </ALink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>

        )}
    />
}

export default LoginForm