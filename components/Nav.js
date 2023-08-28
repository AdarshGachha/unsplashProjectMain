"use client"
import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div>
        
        <Link href="/home/timeline">Timeline</Link>

        <br />
        <Link href="/home/posts">Posts</Link>


    </div>
  )
}

export default Nav