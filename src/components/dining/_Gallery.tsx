import Image from "next/image"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { _$, responsive, $all, handleSticky } from "@/lib/utils";
import { useState } from "react";


//Render Item of Carousel
export const CarouselItems = ({ pic, i }: any) => {

  return (
    <div className="item">
      <div className="pic-wrap" data-bs-toggle="modal" data-bs-target=".galleryModal" onClick={handleSticky}>
        <Image
          alt={`Cover Image for ${pic.fields.title}`}
          src={'https:' + pic.fields.picture[0].fields.file.url}
          width={pic.fields.picture[0].fields.file.details.image.width}
          height={pic.fields.picture[0].fields.file.details.image.height}
          className="card-img-top" />
        <div className="overLay"></div>
      </div>
    </div>

  )
}

//Carousel
const Gallery = ({ photos }: any) => {
  let titleArr: any = []
  const [slider, setSlider] = useState<any>(null);
  const next = () => { slider?.slickNext(); };
  const previous = () => { slider?.slickPrev(); };

  photos.fields.gallery.forEach((item: any, i: number) => { titleArr.push(item.fields.title) })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    arrows: false,
    draggable: true,
    customPaging: function (i: number) {
      const count = photos.fields.gallery.length
      return <span>{i + 1 + ' / ' + count}</span>
    },
    onInit: () => {
      _$('.nameRestaurant[data-id="0"]').classList.remove('d-none')
    },
    afterChange: (index: number) => {
      $all('.nameRestaurant').forEach((item) => item.classList.add('d-none'))
      _$('.nameRestaurant[data-id="' + index + '"]').classList.remove('d-none')
    },
    responsive: responsive,
  };

  return (
    <section className="gallery lightGallery">
      <Slider {...settings} ref={(c: any) => setSlider(c)}>
        {photos.fields.gallery.map((pic: any, i: number) => (
          <CarouselItems pic={pic} key={i} i={i} />
        ))}
      </Slider>
      <div className="navCarousel">
        <span className="prevArrow previousBtn arrow" onClick={previous}><span className="preBtn"><Image alt="Previous" aria-label="Previous" width="38" height="38" src="/images/icon-arrow.svg" /></span></span>
        <span className="nextArrow arrow" onClick={next}><Image alt="Next" aria-label="Next" width="38" height="38" src="/images/icon-arrow.svg" /></span>
      </div>
      {titleArr.map((title: any, i: number) => { return (<p key={i} className="nameRestaurant d-none" data-id={i}>{title}</p>) })}
    </section>
  )
}

export default Gallery


