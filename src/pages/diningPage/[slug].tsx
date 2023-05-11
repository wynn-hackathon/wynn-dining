
import { client, previewClient } from '../../lib/contentful/client'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { handleSticky } from '@/lib/utils';
import { GetStaticProps, GetStaticPaths } from 'next';
import PostBody from '@/components/dining/PostBody';
import PostHeader from '@/components/dining/PostHeader';
import moment from 'moment';
import Skeleton from '@/components/ui/Skeleton';
import Menu from '@/components/dining/_menu';
import ModalReserveTable from '@/components/dining/ModalReserveTable';
import ModalLogin from '@/components/dining/_ModalLogin'
import ModalProfile from '../../components/modal/Profile'

const DinningDetail = ({ restaurant, menuList, preview, bookings, user }: any) => {
  const [idRestaurant, setIdRestaurant] = useState()
  const [name, setName] = useState(restaurant?.fields?.name)
  const reserveInfo = {
    restaurant: name,
    startDate: moment(new Date()).format('MM/DD/YYYY'),
    people: "2 Guests",
    time: "5:00 PM"
  }

  const handleMenuClick = (e: any) => {
    const idMenu = e.target.getAttribute("id-menu");
    e.preventDefault()
    handleSticky();
    setIdRestaurant(idMenu)
  }

  const router: any = useRouter()
  return (
    <main>
      {preview}
      {router.isFallback ? (
        <Skeleton />
      ) : (
        <>
          <PostHeader restaurant={restaurant} handleMenuClick={handleMenuClick} />
          <PostBody restaurant={restaurant} handleMenuClick={handleMenuClick} />
          {menuList && <Menu idRestaurant={idRestaurant} menuList={menuList} />}
          {<ModalReserveTable info={reserveInfo} />}
          <ModalLogin user={user} />
          <ModalProfile bookings={bookings} user={user} />
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

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/diningPage',
        permanent: false
      }
    }
  }

  const response3 = await client.getEntries({ content_type: 'menuPage' })
  const users = await client.getEntry('4dV4l3i1cRm0i0edG1xLVP')
  const response5 = await client.getEntries({ content_type: 'reserveTable' })

  return {
    props: {
      restaurant: response?.items[0],
      menuList: response3?.items,
      user: users?.fields,
      bookings: response5?.items || [],
      preview,
      revalidate: 60
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'diningPage' })
  const paths = response?.items.map((item: any) => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default DinningDetail
