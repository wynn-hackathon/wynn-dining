import Image from "next/image"
import Slider from 'react-slick'
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { _$, $all, handleSticky } from "@/lib/utils";
import { useState } from "react";

//Render Item of Carousel
export const RecommendedItems = ({ pic, i }: any) => {
  const { mobileBanner, name } = pic?.fields
  return (
    <div className="item">
      <div className="pic-wrap">
        <Image
          alt={`Cover Image for ${name}`}
          src={'https:' + mobileBanner?.fields.file.url}
          width={mobileBanner?.fields.file.details.image.width}
          height={mobileBanner?.fields.file.details.image.height}
          className="card-img-top"
        />
        <div className="overLay"></div>
        <div className="name" >{name}</div>
      </div>
    </div>
  )
}

//Render Caption of Item of Carousel
export const Content = ({ title, description, slug, externalLink, i }: any) => {
  const url: any = externalLink ? externalLink : '/diningPage/' + slug;
  return (
    <div className="restaurant d-none" data-id={i}>
      <div className="text">
        <p className="name">{title}</p>
        <p>{description}</p>
      </div>
      <div className="ctas">
        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target=".menuModal" onClick={handleSticky}>View Menu</button>
        <Link className="btn btn-primary" href={url}>View Detail</Link>
      </div>
    </div>
  )
}

//Carousel
const Recommendation = ({ list }: any) => {
  const titleRecommendArr: any = [],
    descriptionRecommendArr: any = [],
    slugRecommendArr: any = [],
    externalLinkArr: any = [];

  const [slider, setSlider] = useState<any>(null);
  const next = () => { slider?.slickNext(); };
  const previous = () => { slider?.slickPrev(); };

  list?.forEach((item: any, i: number) => {
    titleRecommendArr.push(item.fields.name);
    descriptionRecommendArr.push(item.fields.shortDescription);
    slugRecommendArr.push(item.fields.slug);
    externalLinkArr.push(item.fields.externalLink);
  })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    arrows: false,
    draggable: true,
    swipe: true,

    customPaging: function (i: number) {
      const count = list.length
      return <span>{i + 1 + ' / ' + count}</span>
    },
    onInit: () => {
      _$('.restaurant[data-id="0"]').classList.remove('d-none')
    },
    afterChange: (index: number) => {
      const arr: any = $all('.restaurant')
      arr.forEach((item: any) => item.classList.add('d-none'))
      _$('.restaurant[data-id="' + index + '"]').classList.remove('d-none')
    },
    responsive: [
      {
        breakpoint: 1530,
        settings: { slidesToShow: 3, }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, }
      }
    ],
  };

  return (
    <section className="gallery recommendation">
      <h2><span className="page-title">We also recommend</span>Dining at Encore Boston Harbor</h2>
      <div className="container">
        <Slider {...settings} ref={(c: any) => setSlider(c)}>
          {list?.map((pic: any, i: number) => (
            <RecommendedItems pic={pic} key={i} i={i} />
          ))}
        </Slider>
        <div className="navCarousel">
          <span className="prevArrow previousBtn arrow" onClick={previous}><span className="preBtn"><Image alt="Previous" aria-label="Previous" width="38" height="38" src="/images/icon-arrow.svg" /></span></span>
          <span className="nextArrow arrow" onClick={next}><Image alt="Next" aria-label="Next" width="38" height="38" src="/images/icon-arrow.svg" /></span>
        </div>
        {titleRecommendArr?.map((title: any, i: number) => (
          <Content title={title} description={descriptionRecommendArr[i]} slug={slugRecommendArr[i]} externalLink={externalLinkArr[i]} key={i} i={i} />
        ))}
      </div>
    </section>
  )
}

export default Recommendation