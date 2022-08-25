import './App.css';
import {
    Badge,
    Box,
    Container,
    createTheme,
    CssBaseline,
    Divider,
    IconButton,
    Link,
    List,
    styled,
    ThemeProvider,
    Toolbar,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';

import {mainListItems, secondaryListItems} from "./components/listItems";
import Posts from "./pages/Posts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import {useDispatch, useSelector} from "react-redux";
import Profile from "./pages/Profile";
import ProfileEditForm from "./pages/ProfileEditForm";
import {getProfile} from "./asyncActions/profile";


function Copyright(props) {
    return (

            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
    );
}


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function MenuIcon() {
    return null;
}

function ChevronLeftIcon() {
    return null;
}

function App() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const dispatch = useDispatch()

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            dispatch(getProfile())
        }
    })

    const firstname = useSelector(state => state.profile.firstname)
    const lastname = useSelector(state => state.profile.lastname)

    return (
        <BrowserRouter>
            <ThemeProvider theme={mdTheme}>
                <Box sx={{display: 'flex'}}>
                    <CssBaseline/>
                    <AppBar position="absolute" open={open}>
                        <Toolbar
                            sx={{
                                pr: '24px', // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && {display: 'none'}),
                                }}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{flexGrow: 1}}
                            >
                                {/*Dima Molodec Bud Kak Dima */}
                                {firstname} {lastname}
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                        <Toolbar
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                px: [1],
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </Toolbar>
                        <Divider/>
                        <List component="nav">
                            {mainListItems}
                            <Divider sx={{my: 1}}/>
                            {secondaryListItems}

                        </List>
                    </Drawer>
                    <Box component="main" sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar/>
                        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                            <Routes>
                                <Route path="/posts" element={<Posts />} />
                                <Route path="/users/profile" element={<Profile />} />
                                <Route path="/users/profile/edit" element={<ProfileEditForm />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/signin" element={<SignIn />} />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                            <Copyright sx={{pt: 4}}/>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
