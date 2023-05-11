const Headline = ({ landing }: any) => {
  const { description1, headline1 } = landing?.fields

  return (
    <section className='headline'>
      <div className="container">
        <h1 className="marketing-title" tabIndex={0}>
          {headline1}
        </h1>
        <p className="copy-wrap" tabIndex={0}>{description1}</p>
      </div>
    </section>
  )
}

export default Headline