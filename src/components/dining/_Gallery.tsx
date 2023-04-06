import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

const Gallery = ({photos}:any) => {

  console.log(photos.fields.gallery.fields.photos.id)
  return (
    <section className="gallery">
      Gallery
    </section>
  )
}

export default Gallery