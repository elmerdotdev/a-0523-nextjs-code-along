import React from 'react'
import prisma from '@/db'
import Link from 'next/link'

const page = async ({ params }: { params: { id: string } }) => {
  const post = await prisma.post.findUnique({ where: { id: params.id }})

  return (
    <>
      <div className="flex justify-center items-center bg-black bg-opacity-60 p-5 fixed top-0 left-0 h-full">
        <div className="bg-white p-3">
          <div>
            <h1>{post?.title}</h1>
            <p>{post?.content}</p>
            <div>Status: {post?.published ? 'Published' : 'Not Published'}</div>
          </div>
          <Link href=".." className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">Close</Link>
        </div>
      </div>
    </>
  )
}

export default page