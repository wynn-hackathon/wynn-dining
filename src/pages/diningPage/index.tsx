import { client } from '@/lib/contentful/client';
import PostCard from '@/components/dining/PostCard';
import DiningBanner from '@/components/dining/DiningBanner';
import Menu from '@/components/dining/_menu';
import { GetStaticProps } from 'next';
import Promotion from '@/components/dining/_Promotion';
import { _$, $all, handleSticky } from '@/lib/utils';
import ModalLogin from '@/components/dining/_ModalLogin'
import ModalProfile from '../../components/modal/Profile'
import { useState } from 'react';
import ModalReserveTable from '@/components/dining/ModalReserveTable';
import ModalUpdateReserveTable from '@/components/dining/ModalUpdateReserveTable'

const Dining = ({ diningDetail, diningPage, menuList, categoriesArr, user, bookings }: any) => {

  const [idRestaurant, setIdRestaurant] = useState('')

  const handleMenuClick = (e: any) => {
    const idMenu = e.target.getAttribute("id-menu");
    e.preventDefault()
    handleSticky();
    setIdRestaurant(idMenu)
  }

  const handleFilter = ((target: any, cat: string) => {
    const arr: any = $all(".dining-wrap")
    const arr1: any = $all(".filter li")
    const arr2: any = $all(".dining-wrap")

    arr1.forEach((item: any) => item.classList.remove("active"));
    arr2.forEach((item: any) => item.classList.remove("active"));
    (cat === "All") ? arr?.forEach((item: any) => item.classList.add("active")) : _$(".dining-wrap[data-id='" + cat + "']").classList.add("active")
    target.classList.toggle("active")

  });
  return (
    <>
      <main>
        <DiningBanner diningPage={diningPage} diningDetail={diningDetail} bookings={bookings} />
        {diningPage.promotion && <Promotion promotion={diningPage} />}
        <section>
          <div className="container">
            <div className='filter'>
              <ul>
                <li className="active" onClick={(e) => { e.preventDefault(); handleFilter(e.target, "All") }}>All</li>
                {categoriesArr?.category.map((cat: string, i: number) => (<li key={i} onClick={(e) => { e.preventDefault(); handleFilter(e.target, cat) }}>{cat}</li>))}
              </ul>
            </div>
            {categoriesArr.category.map((cat: string, i: number,) => (
              <div className='dining-wrap active' key={i} data-id={cat} >
                <h2 className="h2 text-center" tabIndex={0}>{cat}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 listCards">
                  {diningDetail?.map((restaurant: any, i: any) => (
                    (cat == restaurant.fields.category) && <PostCard key={restaurant.fields.slug} restaurant={restaurant} handleMenuClick={handleMenuClick} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <ModalLogin user={user} />
      <ModalProfile bookings={bookings} user={user} />
      {menuList && <Menu idRestaurant={idRestaurant} menuList={menuList} />}
      <ModalReserveTable user={user} />
      <ModalUpdateReserveTable user={user} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response1 = await client.getEntries({ content_type: 'diningListPage' })
  const response2 = await client.getEntries({ content_type: 'diningPage' })
  const response3 = await client.getEntries({ content_type: 'menuPage' })
  const categories = await client.getEntries({ content_type: 'category' })
  const users = await client.getEntry('4dV4l3i1cRm0i0edG1xLVP')
  const response5 = await client.getEntries({ content_type: 'reserveTable' })

  return {
    props: {
      diningPage: response1?.items[0].fields,
      diningDetail: response2?.items,
      categoriesArr: categories?.items[0].fields || [],
      menuList: response3?.items,
      bookings: response5?.items || [],
      user: users?.fields,
      revalidate: 60,
    }
  }
}


export default Dining
