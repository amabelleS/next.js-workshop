import BackBtn from "@/components/backBtn"
import { wait } from "@/lib/utils"
import Link from "next/link"

export default async function AnalyricsPage() {
    await wait(3500)
    const data: any = await fetch('https://jsonplaceholder.typicode.com/comments', {
        next: { revalidate: 10 },
    })
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    const comments = await data.json()

    return (
    <>
    <h2 className="custom-header2">Analytics Page</h2>
    {/* <BackBtn/> */}
    <ul className="text-green-600 flex flex-col items-center justify-around gap-2">
        {comments.slice(0, 10).map((comment: any) => {
            return (
                <li key={comment.id} className="p-4 border-green-200 border-2 flex flex-col items-center justify-center">
                    <h3 className="font-bold capitalize border-b-2 border-green-600">{comment.name}</h3>
                    <p className="mt-2 text-green-300">{comment.body}</p>
                </li>
            )
        })}
    </ul>
    </>
    )
}
