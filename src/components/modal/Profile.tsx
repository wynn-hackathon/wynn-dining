import { _$, $id, $all, handleSticky, reserveDataUpdate } from "@/lib/utils"
import { CancelData, cmaAPI, getReserve, publicData } from "@/lib/contentful/reservation";
import NonSSRWrapper from '../../components/modal/NonSSRWrapper'
import Image from "next/image"
import moment from "moment"
import { useEffect, useState } from "react"

export const CTAs = ({ user }: any) => {
  const { nameRestaurant, partySize, date, time, email, name, phoneNumber } = user.fields;
  const [reserveInfo, setReserveInfo] = useState({
    restaurant: nameRestaurant,
    people: partySize,
    startDate: date,
    time: time,
    id: user.sys.id,
  })

  const handleEdit = (e: any) => {
    e.preventDefault();
    reserveDataUpdate(reserveInfo);
    handleSticky()
  };

  const handleCancel = async (e: any) => {
    const data = {
      "fields": {
        "nameRestaurant": {
          "en-US": nameRestaurant
        },
        "partySize": {
          "en-US": partySize
        },
        "date": {
          "en-US": date
        },
        "time": {
          "en-US": time
        },
        "status": {
          "en-US": "Canceled"
        },
        "email": {
          "en-US": email
        },
        "name": {
          "en-US": name
        },
        "phoneNumber": {
          "en-US": phoneNumber
        }
      }
    }
    e.preventDefault();
    e.target.parentElement.previousElementSibling.textContent = "Status: Canceled";
    e.target.parentElement.classList.add("d-none");
    const card = await getReserve(cmaAPI + user.sys.id)
    await CancelData(cmaAPI + user.sys.id, card.sys.version, data)
    await publicData(cmaAPI + user.sys.id + '/published', card.sys.version + 1)
  };

  return (
    <div>
      <button data-bs-toggle="modal" data-bs-target=".reserveTableUpdateModal" onClick={handleEdit} className="link edit"><i className="bi bi-pencil-square"></i> Edit</button>
      <button className="link cancel" onClick={handleCancel}><i className="bi bi-trash3"></i> Cancel</button>
    </div>
  )
}

export const Profile = ({ user }: any) => {
  const { id, createdAt, version } = user.sys
  const [createdDate, setCreatedDate] = useState(createdAt);


  useEffect(() => {
    setCreatedDate(moment(createdAt).format("MM/DD/YYYY"))
  }, [createdAt]);

  const { date, nameRestaurant, partySize, time, status } = user.fields
  return (
    <div className="profile_reservation">
      <div className="header">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <span>Reservation Placed: {createdDate}</span>
          </div>
          <div className="col">
            <div>Reservation# {id}</div>
          </div>
        </div>
      </div>
      <div className="detail">
        <div><span className="name">{nameRestaurant}</span></div>
        <div className="row row-cols-1">
          <div className="col">Party Size: {partySize}</div>
          <div className="col">Date: <NonSSRWrapper>{date}</NonSSRWrapper></div>
          <div className="col">Time: {time}</div>
        </div>
        <div className="ctas-profile">
          <div className="status">Status: {status}</div>
          {(status == "Booked") && <CTAs user={user} />}
        </div>
      </div>
    </div>
  )
}

const ModalProfile = ({ bookings, user }: any) => {
  const { email, name, phoneNumber } = user

  const reservations: any = bookings?.filter((item: any) => (email == item.fields.email))
  return (
    <div className="modal fade fullView profileModal" id="profileModal" tabIndex={-1} aria-labelledby="profile Modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"><i className="bi bi-x-lg"></i></button>
          <div className="modal-body ">
            <div className="W550">
              <div className="info">
                <div className="text-center">
                  <Image
                    alt={''}
                    src='/images/arun.jpg'
                    width='100'
                    height='100'
                    className="avatar" />
                </div>
                <h1>Your Profile</h1>
                <div className="userDetail">
                  <p className="label">Full Name</p>
                  <p className="data_info">{name}</p>
                </div>
                <div className="row userDetail">
                  <div className="col">
                    <p className="label">Email</p>
                    <p className="data_info">{email}</p>
                  </div>
                  <div className="col">
                    <p className="label">Phone Number</p>
                    <p className="data_info">{phoneNumber}</p>
                  </div>
                </div>
              </div>
              <div className="reverseTbl">
                <h2>Your reservations</h2>
                {reservations?.map((item: any, i: any) => <Profile user={item} key={i} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProfile