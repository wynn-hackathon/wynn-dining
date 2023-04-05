import Link from 'next/link'
import Image from 'next/image'

const PostCard = ({ restaurant }: any) => {
  const { name, thumbImage, shortDescription, slug, category } = restaurant.fields;

  return (
    <div className="col" data-cat={category}>
      <div className="card">
        <Link href={`/dining/${slug}`} aria-label="View Detail">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + thumbImage.fields.file.url}
            width={thumbImage.fields.file.details.image.width}
            height={thumbImage.fields.file.details.image.height}
            className="card-img-top"
          />
        </Link>
        <div className="card-body">
          <p className="name" tabIndex={0}>{name}</p>
          <p className="card-text" tabIndex={0}>{shortDescription}</p>
        </div>
      </div>
      <div className="ctas">
        <div><Link href={`#`} aria-label="View Menu" className=''>View Menu</Link></div>
        <div><Link href={`/dining/${slug}`} aria-label="View Detail" className='btn btn-secondary'>View Detail</Link></div>

      </div>
    </div>
  )
}

export default PostCard