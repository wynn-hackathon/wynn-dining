const ModalReserveTable = ({ info }: any) => {
  const { restaurant, startDate, people, time } = info
  console.log(startDate + "")
  return (
    <div className="modal fade" id="reserveTableModal" tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"><i className="bi bi-x-circle-fill"></i></button>
          <div className="modal-body">
            <div className="reserveTable">
              <h2><span className="page-title">Reservation</span>{restaurant}</h2>
              <div className="infoTable">
                <h3>Your Table</h3>
                <p>Party size: {people}<br></br> Date: {startDate + ""}<br></br> Time: {time} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalReserveTable