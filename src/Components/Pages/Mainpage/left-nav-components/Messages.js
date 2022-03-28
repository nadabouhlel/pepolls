import React from 'react'
import PostCard from '../PostCard'
import MessageNav  from '../MessagesComponents/MessageNavbar/MessageNav'

function Messages() {
  return (
    <>
    <MessageNav />
    <div className='trends-feed'>
<PostCard />
<PostCard />
</div>
</>
  )
}

export default Messages