
import Image from 'next/image'
import { _$, handleSticky, $id, reserveData } from '@/lib/utils';
import moment from 'moment';

const PostHeader = ({ restaurant, handleMenuClick }: any) => {
  const { name, desktopBanner, mobileBanner, subTitle, shortDescription, menu } = restaurant?.fields

  const handleReserve = (e: any) => {
    e.preventDefault();
    const reserveInfo = {
      restaurant: name,
      startDate: moment(new Date()).format('MM/DD/YYYY'),
      people: "2 Guests",
      time: "5:00 PM"
    }
    reserveData(reserveInfo)
    handleSticky()
  };

  return (
    <>
      <section className="banner">
        <div className="img desktop">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + desktopBanner?.fields.file.url}
            width={desktopBanner?.fields.file.details.image.width}
            height={desktopBanner?.fields.file.details.image.height}
          />
        </div>
        <div className="img mobile">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + mobileBanner.fields.file.url}
            width={mobileBanner.fields.file.details.image.width}
            height={mobileBanner.fields.file.details.image.height}
          />
        </div>
        <div className="headline-box">
          <div className="content-wrap">
            <div className="headerContent">
              <h1 className="marketing-title" tabIndex={0}>
                <span className="page-title">{subTitle}</span>
                {name}
              </h1>
              <div className="copy-wrap" tabIndex={0}>{shortDescription}</div>
              <div className='ctas'>
                {menu && <button className='btn btn-secondary' id-menu={menu.sys.id} data-bs-toggle="modal" data-bs-target=".menuModal" onClick={handleMenuClick}>View Menu</button>}
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target=".reserveTableModal" onClick={handleReserve}>Reserve A Table</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostHeader