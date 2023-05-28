import sanityClient from '@sanity/client'


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2023-05-20",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false
  };

const client = sanityClient(config);

export default async function createComment(req, res) {
  switch (req.method){
    case "POST":
        const {  _id, postId, parentId, user, email, userImage, message } = JSON.parse(req.body)
        console.log(req.body)
        try {
            await client.create({
                _type: "comment",
                post: {
                    _type: "reference",
                    _ref: postId,

                },
                _id,
                user,
                email,
                userImage,
                message,
                parentId: { _ref: parentId, _type: "reference", _weak: true }
            })
        } catch (error) {
            return res.status(500).json({ message: "Couldn't not submit comment", error })
        }
        console.log("Comment Submitted")
        return res.status(200).json({ message: "Comment submitted" })

  }   
}


