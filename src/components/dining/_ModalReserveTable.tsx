const contentful1 = require('contentful-management')
import { $all, _$, ValidateFormWithJS } from "@/lib/utils"


export const Connect = async () => {
  let client = await contentful1.createClient({
    accessToken: 'CFPAT-4uPlmIWwdVMmGyYsOewFE9cH7VNT20YHr79cerLmOJs'
  });

  let space = await client.getSpace('osa9szwur3cb')
  return await space.getEnvironment('master')
}

const ModalReserveTable = ({ info }: any) => {
  const { restaurant, startDate, people, time } = info

  const handleReserve = (e: any) => {
    e.preventDefault();
    ValidateFormWithJS();
    _$('.thankyou').classList.remove('d-none');
    _$('.w550').classList.add('submitted');

    const all = $all('.userData');
    const CreateCard = async (env: any) => {
      let card = await env.createEntry('reserveTable', {
        fields: {
          nameRestaurant: {
            'en-US': restaurant
          },
          partySize: {
            'en-US': people
          },
          date: {
            'en-US': startDate,
          },
          time: {
            'en-US': time,
          },
          name: {
            'en-US': all[0].value
          },
          email: {
            'en-US': all[1].value
          },
          phoneNumber: {
            'en-US': all[2].value
          }
        }
      })
      card.publish()
    }

    (async () => {
      let env = await Connect();
      await CreateCard(env)
    })();
  };

  const handleClose = () => {
    _$('.thankyou').classList.add('d-none');
    _$('.w550').classList.remove('submitted');
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


