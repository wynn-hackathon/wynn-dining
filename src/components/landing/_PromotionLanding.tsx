import Link from "next/link"
import Image from "next/image"

const PromotionLanding = ({ promotion1 }: any) => {
  const { name, shortDescription, thumbImage, link } = promotion1[0].fields

  return (
    <section className="promotion">
      <div className="container">
        <div className="pic">
          <Image
            alt={`Cover Image`}
            src={'https:' + thumbImage?.fields.file.url}
            width={thumbImage?.fields.file.details.image.width}
            height={thumbImage?.fields.file.details.image.height}
            className="card-img-top" />
        </div>
        <div className="content">
          <h2>{name}</h2>
          <p>{shortDescription}</p>
          <Link className="btn btn-primary" href={link} target="_blank">Read More</Link>
        </div>
      </div>
    </section>
  )
}

export default PromotionLanding