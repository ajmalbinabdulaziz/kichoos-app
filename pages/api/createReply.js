import sanityClient from '@sanity/client'


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-08-11",
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
  };

const client = sanityClient(config);

export default async function createReply(req, res) {
    switch (req.method){
        case "POST":
            const { _id, name, email, image, comment } = JSON.parse(req.body)

            try {
                await client.create({
                    _type: "comment",
                    post: {
                        _type: "reference",
                        _ref: _id,
                    },
                    name,
                    email,
                    image,
                    comment,
                })
            } catch (error) {
                return res.status(500).json({ message: "Couldn't not submit comment", error })
            }
            console.log("Comment Submitted")
            return res.status(200).json({ message: "Comment submitted" })

            break;
         
    }
}