import RichText from '../RichText'
import Gallery from './_Gallery';
import Info from './_Info';
import TwoCols from './_2cols';
import Testimonial from './_testimonial';
import FAQs from './_FAQs';
import Recommendation from './_Recommendation';
import Modal from './_modal';

const PostBody = ({ restaurant }: any) => {
  const { content, gallery, specialMeal, testimonial, faqList, recommendationRestaurants } = restaurant.fields;
  return (
    <>
      <div className="container">
        <section className='aboutRestaurant'>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <div className="copy-wrap" tabIndex={0}>
                <RichText content={content} />
              </div>
            </div>
            <div className="col">
              <Info infoDining={restaurant} />
            </div>
          </div>
        </section>
      </div>
      {gallery && <Gallery photos={restaurant} />}
      {specialMeal && <TwoCols specialMeal={restaurant} />}
      {testimonial && <Testimonial testimonial={restaurant} />}
      {faqList && <FAQs faq={restaurant} />}
      {gallery && <Modal photos={restaurant} />}
      {recommendationRestaurants && <Recommendation list={recommendationRestaurants} />}
    </>
  )
}

export default PostBody