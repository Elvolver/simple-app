import React, {useEffect} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {getPosts, removePost} from "../asyncActions/posts";
import {useDispatch, useSelector} from "react-redux";
import {postLoadAction} from "../store/postFormReduser";
import {Edit} from "@mui/icons-material";

const PostList = (props) => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    const postRemoveHandle = (id) => {
        dispatch(removePost(id))
    }
    const postEditHandle = (id, title, description) => {
        props.handleClickOpen()
        const post = {"id": id, "title": title, "description": description}
        console.log("postEditHandle")
        dispatch(postLoadAction(post))
    }
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return <div>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table" stickyHeader={true}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">Название</TableCell>
                        <TableCell align="left">Описание</TableCell>
                        <TableCell align="left">Автор</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post, index) => {
                            return <TableRow
                                key={index}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left">{post.id}</TableCell>
                                <TableCell align="left">{post.title}</TableCell>
                                <TableCell align="left">{post.description}</TableCell>
                                <TableCell align="left">{post.author && post.author.userProfile ? `${post.author.userProfile.firstName} ${post.author.userProfile.lastName}` : "=)"}</TableCell>
                                <TableCell align="center" width={40} m={0} p={0}>
                                    <Button onClick={() => postEditHandle(post.id, post.title, post.description)}
                                            variant="outlined"

                                    >
                                        <Edit/>
                                    </Button>
                                </TableCell>
                                <TableCell align="center" width={40}>
                                    <Button onClick={() => postRemoveHandle(post.id)} variant="outlined">
                                        <DeleteIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>

    </div>;
}

export default PostList;