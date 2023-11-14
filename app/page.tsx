import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-green-200 text-2xl flex flex-col items-center justify-center p-4'>
      <h1 className='font-bold text-2xl flex items-center justify-center p-4'>Next.js Workshop 🤩</h1>
      <div>
        <Link href="/posts" className='m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Posts
        </Link>
        <Link href="/admin" className='m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Admin
        </Link>
      </div>
    </div>
  )
}
