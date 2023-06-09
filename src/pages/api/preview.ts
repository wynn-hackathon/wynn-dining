import { previewClient } from '@/lib/contentful/client'
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug } = req.query
  if (secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const response = await previewClient.getEntries({
    content_type: 'diningPage',
    'fields.slug': slug
  })

  const dining = response?.items?.[0]


  if (!dining) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({})
  const url = `/diningPage/${slug}`
  res.writeHead(307, { Location: url })
  res.end()
}

export default handler

