
import Image from 'next/image'
import { _$, handleSticky } from '@/lib/utils';

const PostHeader = ({ restaurant, menuList }: any) => {
  const { name, desktopBanner, mobileBanner, subTitle, shortDescription, menu } = restaurant?.fields

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
                {menu && <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target=".menuModal" onClick={handleSticky}>View Menu</button>}
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target=".reserveTableModal" onClick={handleSticky}>Reserve A Table</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PostHeader