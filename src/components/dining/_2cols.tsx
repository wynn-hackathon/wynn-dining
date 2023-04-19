import Image from "next/image"
import RichText from "../RichText"

const TwoCols = ({ specialMeal }: any) => {
  const { subTitle, headline, picture, content, switchPosition } = specialMeal?.fields.specialMeal.fields

  return (
    <section className="twoCols">
      <div className="container">
        <h2><span className="page-title">{subTitle}</span>{headline}</h2>
        <div className="row row-cols-1 row-cols-md-2" data-pos={switchPosition}>
          <div className="col pic">
            <Image
              alt={`Cover Image for ${subTitle}`}
              src={'https:' + picture?.fields.file.url}
              width={picture?.fields.file.details.image.width}
              height={picture?.fields.file.details.image.height}
              className="card-img-top"
            />
          </div>
          <div className="col text">
            <RichText content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoCols;