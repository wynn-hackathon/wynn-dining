
import GalleryModal from "./_GalleryModal";

const Modal = ({ photos }: any) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"><i className="bi bi-x-circle-fill"></i></button>
          <div className="modal-body">
            <GalleryModal photos={photos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal