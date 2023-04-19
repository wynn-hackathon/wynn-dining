import { client } from "../dining/_ModalLogin";
import { _$ } from "@/lib/utils"
import { useState } from "react";

export const Info = ({ user }: any) => {
  const { email, name, phoneNumber } = user?.fields
  return (
    <div className="info">
      <h2>Your Profile</h2>
      {/* <p className="text-center note">Details will be saved to streamline future reserve a table</p> */}
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
  )
}

export const Profile = ({ user }: any) => {
  const { date, nameRestaurant, partySize, time } = user.fields
  return (
    <tr>
      <td>{nameRestaurant}</td>
      <td>{partySize}</td>
      <td>{date}</td>
      <td>{time}</td>
    </tr>
  )
}

const ModalProfile = () => {
  const [list, setList] = useState([]);
  const user: any = _$('#loginModal #user_profile')?.value

  const getReserve = async () => {
    const lists = await client.getEntries({ content_type: 'reserveTable' })
    setList(lists.items);
  }

  (async () => {
    await getReserve()
  })();

  const reservations: any = list?.filter((item: any) => (user == item.fields.email))
  return (
    <div className="modal fade fullView profileModal" id="profileModal" tabIndex={-1} aria-labelledby="profile Modal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"><i className="bi bi-x-lg"></i></button>
          <div className="modal-body ">
            <div className="W550">
              {(reservations[0]) && <Info user={reservations[0]} />}
              <div className="reverseTbl">
                <h3>Your reservations</h3>
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>Restaurant</th>
                        <th>Party Size</th>
                        <th>Date</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reservations?.map((item: any, i: any) => <Profile user={item} key={i} />)}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default ModalProfile