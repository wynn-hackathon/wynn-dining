import { _$, partySize, timeList, ValidateFormWithJS, $all, $id } from "@/lib/utils";
import NonSSRWrapper from "../modal/NonSSRWrapper";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { useState } from "react";
import { CancelData, publicData, cmaAPI, getReserve } from "@/lib/contentful/reservation";

const ModalReserveTable = ({ user }: any) => {
  const restaurant: any = $id("restaurantNameModal1");
  const [startDate1, setStartDate1] = useState(new Date());

  const handleChange = (des: any, target: any) => {
    des.textContent = target.text;
  }

  const handleClose = () => {
    _$('.thankyouUpdate').classList.add('d-none');
    _$('.w550Update').classList.remove('submitted');
  }

  //Handel submit a reservation
  const handleUpdate = async (e: any) => {
    const size: any = $id('partySizeValue1');
    const date: any = _$('.react-datepicker__input-container input');
    const time: any = $id('timeValue1');
    const id: any = $id('idEntry');

    const arrData: any = $all('.userData')
    const data = {
      "fields": {
        "nameRestaurant": {
          "en-US": restaurant.textContent
        },
        "partySize": {
          "en-US": size?.textContent
        },
        "date": {
          "en-US": date?.value
        },
        "time": {
          "en-US": time?.textContent
        },
        "status": {
          "en-US": "Booked"
        },
        "email": {
          "en-US": arrData[1]?.value
        },
        "name": {
          "en-US": arrData[0]?.value
        },
        "phoneNumber": {
          "en-US": arrData[2]?.value
        }
      }
    }
    e.preventDefault();
    e.stopPropagation();
    ValidateFormWithJS();

    const card = await getReserve(cmaAPI + id?.value)

    await CancelData(cmaAPI + id?.value, card.sys.version, data)
    await publicData(cmaAPI + id?.value + '/published', card.sys.version + 1)
    _$('.thankyouUpdate').classList.remove('d-none');
    _$('.w550Update').classList.add('submitted');
  }

  return (
    <div className="modal fade fullView reserveTableUpdateModal" id="reserveTableUpdateModal" tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close" onClick={handleClose} ><i className="bi bi-x-lg"></i></button>
          <NonSSRWrapper>
            <div className="modal-body ">
              <div className="w550 w550Update">
                <h2 ><span className="page-title">Reservation</span><span id="restaurantNameModal1"></span></h2>
                <form className="" onSubmit={handleUpdate}>
                  <div className="infoTable">
                    <h3>Your Table</h3>
                    <input type="hidden" id="idEntry" />
                    <div className="input-group input-group-sm mb-3">
                      <span className="input-group-text" id="partySize1">Party Size</span>
                      <button type="button" className="btn dropdown-toggle input-reserve size1" id="partySizeValue1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                      <ul className="dropdown-menu">
                        {partySize?.map((size: any, i: number) => <li key={i}><Link className="dropdown-item" href="#" onClick={(e: any) => handleChange(_$(".size1"), e.target)}>{size}</Link></li>)}
                      </ul>

                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <label className="input-group-text" htmlFor="inputGroupSelect01">Date</label>
                      <NonSSRWrapper>
                        <DatePicker selected={startDate1} onChange={(startDate1: any) => setStartDate1(startDate1)} />
                      </NonSSRWrapper>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                      <label className="input-group-text" htmlFor="inputGroupSelect01">Time</label>
                      <button type="button" className="btn dropdown-toggle input-reserve serve-time1" id="timeValue1" data-bs-toggle="dropdown" aria-expanded="false"></button>
                      <ul className="dropdown-menu">
                        {timeList?.map((time: any, i: number) => <li key={i}><Link className="dropdown-item" href="#" onClick={(e: any) => handleChange(_$(".serve-time1"), e.target)}>{time}</Link></li>)}
                      </ul>

                    </div>
                  </div>
                  <div className="infoDetail mt-5">
                    <h3>Your Detail</h3>
                    <div className="yourInfo">
                      <div className="mb-3">
                        <input type="text" className="form-control userData" id="name1" defaultValue="Kannamkaavil, Arun" placeholder="Full name *" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control userData" id="email1" disabled defaultValue='wynnhackathon@gmail.com' placeholder="Email *" required />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control userData" id="phone1" defaultValue='1234567890' placeholder="Phone" />
                      </div>
                      <div className="ctas">
                        <div className="text-center"><button type="button" className="btn btn-secondary mt-3" data-bs-dismiss="modal">Cancel</button></div>
                        <div className="text-center"><button type="submit" className="btn btn-primary mt-3">Submit</button></div>
                      </div>
                    </div>
                  </div>
                  <div className="thankyou thankyouUpdate d-none mt-5">
                    <p>Thank you for your reservation at <br></br>our restaurant.</p>
                    <div className="text-center"><button type="button" className="btn btn-secondary mt-3" onClick={handleClose} data-bs-dismiss="modal">Back to Restaurant</button></div>
                  </div>
                </form>
              </div>
            </div>
          </NonSSRWrapper>
        </div>
      </div >
    </div >
  )
}

export default ModalReserveTable


