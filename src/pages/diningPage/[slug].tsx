
import { client, previewClient } from '../../lib/contentful/client'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next';
import PostBody from '@/components/dining/PostBody';
import PostHeader from '@/components/dining/PostHeader';

const DinningDetail = ({ restaurant }: any) => {
  const router = useRouter()
  return (
    <main>
      <article className=''>
        {router.isFallback ? (
          <div className='container'></div>
        ) : (
          <>
            <PostHeader restaurant={restaurant} />
            <PostBody restaurant={restaurant} />
          </>
        )}
      </article>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }: any) => {
  const cfClient = preview ? previewClient : client

  const { slug } = params
  const response = await cfClient.getEntries({
    content_type: 'diningPage',
    'fields.slug': slug
  })

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/diningPage',
        permanent: false
      }
    }
  }

  return {
    props: {
      restaurant: response?.items?.[0],
      preview,
      revalidate: 60
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'diningPage' })
  const paths = response.items.map((item: any) => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default DinningDetail
