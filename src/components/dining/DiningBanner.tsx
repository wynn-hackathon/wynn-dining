
import Image from 'next/image'
import ReserveATable from './ReserveATable'
import { $all, reserveData, handleSticky, _$ } from "@/lib/utils";

const DiningBanner = ({ diningPage, diningDetail, bookings }: any) => {
  const { desktopBanner, mobileBanner, description, headline } = diningPage

  const handleReserve = (e: any) => {
    e.preventDefault();
    const all: any = $all('.data');
    const newData = {
      restaurant: all[0].value,
      startDate: all[2].value,
      people: all[1].value,
      time: all[3].value,
    };
    reserveData(newData);
    (newData.restaurant === "Select A Restaurant") && _$('.invalid-feedback.restaurant').classList.add('d-block');
    handleSticky()
  }
  return (
    <>
      <section className="banner">
        <div className="img desktop">
          <Image
            alt={`Cover Image for ${headline}`}
            src={'https:' + desktopBanner?.fields.file.url}
            width={desktopBanner?.fields.file.details.image.width}
            height={desktopBanner?.fields.file.details.image.height}
          />
        </div>
        <div className="img mobile">
          <Image
            alt={`Cover Image for ${headline}`}
            src={'https:' + mobileBanner?.fields.file.url}
            width={mobileBanner?.fields.file.details.image.width}
            height={mobileBanner?.fields.file.details.image.height}
          />
        </div>
        <ReserveATable diningDetail={diningDetail} bookings={bookings} handleReserve={handleReserve} />
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