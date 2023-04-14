import { useState } from "react"
import { $all, _$, ValidateFormWithJS } from "@/lib/utils"

const ModalReserveTable = ({ info }: any) => {
  const { restaurant, startDate, people, time } = info

  const [reserveInfo, setReserveInfo] = useState({
    restaurant: restaurant,
    startDate: startDate,
    people: people,
    time: time,
    name: '',
    email: '',
    phone: ''
  })

  const handleReserve = async (e: any) => {
    e.preventDefault();
    const all = $all('.userData');
    const newData = {
      restaurant: restaurant,
      startDate: startDate,
      people: people,
      time: time,
      name: all[0].value,
      email: all[1].value,
      phone: all[2].value,
    }

    setReserveInfo(newData);
    ValidateFormWithJS();
    _$('.thankyou').classList.remove('d-none');
    _$('.infoDetail').classList.add('d-none');
  };

  const handleClose = () => {
    _$('.thankyou').classList.add('d-none');
    _$('.infoDetail').classList.remove('d-none');
  }

  return (
    <div className="modal fade fullView reserveTableModal" id="reserveTableModal" tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close" onClick={handleClose} ><i className="bi bi-x-lg"></i></button>
          <div className="modal-body ">
            <div className="w550">
              <h2><span className="page-title">Reservation</span>{restaurant}</h2>
              <div className="infoTable">
                <h3>Your Table</h3>
                <p><span>Party size: </span>{people}<br></br> <span>Date: </span>{startDate + ""}<br></br> <span>Time: </span>{time} </p>
              </div>
              <div className="infoDetail">
                <h3>Your Detail</h3>
                <div className="yourInfo">
                  <form onSubmit={handleReserve}>
                    <div className="mb-3">
                      <input type="text" className="form-control userData" id="name" placeholder="Full name *" required />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control userData" id="email" placeholder="Email *" required />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control userData" id="phone" placeholder="Phone" />
                    </div>
                    <div className="ctas">
                      <div className="text-center"><button type="button" className="btn btn-secondary mt-3" data-bs-dismiss="modal">Cancel</button></div>
                      <div className="text-center"><button type="submit" className="btn btn-primary mt-3">Submit</button></div>
                    </div>
                  </form>
                </div>
              </div>
              <p className="thankyou d-none"> Thank you for your reservation at <br></br> {restaurant}</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default ModalReserveTable