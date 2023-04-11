import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const ReserveATable = ({ diningDetail }: any) => {

  // Format Date
  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  // Data
  const restaurantList = [null]
  const partySize = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests']
  const timeList = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM']
  diningDetail.map((restaurant: any) => restaurantList.push(restaurant.fields.name));

  const [startDate, setStartDate] = useState(new Date());
  const [restaurant, setRestaurant] = useState("Select A Restaurant");
  const [size, setSize] = useState("2 Guests");
  const [time, setTime] = useState(formatAMPM(new Date()));

  return (
    <div className="reserveATable">
      <div className="formWrap">
        <div className="restaurants">
          <label>Restaurant</label>
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{restaurant}</button>
          <ul className="dropdown-menu">
            {restaurantList.map((restaurant: any, i: number) => <li key={i}><a className="dropdown-item" href="#" onClick={(e: any) => setRestaurant(e.target.text)}>{restaurant}</a></li>)}
          </ul>
        </div>
        <div>
          <label>Date</label>
          <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
        </div>
        <div>
          <label>Party Size</label>
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{size}</button>
          <ul className="dropdown-menu">
            {partySize.map((size: any, i: number) => <li key={i}><a className="dropdown-item" href="#" onClick={(e: any) => setSize(e.target.text)}>{size}</a></li>)}
          </ul>
        </div>
        <div>
          <label>Time</label>
          <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">{time}</button>
          <ul className="dropdown-menu">
            {timeList.map((time: any, i: number) => <li key={i}><a className="dropdown-item" href="#" onClick={(e: any) => setTime(e.target.text)}>{time}</a></li>)}
          </ul>
        </div>
      </div>
      <button className="btn btn-primary btnReserve">Reserve a Table</button>
    </div>
  )
}

export default ReserveATable