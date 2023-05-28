import { useState } from "react"
import { usePost } from "../../contexts/PostContext";
import { v4 as uuid } from 'uuid'



const CommentForm = ({ postId, commentId, parentId, user, email, userImage, autoFocus=false, 
  isReplying, isEditing, editingToFalse, replyingToFalse, initialValue="" }) => {

    const [userComment, setUserComment] = useState(initialValue);
    const { post, createLocalComment, updateLocalComment } = usePost()

    const id = uuid()
    const d_id = uuid()
    // const postId = post?._id
    // console.log(`postID>> ${postId}`)
    // console.log(`commentId>> ${commentId}`)

    const localComment = ()=> {
      createLocalComment({
        postId,
          _id: id,
          post: {
            _type: "reference",
            _ref: postId,
          },
          message: userComment,
          parentId:{ _ref: parentId, _type: "reference" }, 
          user, 
          email,
          userImage,         
      })
      setUserComment("");
    }

    const handleCommentSubmit = async (e) => {
      e.preventDefault();
        
      await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify({
          _id: id,
          postId,
          post: {
            _type: "reference",
            _ref: postId,
          },
          message: userComment,
          parentId, 
          user, 
          email,
          userImage,         
        }),
      });          
      localComment()
    }

    const handleReplySubmit = async (e) => {
      e.preventDefault();
      replyingToFalse()           

        
      await fetch("/api/createReply", {
        method: "POST",
        body: JSON.stringify({
          _id: id,
          postId,
          post: {
            _type: "reference",
            _ref: postId,
          },
          message: userComment,
          parentId, 
          user, 
          email,
          userImage,         
        }),
      });          
      localComment()
    }

      const handleCommentUpdate = async (e) => {
        e.preventDefault();
          
        await fetch("/api/updateComment", {
          method: "PUT",
          body: JSON.stringify({ 
            commentId,          
            message: userComment,
          }),
        });     
        updateLocalComment(commentId, userComment)
        console.log(`>>>> ${commentId, userComment}`)
        setUserComment("");
        editingToFalse()
      }

    const handleChangeComment = (e) => {
        e.preventDefault();
        setUserComment(e.target.value);
    };

    return (
        <form className='flex flex-col space-y-2'>
            <input 
                autoFocus={autoFocus}
                className="w-72 h-12 border p-4 border-blue-100"
                type="text"
                value={userComment}
                placeholder="Comment here.."
                onChange={handleChangeComment}
            />

            {isEditing ? 
                (
                    <button
                    className="focus:outline-none focus:ring focus:border-blue-800
                    px-6 py-2 m-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
                    font-semibold"
                    onClick={handleCommentUpdate}
                    on
                    >
                        Update
                    </button>      
                ) : isReplying ? (
                    <button
                      className="focus:outline-none focus:ring focus:border-blue-800
                      px-6 py-2 m-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
                      font-semibold"
                      onClick={handleReplySubmit}
                    >
                      Reply
                    </button>
                ):(
                <button
                    className="focus:outline-none focus:ring focus:border-blue-800
                    px-6 py-2 m-2 rounded-xl bg-blue-500 text-blue-50 hover:bg-blue-800 
                    font-semibold"
                    onClick={handleCommentSubmit}
                    >
                      Submit
                </button>  
                )
                
            }
        </form>
    )
}


export default CommentForm