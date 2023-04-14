import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req:NextApiRequest, res:NextApiResponse) => {
  let inboundRevalToken = req.headers['x-vercel-reval-key']

  if (!inboundRevalToken) {
    return res
      .status(401)
      .json({ message: 'x-vercel-reval-key header not defined' })
  } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    let postSlug = req.body.fields.slug['en-US']
    await res.revalidate(`/diningPage/${postSlug}`)
    await res.revalidate('/diningPage')

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}

export default handler