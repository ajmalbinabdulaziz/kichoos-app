// import { useSession, signIn, signOut } from "next-auth/react"
import { createClient } from "next-sanity"


export const sanityClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-05-20",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
  });

export default async function updateComment(req, res) {
    console.log(req.body)
  switch (req.method){
    case "PUT":
      const { commentId, message } = JSON.parse(req.body)

        try {
            await sanityClient.patch( commentId ).set({ message }).commit();
        } catch (error) {
            return res.status(500).json({ message: "Couldn't not update comment", error })
        }
        console.log("Comment Updated")
        return res.status(200).json({ message: "Comment Updated" })

  }   
}
