import Comment from './comment'


const CommentList = ({ comments }) => {


  return (
    comments.map(comment => (
        <div key={comment._id} className=''>
            <Comment {...comment} />
        </div>
    ))
   
  )
}

export default CommentList