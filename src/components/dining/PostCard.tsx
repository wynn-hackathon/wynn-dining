import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ restaurant }: any) => {
  const { name, thumbImage, shortDescription, slug, category } = restaurant?.fields;

  return (
    <>
      <div className="col" data-cat={category}>
        <div className="card">
          <Link href={`/diningPage/${slug}`} aria-label="View Detail">
            <Image
              alt={`Cover Image for ${name}`}
              src={'https:' + thumbImage?.fields.file.url}
              width={thumbImage?.fields.file.details.image.width}
              height={thumbImage?.fields.file.details.image.height}
              className="card-img-top"
            />
          </Link>
          <div className="card-body">
            <p className="name" tabIndex={0}>{name}</p>
            <p className="card-text" tabIndex={0}>{shortDescription}</p>
          </div>
        </div>
        <div className="ctas">
          {/* {menu && url && <div><Link href={`#`} aria-label="View Menu" data-bs-toggle="modal" data-bs-target=".menuModal" onClick={handleSticky}>View Menu</Link></div>} */}
          <div><Link href={`/diningPage/${slug}`} aria-label="View Detail" className='btn btn-secondary'>View Detail</Link></div>

        </div>
      </div>
      {/* {menu && <Menu name={name} menuList={menuList} />} */}
    </>
  )
}

export default PostCard