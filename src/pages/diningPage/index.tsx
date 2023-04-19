import { client } from '@/lib/contentful/client';
import PostCard from '@/components/dining/PostCard';
import DiningBanner from '@/components/dining/DiningBanner';
import { GetStaticProps } from 'next';
import { DiningType } from '@/types';
import Promotion from '@/components/dining/_Promotion';
import { useState, useEffect } from 'react';
import { _$, $all } from '@/lib/utils';
import Menu from '@/components/dining/_menu';

const Dining = ({ diningDetail, diningPage, menuList }: any) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    diningDetail.map((restaurant: any) => (category.push(restaurant.fields.category)))
    setCategory([...new Set(category)])
  }, [category]);


  const handleFilter = ((target: any, cat: string) => {
    const arr = $all(".dining-wrap")

    $all(".filter li").forEach((item) => item.classList.remove("active"));
    $all(".dining-wrap").forEach((item) => item.classList.remove("active"));
    (cat === "All") ? arr.forEach((item) => item.classList.add("active")) : _$(".dining-wrap[data-id='" + cat + "']").classList.add("active")
    target.classList.toggle("active")

  });

  return (
    <main>
      <DiningBanner diningPage={diningPage} diningDetail={diningDetail} />
      {diningPage.promotion && <Promotion promotion={diningPage} />}
      <section>
        <div className="container">
          <div className='filter'>
            <ul>
              <li className="active" onClick={(e) => { e.preventDefault(); handleFilter(e.target, "All") }}>All</li>
              {category.map((cat: string, i: number) => (<li key={i} onClick={(e) => { e.preventDefault(); handleFilter(e.target, cat) }}>{cat}</li>))}
            </ul>
          </div>
          {category.map((cat: string, i: number,) => (
            <div className='dining-wrap active' key={i} data-id={cat} >
              <h2 className="h2 text-center" tabIndex={0}>{cat}</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 listCards">
                {diningDetail.map((restaurant: any, i: any) => (
                  (cat == restaurant.fields.category) && <PostCard key={restaurant.fields.slug} restaurant={restaurant} menuList={menuList} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response1 = await client.getEntries({ content_type: 'diningListPage' })
  const response2 = await client.getEntries({ content_type: 'diningPage' })
  // const users = await client.getEntries({ content_type: 'profileCustomer' })

  // const response3 = await client.getEntries({ content_type: 'menuPage' })

  return {
    props: {
      diningPage: response1.items[0].fields,
      diningDetail: response2.items,
      // menuList: response3?.items || '',
      revalidate: 60,
    }
  }
}


export default Dining
