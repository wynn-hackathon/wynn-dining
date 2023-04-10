import Link from "next/link"
import Image from "next/image"

const Promotion = ({ promotion }: any) => {
  const { name, shortDescription, thumbImage, slug } = promotion.promotion[0].fields

  return (
    <section className="promotion">
      <div className="container">
        <div className="pic">
          <Image
            alt={`Cover Image for ${name}`}
            src={'https:' + thumbImage.fields.file.url}
            width={thumbImage.fields.file.details.image.width}
            height={thumbImage.fields.file.details.image.height}
            className="card-img-top" />
        </div>
        <div className="content">
          <h2>{name}</h2>
          <p>{shortDescription}</p>
          <Link className="btn btn-primary" href={'/diningPage/' + slug}>Learn More</Link>
        </div>
      </div>
    </section>
  )
}

export default Promotion