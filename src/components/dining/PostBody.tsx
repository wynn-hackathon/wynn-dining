import RichText from '../RichText'

const PostBody = ({ restaurant }: any) => {
  const { content } = restaurant.fields;
  const { dressCode, hourOfOperation, location, telephoneNumber } = restaurant.fields.infoDining.fields

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
              <ul className="info-box" tabIndex={0}>
                <li key={0}>
                  <span className="icon"><i className="bi bi-clock"></i></span>
                  <span className="info-title">hour Of Operation</span>
                  {hourOfOperation}
                </li>
                <li key={1}>
                  <span className="icon"><i className="bi bi-person-check"></i></span>
                  <span className="info-title">dress Code</span>
                  <RichText content={dressCode} />
                </li>
                <li key={2}>
                  <span className="icon"><i className="bi bi-phone"></i></span>
                  <span className="info-title">telephone Number</span>
                  {telephoneNumber}
                </li>
                <li key={3}>
                  <span className="icon"><i className="bi bi-geo-alt"></i></span>
                  <span className="info-title">location</span>
                  {location}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default PostBody