import Image from "next/image"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { _$ } from "@/lib/utils";

// Custom next, previous buttons
export const Arrow = (props: any) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow previousBtn";
  className += " arrow";
  const char = props.type === "next" ? <Image src='/images/icon-arrow.svg' width='38' height='38' alt='Next' aria-label='Next' /> : <span className="preBtn"><Image src='/images/icon-arrow.svg' width='38' height='38' alt='Next' aria-label='Next' /></span>;
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

//Render Item of Carousel
export const CarouselItems = ({ pic, i }: any) => {

  return (
    <div className="item" data-curr={i}>
      <div className="pic-wrap">
        <Image
          alt={`Cover Image for ${pic.fields.title}`}
          src={'https:' + pic.fields.picture[0].fields.file.url}
          width={pic.fields.picture[0].fields.file.details.image.width}
          height={pic.fields.picture[0].fields.file.details.image.height}
          className="card-img-top" />
        <div className="overLay"></div>
      </div>
      <p className="title">{pic.fields.title}</p>
    </div>

  )
}

const Gallery = ({ photos }: any) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    arrows: true,
    draggable: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    customPaging: function (i: number) {
      const count = photos.fields.gallery.length
      return <span>{i + 1 + ' / ' + count}</span>
    },

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="gallery">
      <Slider {...settings} >
        {photos.fields.gallery.map((pic: any, i: number) => (
          <CarouselItems pic={pic} key={i} i={i} />
        ))}
      </Slider>

    </section>
  )
}

export default Gallery


