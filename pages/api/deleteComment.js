import sanityClient from '@sanity/client'


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-08-11",
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
  };

const client = sanityClient(config);

export default async function deleteComment(req, res) {
    switch (req.method){

        case "DELETE":

            try {
                await client
                .delete(req.body)
            } catch (error) {
                return res.status(500).json({ message: "Couldn't not delete comment", error })
            }
            console.log("Comment Deleted")
            return res.status(200).json({ message: "Comment Deleted" })
    }
}