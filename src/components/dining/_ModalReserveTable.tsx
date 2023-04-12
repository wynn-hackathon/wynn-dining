import { useState } from "react"
import { $all, _$ } from "@/lib/utils"

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
    const endpoint = 'https://cdn.contentful.com/spaces/osa9szwur3cb/environments/master/entries/4dV4l3i1cRm0i0edG1xLVP?access_token=maEy9u6BFyYAWn_QrHL4pvZi6zEMZGLCD_ICiCCq9nU';

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
    _$('.thankyou').classList.remove('d-none');
    _$('.infoDetail').classList.add('d-none');

    fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => { console.log(response) });
  };

  const handleClose = () => {
    _$('.thankyou').classList.add('d-none');
    _$('.infoDetail').classList.remove('d-none');
  }


  return (
    <div className="modal fade" id="reserveTableModal" tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close" onClick={handleClose}><i className="bi bi-x-lg"></i></button>
            <div className="reserveTable">
              <h2><span className="page-title">Reservation</span>{restaurant}</h2>
              <div className="infoTable">
                <h3>Your Table</h3>
                <p><span>Party size: </span>{people}<br></br> <span>Date: </span>{startDate + ""}<br></br> <span>Time: </span>{time} </p>
              </div>
              <div className="infoDetail">
                <h3>Your Detail</h3>
                <div className="yourInfo">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control userData" id="name" placeholder="Full name" />
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input type="email" className="form-control userData" id="email" placeholder="Email" />
                      </div>
                      <div className="col">
                        <input type="text" className="form-control userData" id="phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="text-center"><button type="submit" className="btn btn-primary" onClick={handleReserve}>Submit</button></div>
                  </form>
                </div>
              </div>
              <p className="thankyou d-none"> Thank you for your reservation at <br></br> {restaurant}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalReserveTable