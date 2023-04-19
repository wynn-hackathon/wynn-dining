
import Image from "next/image"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const GalleryModal = ({ photos }: any) => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    arrows: true,
    draggable: true,
  };

  return (
    <section className="gallery">
      <Slider {...settings} >
        {photos?.fields.gallery.map((pic: any, i: number) => {
          return (
            <div className="" key={i} data-curr={i}>
              <div className="pic-wrap">
                <Image
                  alt={`Cover Image for ${pic.fields.title}`}
                  src={'https:' + pic?.fields.picture[0].fields.file.url}
                  width={pic?.fields.picture[0].fields.file.details.image.width}
                  height={pic?.fields.picture[0].fields.file.details.image.height}
                  className="card-img-top" />
              </div>
              <p className="title">{pic?.fields.title}</p>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default GalleryModal