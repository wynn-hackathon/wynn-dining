
import Image from 'next/image'

const DiningBanner = ({ diningPage }: any) => {
  const { desktopBanner, mobileBanner, description, headline } = diningPage

  return (
    <>
      <section className="banner">
        <div className="img desktop">
          <Image
            alt={`Cover Image for ${headline}`}
            src={'https:' + desktopBanner.fields.file.url}
            width={desktopBanner.fields.file.details.image.width}
            height={desktopBanner.fields.file.details.image.height}
          />
        </div>
        <div className="img mobile">
          <Image
            alt={`Cover Image for ${headline}`}
            src={'https:' + mobileBanner.fields.file.url}
            width={mobileBanner.fields.file.details.image.width}
            height={mobileBanner.fields.file.details.image.height}
          />
        </div>
      </section>
      <section className='headline'>
        <div className="container">
          <h1 className="marketing-title" tabIndex={0}>
            {headline}
          </h1>
          <p className="copy-wrap" tabIndex={0}>{description}</p>
        </div>
      </section>
    </>
  )
}

export default DiningBanner