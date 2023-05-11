import DatePicker from "react-datepicker"
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Link from "next/link";
import { $all, handleSticky, _$, partySize, timeList, reserveData } from "@/lib/utils";
import NonSSRWrapper from "../modal/NonSSRWrapper";
import ModalReserveTable from '@/components/dining/ModalReserveTable';


const ReserveATable = ({ diningDetail, bookings }: any) => {
  // Data
  const restaurantList: any = []

  diningDetail?.map((restaurant: any) => restaurantList.push(restaurant.fields.name));

  const [restaurant, setRestaurant] = useState("Select A Restaurant");
  const [startDate, setStartDate] = useState(new Date());
  const [size, setSize] = useState("2 Guests");
  const [time, setTime] = useState("05:30 PM");
  const [reserveInfo, setReserveInfo] = useState({
    restaurant: restaurant,
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
      restaurant: all[0].value,
      people: all[1].value,
      startDate: all[2].value,
      time: all[3].value
    }
    setReserveInfo(newData);
    reserveData(newData);
    (restaurant === "Select A Restaurant") && _$('.invalid-feedback.restaurant').classList.add('d-block');
    handleSticky();
  };
  return (
    <>
      <div>
        <div className="reserveATable">
          <form className="formWrap">
            <div className="restaurants">
              <label>Restaurant</label>
              <button type="button" className="btn dropdown-toggle selectRestaurant" data-bs-toggle="dropdown" aria-expanded="false">{restaurant}</button>
              <input className="data" id="restaurantName" name="restaurant" type="hidden" defaultValue={restaurant} required />
              <ul className="dropdown-menu">
                {restaurantList?.map((restaurant: any, i: number) => <li key={i}>
                  <Link className="dropdown-item" href="" onClick={handleChange}>{restaurant}</Link></li>)}
              </ul>
            </div>
            <div>
              <label>Party Size</label>
              <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{size}</button>
              <ul className="dropdown-menu">
                {partySize?.map((size: any, i: number) => <li key={i}><Link className="dropdown-item" href="" onClick={(e: any) => setSize(e.target.text)}>{size}</Link></li>)}
              </ul>
              <input className="data" name="size1" type="hidden" defaultValue={size} />
            </div>
            <div className="date">
              <label>Date</label>
              <NonSSRWrapper><DatePicker selected={startDate} onChange={(startDate: any) => setStartDate(startDate)} />
                <input className="data" name="date" type="hidden" defaultValue={(moment(startDate).format('MM/DD/YYYY'))} /></NonSSRWrapper>
            </div>
            <div className="time">
              <label>Time</label>
              <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{time}</button>
              <ul className="dropdown-menu">
                {timeList?.map((time: any, i: number) => <li key={i}><Link className="dropdown-item" href="" onClick={(e: any) => setTime(e.target.text)}>{time}</Link></li>)}
              </ul>
              <input className="data" name="time" type="hidden" defaultValue={time} />
            </div>
            <button className="btn btn-primary btnReserve" onClick={handleReserve} data-bs-toggle="" data-bs-target=".reserveTableModal">Reserve a Table</button>
          </form>
        </div>
        <div className="invalid-feedback restaurant text-center mt-3">Please Select a restaurant</div>
      </div>
      <ModalReserveTable />
    </>
  )
}

export default ReserveATable