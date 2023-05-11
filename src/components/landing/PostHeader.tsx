
import Image from 'next/image'
import { $all, reserveData, handleSticky, _$ } from "@/lib/utils";

const PostHeader = ({ landing }: any) => {
  const { desktopBanner1, mobileBanner1 } = landing?.fields

  return (
    <section className="banner">
      <div className="img desktop">
        <Image
          alt={`Cover Image`}
          src={'https:' + desktopBanner1?.fields.file.url}
          width={desktopBanner1?.fields.file.details.image.width}
          height={desktopBanner1?.fields.file.details.image.height}
        />
      </div>
      <div className="img mobile">
        <Image
          alt={`Cover Image`}
          src={'https:' + mobileBanner1?.fields.file.url}
          width={mobileBanner1?.fields.file.details.image.width}
          height={mobileBanner1?.fields.file.details.image.height}
        />
      </div>
    </section>
  )
}

export default PostHeader