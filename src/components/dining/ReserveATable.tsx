import DatePicker from "react-datepicker"
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Link from "next/link";
import { $all, handleSticky, _$ } from "@/lib/utils";
import NonSSRWrapper from "../modal/NonSSRWrapper";
import ModalReserveTable from '@/components/dining/ModalReserveTable';


const ReserveATable = ({ diningDetail }: any) => {

  // Data
  const restaurantList: any = []
  const partySize: any = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests']
  const timeList: any = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM']

  diningDetail?.map((restaurant: any) => restaurantList.push(restaurant.fields.name));

  const [restaurant, setRestaurant] = useState("Select A Restaurant");
  const [startDate, setStartDate] = useState(new Date());
  const [size, setSize] = useState("2 Guests");
  const [time, setTime] = useState("05:30 PM");
  const [reserveInfo, setReserveInfo] = useState({
    people: "2 Guests",
    startDate: (moment(startDate).format('MM/DD/YYYY')),
    time: "05:30 PM"
  })


  const handleChange = (e: any) => {
    _$('.btnReserve').setAttribute('data-bs-toggle', 'modal');
    _$('.invalid-feedback.restaurant').classList.add('d-none');
    setRestaurant(e.target.text)
  }

  const handleReserve = (e: any) => {
    e.preventDefault();
    const all: any = $all('.data');
    const newData: any = {
      people: all[1].value,
      startDate: all[2].value,
      time: all[3].value
    }
    setReserveInfo(newData);
    (restaurant === "Select A Restaurant") && _$('.invalid-feedback.restaurant').classList.add('d-block');
    handleSticky(e)
  };
  return (
    <>
      <div>
        <div className="reserveATable">
          <form className="needs-validation formWrap">
            <div className="restaurants">
              <label>Restaurant</label>
              <button type="button" className="btn dropdown-toggle selectRestaurant" data-bs-toggle="dropdown" aria-expanded="false">{restaurant}</button>
              <input className="data" id="restaurantName" name="restaurant" type="hidden" value={restaurant} required />
              <ul className="dropdown-menu">
                {restaurantList?.map((restaurant: any, i: number) => <li key={i}>
                  <Link className="dropdown-item" href="#" onClick={handleChange}>{restaurant}</Link></li>)}
              </ul>
            </div>
            <div>
              <label>Party Size</label>
              <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{size}</button>
              <ul className="dropdown-menu">
                {partySize?.map((size: any, i: number) => <li key={i}><Link className="dropdown-item" href="#" onClick={(e: any) => setSize(e.target.text)}>{size}</Link></li>)}
              </ul>
              <input className="data" name="size1" type="hidden" value={size} />
            </div>
            <div className="date">
              <label>Date</label>
              <NonSSRWrapper><DatePicker selected={startDate} onChange={(startDate: any) => setStartDate(startDate)} />
                <input className="data" name="date" type="hidden" value={(moment(startDate).format('MM/DD/YYYY'))} /></NonSSRWrapper>
            </div>
            <div className="time">
              <label>Time</label>
              <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{time}</button>
              <ul className="dropdown-menu">
                {timeList?.map((time: any, i: number) => <li key={i}><Link className="dropdown-item" href="#" onClick={(e: any) => setTime(e.target.text)}>{time}</Link></li>)}
              </ul>
              <input className="data" name="time" type="hidden" value={time} />
            </div>
            <button className="btn btn-primary btnReserve" onClick={handleReserve} data-bs-toggle="" data-bs-target=".reserveTableModal">Reserve a Table</button>
          </form>
        </div>
        <div className="invalid-feedback restaurant text-center mt-3">Please Select a restaurant</div>
      </div>
      <ModalReserveTable info={reserveInfo} name={restaurant} />
    </>
  )
}

export default ReserveATable