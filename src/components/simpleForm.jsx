import {addPost, editPost} from "../asyncActions/posts";
import {clearPostFormAction} from "../store/postFormReduser";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Form} from 'react-final-form';
import {TextField} from 'mui-rff';

import DialogActions from '@mui/material/DialogActions';
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from '@mui/material/DialogContent';
import { ARRAY_ERROR } from 'final-form'
import {Button, Grid} from "@mui/material";


let SimplePostForm = (props) => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.post.data)

    useEffect(() => {
    }, [post])

    const validate = values => {
        const errors = {post: {}};
        if (values && values.post && !values.post.title) {
            errors.post.title = 'Обязательное';
        }
        if (values && values.post && !values.post.description) {
            errors.post.description = 'Обязательное';
        }

        return errors;
    };

    const formFields = [
        {
            size: 12,
            field: (
                <TextField
                    autoFocus
                    label="Заголовок"
                    id="post.title"
                    name="post.title"
                    type="text"
                    margin="dense"
                    fullWidth
                    variant="standard"
                    required={true}
                />
            ),
        },
        {
            size: 12,
            field: (
                <TextField
                    label="Описание"
                    id="post.description"
                    name="post.description"
                    type="text"
                    margin="dense"
                    fullWidth
                    variant="standard"
                    required={true}
                />
            ),
        }
    ]
    console.log(post)


    return <Form
        initialValues={post}
        validate={validate}
        onSubmit={(values, form) => {
            console.log("asd")
            const post = values.post
            if (post && (post.id === null || post.id === undefined)) {
                console.log(post)
                dispatch(addPost(post))
            } else {
                dispatch(editPost(post))
            }

            console.log(ARRAY_ERROR)
            props.handleClose()

            dispatch(clearPostFormAction())
            form.resetFieldState('post.title')
            form.resetFieldState('post.description');
        }}
        clearForm={() => {
            props.handleClose()
        }}

        render={({handleSubmit, pristine, form, submitting, values, clearForm}) => (
            <form onSubmit={handleSubmit} noValidate>
                <DialogContent>

                    <Grid container alignItems="flex-start" spacing={2}>
                        {formFields.map((item, idx) => (
                            <Grid item xs={item.size} key={idx}>
                                {item.field}
                            </Grid>
                        ))}
                        <Grid item style={{marginTop: 16}}>

                        </Grid>
                        <Grid item style={{marginTop: 16}}>


                        </Grid>
                    </Grid>
                    <DialogContentText>
                        Напишите что-нибудь.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        type="button"
                        variant="contained"
                        onClick={form => clearForm(form)}
                        disabled={submitting}
                    >
                        Отмена
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting}
                    >
                        Сохранить
                    </Button>
                </DialogActions>

            </form>

        )}
    />
}

export default SimplePostForm