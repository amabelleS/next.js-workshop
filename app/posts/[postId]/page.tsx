import React from 'react'

type Props = {
    params: {
        postId: string
    }
}

const getPostById = async (postId: any) => {
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
 return await res.json()
}

const page = async ({params: {postId}}: Props) => {
    const post = await getPostById(postId)
  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default page