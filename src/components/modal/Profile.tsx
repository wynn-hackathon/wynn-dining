import { _$ } from "@/lib/utils"
import NonSSRWrapper from '../../components/modal/NonSSRWrapper'
import Image from "next/image"

export const Profile = ({ user }: any) => {
  const { date, nameRestaurant, partySize, time, status } = user.fields
  return (
    <tr>
      <td>{nameRestaurant}</td>
      <td>{partySize}</td>
      <td><NonSSRWrapper>{date}</NonSSRWrapper></td>
      <td>{time}</td>
      <td className="status">{status}</td>
    </tr>
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
                <div className="table-responsive">
                  <table className="table align-middle table-striped">
                    <thead>
                      <tr>
                        <th>Restaurant</th>
                        <th>Party Size</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
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
      </div>
    </div>
  )
}

export default ModalProfile