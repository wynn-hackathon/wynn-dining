
import { client, previewClient } from '../../lib/contentful/client'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next';
import PostBody from '@/components/dining/PostBody';
import PostHeader from '@/components/dining/PostHeader';
import Skeleton from '@/components/ui/Skeleton';

const DinningDetail = ({ restaurant, menuList, preview }: any) => {
  const router = useRouter()
  return (
    <main>
      {preview}
      {router.isFallback ? (
        <Skeleton />
      ) : (
        <>
          <PostHeader restaurant={restaurant} menuList={menuList} />
          <PostBody restaurant={restaurant} />
        </>
      )}
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


  const response3 = await client.getEntries({ content_type: 'menuPage' })
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
      menuList: response3?.items,
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
