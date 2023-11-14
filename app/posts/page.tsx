import BackBtn from "@/components/backBtn"

export default async function PostsPage () {
    const data: any = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 10 },
    })
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    const posts = await data.json()

    return (
        <>
            <h2 className="text-green-200 font-bold text-2xl flex items-center justify-center p-4">
                Posts Page
            </h2>
            <BackBtn/>
            <ul className="text-green-200 flex flex-col items-center justify-around p-4 gap-2">
                {posts.map((post: any) => {
                    return (
                        <li key={post.id} className="p-4 border-green-200 border-2 flex flex-col items-center justify-center">
                            <h3 className="font-bold capitalize border-b-2 border-green-200">{post.title}</h3>
                            <p className="mt-2 text-green-50">{post.body}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}