import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6065e0160368d94693355197'
const Post = () => {
    const router = useRouter()
    const { postId } = router.query
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState([])

    const fetchTodos = async () => {
        const response = await axios.get(`${baseURL}/post/${postId}`, { headers: { 'app-id': APP_ID } })
        const com = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })

        setPost(response.data)
        setComment(com.data.data)
        console.log(response.data)
        console.log(com.data)

    }

    useEffect(fetchTodos, [postId])

    return (<>
        {post !== null ? (
            <>
                <div className="body-gpa manu-1">
                    <h1>Post :{post.text}</h1>
                    <p>tags :{post.tags}</p>
                    <img src={post.image} />
                    <p>Likes :{post.likes}</p>
                    <p>Comments</p>{
                        comment.map(item => {
                            return (
                                <p>{item.owner.firstName} : {item.message}</p>

                            )
                        })}
                    <Link href="/post"><button>Back</button></Link>
                </div>
            </>
        ) : null}</>
    )
}

export default Post

