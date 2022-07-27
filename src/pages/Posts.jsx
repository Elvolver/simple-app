import React, {useState} from 'react';
import {Button, Grid, Paper} from "@mui/material";
import PostList from "../components/PostList";
import SimplePostForm from "../components/simpleForm";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';


const Posts = () => {
    const [id, setId] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Новый пост</DialogTitle>
                <SimplePostForm handleClose={handleClose}/>
            </Dialog>

            <Grid item xs={10} md={12} lg={9}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <h1 align="left">Список постов</h1>
                        </Grid>
                        <Grid item xs={4}>
                        <Button variant={'contained'} xs={2} md={2} lg={2}
                        onClick={handleClickOpen}>
                            Добавить
                        </Button>
                        </Grid>
                        <Grid item xs={12}>


                        <PostList handleClickOpen={handleClickOpen}
                        />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>


        </div>


    );
};

export default Posts;