import { $all, _$, ValidateFormWithJS } from "@/lib/utils"
import NonSSRWrapper from "../modal/NonSSRWrapper";

// export const connectContentful = async () => {
//   let client1 = await contentful_management.createClient({
//     accessToken: 'CFPAT-rO7vL1rzOh6JMHsjJ3ieAs9uEqK5zWv_aYo3uCJMThQ'
//   });
//   let space1 = await client1.getSpace('osa9szwur3cb')
//   return await space1.getEnvironment('master')
// }


const ModalReserveTable = ({ info, name }: any) => {
  const { people, startDate, time } = info
  const handleClose = () => {
    _$('.thankyou').classList.add('d-none');
    _$('.w550').classList.remove('submitted');
  }
  // const CreateCard = async (env: any, data: any) => {
  //   let card = await env.createEntry('reserveTable', {
  //     fields: {
  //       nameRestaurant: {
  //         'en-US': name
  //       },
  //       partySize: {
  //         'en-US': people
  //       },
  //       date: {
  //         'en-US': startDate,
  //       },
  //       time: {
  //         'en-US': time,
  //       },
  //       name: {
  //         'en-US': data[0].value
  //       },
  //       email: {
  //         'en-US': data[1].value
  //       },
  //       phoneNumber: {
  //         'en-US': data[2].value
  //       }
  //     }
  //   })
  //   card.publish()
  // }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    ValidateFormWithJS();
    _$('.thankyou').classList.remove('d-none');
    _$('.w550').classList.add('submitted');
    const all: any = $all('.userData');
    //let env = await connectContentful();
    // await CreateCard(env, all)
  }

  return (
    <div className="modal fade fullView reserveTableModal" id="reserveTableModal" tabIndex={-1} aria-labelledby="Reserve Table" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close" onClick={handleClose} ><i className="bi bi-x-lg"></i></button>
          <NonSSRWrapper>
            <div className="modal-body ">
              <div className="w550">
                <h2><span className="page-title">Reservation</span>{name}</h2>
                <div className="infoTable">
                  <h3>Your Table</h3>
                  <p><span>Party size: </span>{people}<br></br> <span>Date: </span>{startDate + ""}<br></br> <span>Time: </span>{time} </p>
                </div>
                <div className="infoDetail">
                  <h3>Your Detail</h3>
                  <div className="yourInfo">
                    <form onSubmit={handleSubmit}>
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
                <p className="thankyou d-none"> Thank you for your reservation at <br></br> {name}</p>
              </div>
            </div>
          </NonSSRWrapper>
        </div>
      </div >
    </div >
  )
}

export default ModalReserveTable


