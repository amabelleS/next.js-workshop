import BackBtn from "@/components/backBtn"
import { wait } from "@/lib/utils"
import Link from "next/link"

export default async function UsersPage() {
    await wait(2000)
    const data: any = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate: 10 },
    })
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    const users = await data.json()

    return (
    <>
      <h2 className="custom-header2">Users Page</h2>
      <ul className="text-green-600 flex flex-col items-center justify-around gap-2">
        {users.map((user: any) => {
            return (
                <li key={user.id} className="p-4 border-green-200 border-2 flex flex-col items-center justify-center">
                    <h3 className="font-bold capitalize border-b-2 border-green-600">{user.name}</h3>
                    <p className="mt-2 text-green-100">{user.email}</p>
                    <Link href={user.website} passHref={true}>website</Link>
                </li>
            )
        })}
      </ul>
    </>
    )
  }