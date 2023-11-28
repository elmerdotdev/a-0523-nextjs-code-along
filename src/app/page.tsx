import React from 'react'
import PostsList from './components/PostsList'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Posts - Homepage',
  description: 'This is the posts homepage'
}

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>All Posts</h1>
        <Link href="/add" className="border border-zinc-900 bg-zinc-900 hover:bg-white text-white px-2 hover:text-zinc-900 py-1 text-center">Add New</Link>
      </div>
      <PostsList />
    </div>
  )
}

export default page