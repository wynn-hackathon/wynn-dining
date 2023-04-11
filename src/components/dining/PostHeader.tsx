
import Image from 'next/image'
import ModalReserveTable from './_ModalReserveTable'

const PostHeader = ({ restaurant }: any) => {
  const { name, desktopBanner, mobileBanner, subTitle, shortDescription } = restaurant.fields

  const reserveInfo = {
    restaurant: name,
    startDate: '04/12/2023',
    people: "2 Guests",
    time: "5:00 PM"
  }


  return (
    <>
      <section className="banner">
        <div className="img desktop">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + desktopBanner.fields.file.url}
            width={desktopBanner.fields.file.details.image.width}
            height={desktopBanner.fields.file.details.image.height}
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
                <button className='btn btn-secondary'>View Menu</button>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#reserveTableModal">Reserve A Table</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalReserveTable info={reserveInfo} />
    </>
  )
}

export default PostHeader