import RichText from '../RichText'
import Gallery from '../_shared/_Gallery';
import Info from '../_shared/_info';

const PostBody = ({ restaurant }: any) => {
  const { content } = restaurant.fields;

  return (
    <section className="our-mission">
      <div className="container">
        <section>
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
    </section>
  )
}

export default PostBody