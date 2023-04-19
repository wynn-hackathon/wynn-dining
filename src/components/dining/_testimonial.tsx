
const Testimonial = ({ testimonial }: any) => {
  const { content, signature } = testimonial?.fields.testimonial.fields
  return (
    <section className="testimonial-wrap">
      <div className="container">
        <div className="testimonial">
          <p className="content">&ldquo; {content} &rdquo;</p>
          <p className="signature">{signature}</p>
          <div className="wynnLogo"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial