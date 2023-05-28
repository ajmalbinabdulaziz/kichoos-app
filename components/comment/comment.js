import React, { useState } from 'react'
import CommentList from './commentList'
import CommentForm from './commentForm'
import { FaEdit, FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa"
import { usePost } from '../../contexts/PostContext'
import { IconBtn } from './IconBtn'
import { useSession } from 'next-auth/react'
import Timeago from 'react-timeago';
import Image from "next/image";
import Avatar from '../Avatar'



const Comment = ({...comment }) => {

  const { data: session } = useSession()

  const [isEditing, setIsEditing] = useState(false)
  const [isReplying, setIsReplying] = useState(false)
  const [showReplies, setShowReplies] = useState(false)
  const { getReplies, post, deleteLocalComment } = usePost()


  const childComments = getReplies(comment?._id)

  const handleDelete = async (comment) => { 
    await fetch("/api/deleteComment", {
      method: "DELETE",
      body: comment._id,
    });    
    deleteLocalComment(comment._id)
  }

  return (
    <>
      <div className='border rounded-md'>
        
            <div key={comment._id} className='relative flex items-center space-x-2 space-y-1 pr-12'>

              {comment?.userImage ? (
                <div className='py-2  pl-2'>
                  <Image src={comment?.userImage} width={40} height={40} className="rounded-full" /> 
                </div>
              ) : (
                <div className='py-2 pl-2'>
                  <Avatar seed={comment?.user} />
                </div>
              )}

                <div className='yt-2' >

                  <div className='flex flex-col border border-gray-100 rounded-lg w-full bg-gray-100'>
                    <p className=' text-gray-400 '>
                        <span className=' text-gray-600 text-xs'>
                        {comment.user}
                        </span>
                        . <Timeago className="px-2 text-xs" date={comment._createdAt}  />
                    </p>

                    <p className="text-sm">{comment.message}</p>

                  </div>

                  {session &&
                  <div className='flex pt-1'>
                      <div className='px-8' >
                        <IconBtn
                            onClick={() => setIsReplying(prev => !prev)}
                            isActive={isReplying}
                            Icon={FaReply}
                        />
                        </div>
                      {(session?.user?.name === comment.user) &&
                        <div className='flex'>
                          <div className='px-8'>
                            <IconBtn
                                onClick={() => setIsEditing(prev => !prev)}
                                isActive={isEditing}
                                Icon={FaEdit}
                            />
                          </div>
                          <div className='px-8'>
                            <IconBtn
                                onClick={()=>{handleDelete(comment)}}
                                Icon={FaTrash}
                                aria-label="Delete"
                                color="danger"
                            />
                          </div>
                        </div>
                      }
                  </div>}

                </div>   

            </div>
            
      </div>

      {isEditing && <CommentForm isEditing editingToFalse={()=>setIsEditing(!isEditing)}             
        commentId={comment._id} initialValue={comment.message} />}
              
      {isReplying && <CommentForm  postId={post?._id} parentId={comment._id} isReplying replyingToFalse={()=>{setIsReplying(!isReplying)}}
        user={session?.user?.name} email={session?.user?.email} userImage={session?.user?.image}
      />}

      {childComments?.length > 0 && (
        <div>
          <hr className="w-96 mt-2 mx-auto border"/>
          <button className='ml-20 text-xs' onClick={()=>setShowReplies(!showReplies)}>
            {!showReplies ? `Show replies` : `Hide Replies`}
          </button>
          {showReplies && 
          <div className="pl-4 pb-2">
            <CommentList comments={childComments} />
          </div>
          }
        </div>

      )}  
    </>
  )
}

export default Comment