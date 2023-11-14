'use client'
import { useRouter } from "next/navigation"

export default function BackBtn() {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} className="m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Go Back
        </button>
    )
}