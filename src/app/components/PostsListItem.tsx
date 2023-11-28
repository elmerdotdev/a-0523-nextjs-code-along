'use client'

import Link from 'next/link'
import React from 'react'

type PostItemProps = {
  id: string,
  title: string,
  content: string,
  published: boolean,
  onDelete: (id: string) => void,
  onPublish: (id: string, published: boolean) => void
}

const PostsListItem = ({ id, title, content, published, onDelete, onPublish }: PostItemProps) => {
  return (
    <div className="flex items-center gap-2 my-3">
      <div className="flex-1">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className={`${published ? 'text-green-500' : 'text-red-500'}`}>{published ? 'Published' : 'Not Published'}</div>
      </div>
      <div className="flex flex-col gap-1 w-24">
        <button onClick={() => onPublish(id, !published)} className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">{published ? 'Unpublish' : 'Publish'}</button>
        <Link href={`/view/${id}`} className="border border-zinc-900 text-zinc-900 px-2 py-1 text-center">View</Link>
        <button onClick={() => onDelete(id)} className="border border-zinc-900 text-white bg-red-500 px-2 py-1 text-center">DELETE</button>
      </div>
    </div>
  )
}

export default PostsListItem