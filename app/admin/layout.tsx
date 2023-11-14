import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Nir K. workshop',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='text-green-200 font-bold text-2xl flex flex-col items-center justify-center p-4'>
        <h2 className='p-4'>Admin Pages</h2>
        <section>
            <Link href="/admin/profile" className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Profile</Link>
            <Link href="/admin/settings" className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Settings</Link>
            <Link href="/" className='mr-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Home</Link>
        </section>
       {children}
    </div>
  )
}
