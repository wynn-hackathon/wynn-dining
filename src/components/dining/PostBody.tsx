import RichText from '../RichText'
import Gallery from './_Gallery';
import Info from './_Info';
import TwoCols from './_2cols';
import Testimonial from './_testimonial';
import FAQs from './_FAQs';

const PostBody = ({ restaurant }: any) => {
  const { content } = restaurant.fields;

  return (
    <section className="our-mission">
      <div className="container">
        <section className='aboutRestaurant'>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <div className="copy-wrap" tabIndex={0}>
                <RichText content={content} />
              </div>
            </div>
            <div className="col">
             <Info  infoDining={restaurant} />
            </div>
          </div>
        </section>
      </div>
      <Gallery photos={restaurant}/>
      <TwoCols specialMeal={restaurant}/>
      <Testimonial testimonial={restaurant} />
      <FAQs faq={restaurant} />
    </section>
  )
}

export default PostBody