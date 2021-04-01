import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'
const APP_ID = '6065e0160368d94693355197'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const fetchTodos = async () => {
        const response = await axios.get(`${baseURL}/post`, { headers: { 'app-id': APP_ID } })
        setPosts(response.data.data)
        console.log(response.data)

    }

    useEffect(fetchTodos, [])

    return (
        <>
        <div className="post-bg">
            <h1>Dummy Posts</h1>
            {
                posts.map(item => {
                    return (
                        <>
                            <div className="manu card post-bg">
                                <div>

                                <p>Post:{item.text}</p>
                                <img 
                                src={item.image}
                                class="rounded float-start"
                                 />
                                <p>Likes:{item.likes}</p>
                                <Link key={item.id} href={`/post/${item.id}`} class="img-fluid" ><button class="btn btn-danger btn-sm">Go to this post</button></Link><br/><br/><br/>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </>
    )
}

export default Posts
