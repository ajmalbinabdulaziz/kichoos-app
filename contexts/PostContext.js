import { useContext,createContext, useState, useEffect, useMemo, } from "react";
import { useRouter } from "next/router";
import { getPostDetails } from "../services";


const Context = createContext()

export function usePost(){
  return useContext(Context);
}

export default function AppStore({ children }){

  const router = useRouter();
  const { slug } = router?.query;


  const [post, setPost] = useState()
  const [comments, setComments] = useState()

  useEffect(() => {
    if(slug !== undefined){
      getPostDetails(slug).then(data => setPost(data))
    }
  }, [slug])

  useEffect(() => {
    if (post?.comments == null) return
    setComments(post?.comments)
  }, [post?.comments])

  const commentsByParentId = useMemo(() => {
  const group = {}
  comments?.forEach(comment => {
    group[comment?.parentId?._ref] ||= []
    group[comment?.parentId?._ref].push(comment)
  })
  return group
  }, [comments])


  const getReplies = (parentId) => {
    return commentsByParentId[parentId]
  }

  function createLocalComment(comment) {
    setComments(prevComments => {
      return [ ...prevComments, comment]
    })
  }

  function updateLocalComment(id, message) {
    setComments(prevComments => {
      return prevComments.map(comment => {
        if (comment._id === id) {
          return { ...comment, message }
        } else {
          return comment
        }
      })
    })
  }

  function deleteLocalComment(id) {
    setComments(prevComments => {
      return prevComments.filter(comment => comment._id !== id)
    })
  }

  return(
    <Context.Provider value={{
        getReplies,
        comments,
        rootComments: commentsByParentId[undefined],
        post, slug,
        commentsByParentId,
        createLocalComment,
        updateLocalComment,
        deleteLocalComment,
      }}
    >
      {children}
    </Context.Provider>
  )

}

