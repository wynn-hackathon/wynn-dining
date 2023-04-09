import Image from "next/image"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { _$, responsive, $all } from "@/lib/utils";
import { useState } from "react";

//Render Item of Carousel
export const RecommendedItems = ({ pic }: any) => {
  const { mobileBanner, name } = pic.fields

  return (
    <div className="item">
      <div className="pic-wrap">
        <Image
          alt={`Cover Image for ${name}`}
          src={'https:' + mobileBanner.fields.file.url}
          width={mobileBanner.fields.file.details.image.width}
          height={mobileBanner.fields.file.details.image.height}
          className="card-img-top"
        />
        <div className="overLay"></div>
      </div>
    </div>
  )
}

export const Content = ({ title, description, i }: any) => {
  return (
    <div className="restaurant d-none" data-id={i}>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

const Recommendation = ({ list }: any) => {
  let titleRecommendArr: any = []
  let descriptionRecommendArr: any = []
  const [slider, setSlider] = useState<any>(null);
  const next = () => { slider?.slickNext(); };
  const previous = () => { slider?.slickPrev(); };

  list.forEach((item: any, i: number) => {
    titleRecommendArr.push(item.fields.name), descriptionRecommendArr.push(item.fields.shortDescription)
  })

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
      const count = list.length
      return <span>{i + 1 + ' / ' + count}</span>
    },
    onInit: () => {
      _$('.restaurant[data-id="0"]').classList.remove('d-none')
    },
    afterChange: (index: number) => {
      $all('.restaurant').forEach((item) => item.classList.add('d-none'))
      _$('.restaurant[data-id="' + index + '"]').classList.remove('d-none')
    },
    responsive: responsive,
  };

  return (
    <section className="gallery recommendation">
      <h2><span className="page-title">We also recommend</span>Dining at Encore Boston Harbor</h2>
      <div className="container">
        <Slider {...settings} ref={(c: any) => setSlider(c)}>
          {list.map((pic: any, i: number) => (
            <RecommendedItems pic={pic} key={i} i={i} />
          ))}
        </Slider>
        <div className="navCarousel">
          <span className="prevArrow previousBtn arrow" onClick={previous}><span className="preBtn"><Image alt="Previous" aria-label="Previous" width="38" height="38" src="/images/icon-arrow.svg" /></span></span>
          <span className="nextArrow arrow" onClick={next}><Image alt="Next" aria-label="Next" width="38" height="38" src="/images/icon-arrow.svg" /></span>
        </div>
        {titleRecommendArr.map((title: any, i: number) => (
          <Content title={title} description={descriptionRecommendArr[i]} key={i} i={i} />
        ))}
      </div>
    </section>
  )
}

export default Recommendation