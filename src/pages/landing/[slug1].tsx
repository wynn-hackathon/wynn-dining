import Head from 'next/head'
import { client, previewClient } from '../../lib/contentful/client'
import { GetStaticProps, GetStaticPaths } from 'next';
import Skeleton from '@/components/ui/Skeleton';
import { useEffect } from 'react'
import PostHeader from '@/components/landing/PostHeader';
import PostBody from '@/components/landing/PostBody';
import { useRouter } from 'next/router'

export default function LandingDetail({ landing }: any) {

  const router: any = useRouter()
  return (
    <main>
      {router.isFallback ? (
        <Skeleton />
      ) : (
        <>
          <PostHeader landing={landing} />
          <PostBody landing={landing} />
        </>
      )}

    </main>

  )
}


export const getStaticProps: GetStaticProps = async ({ params, preview = false }: any) => {
  const { slug1 } = params
  const response = await client.getEntries({
    content_type: 'landingPage',
    'fields.slug1': slug1
  })
  return {
    props: {
      landing: response?.items[0],
      revalidate: 60
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'landingPage' })
  const paths = response?.items.map((item: any) => ({
    params: { slug1: item.fields.slug1 }
  }))

  return {
    paths,
    fallback: true
  }
}

