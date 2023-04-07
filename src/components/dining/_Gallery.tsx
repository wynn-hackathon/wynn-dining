import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import Image from "next/image"


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const CarouselItems = ({ pic,i }: any) => {
  console.log(i,pic.fields.title)
  return (
    <div className="item">
      <div className="pic-wrap">
        <Image
          alt={`Cover Image for ${pic.fields.title}`}
          src={'https:' + pic.fields.picture[0].fields.file.url}
          width={pic.fields.picture[0].fields.file.details.image.width}
          height={pic.fields.picture[0].fields.file.details.image.height}
          className="card-img-top" />
        <div className="overLay"></div>
      </div>
      <p>{pic.fields.title}</p>
    </div>

  )
}

const Gallery = ({ photos }: any) => {
  return (
    <section className="gallery">
      <Carousel responsive={responsive} itemClass="p-2" centerMode={true} infinite={true} arrows={true}>
        {photos.fields.gallery.map((pic: any, i: number) => (
          <CarouselItems pic={pic} key={i} i={i} />
        ))}
      </Carousel>
    </section>
  )
}

export default Gallery