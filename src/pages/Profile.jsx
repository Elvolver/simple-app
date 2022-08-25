import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editAvatar, getProfile} from "../asyncActions/profile";
import {Link as ALink} from "react-router-dom";
import {Grid, TextField} from "@material-ui/core";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";

const Profile = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile)



    const onChange = async data => {
        const formData = new FormData();
        formData.append("file", data.file[0]);

        dispatch(editAvatar(formData))
        console.log(data)
        //await reset()
    }

    const {
        handleSubmit,
        register,
        reset
    } = useForm()

    return <div>
        <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
                {profile.firstname} {profile.lastname}
                <p><img src={"data:image/png;base64, " + profile.avatar} /></p>

            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" sx={{mt: 3, mb: 2}} component={ALink}
                        to="/users/profile/edit">
                    Редактировать
                </Button>
                <form>
                    <TextField type="file" {...register("file")} >
                        Изменить аватар
                    </TextField>
                    <Button onClick={handleSubmit(onChange)}>Загрузить</Button>
                </form>
            </Grid>
        </Grid>
    </div>
}

export default Profile;