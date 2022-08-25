import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TextField from "@mui/material/TextField";
import {useForm} from "react-hook-form";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {editProfile} from "../asyncActions/profile";
import {Link as ALink} from "react-router-dom";

const theme = createTheme();

const ProfileEditForm = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)
    const REQUIRED = "Обязательно"

    let defaultValues = {
        firstname: profile.firstname,
        lastname: profile.lastname
    }

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm(
        {
            defaultValues
        }
    )

    useEffect(() => {
        reset(defaultValues)
    }, [profile])

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
        }
    ]

    const onSubmit = async data => {
        console.log(data)
        dispatch(editProfile(data))
    }

    return <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                    <Grid container alignItems="flex-start" spacing={2}>
                        {formFields.map((item, idx) => (
                            <Grid item xs={item.size} key={idx}>
                                {item.field}
                            </Grid>
                        ))}
                    </Grid>

                    <Button fullWidth type="submit" variant="contained" sx={{mt: 3, mb: 2}}>
                        Сохранить
                    </Button>

                    <Button fullWidth variant="contained" sx={{mt: 3, mb: 2}} component={ALink}
                            to="/users/profile/">
                        Отмена
                    </Button>


                </Box>
            </Box>
        </Container>
    </ThemeProvider>
}

export default ProfileEditForm