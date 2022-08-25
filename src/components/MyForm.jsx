import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {Link as ALink} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import {useForm} from "react-hook-form";

const theme = createTheme();

const MyForm = (props) => {

    const {
        handleSubmit
    } = useForm()


    return <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}><LockOutlinedIcon/></Avatar>
                <Typography component="h1" variant="h5">Регистрация</Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(props.onSubmit)} sx={{mt: 3}}>
                    <Grid container alignItems="flex-start" spacing={2}>
                        {props.formFields.map((item, idx) => (
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
}

export default MyForm