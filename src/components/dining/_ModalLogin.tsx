const contentful = require('contentful')
import { $all, _$, ValidateFormWithJS } from "@/lib/utils"
import { useState } from "react";
import { useRouter } from "next/router";


const ModalLogin = () => {
  const router = useRouter()

  const [users, setUsers] = useState({
    email: "",
    name: "",
    password: "",
    phoneNumber: ""
  });

  client.getEntry('4dV4l3i1cRm0i0edG1xLVP').then((entry: any) => setUsers({
    email: entry.fields.email,
    name: entry.fields.name,
    password: entry.fields.password,
    phoneNumber: entry.fields.phoneNumber
  }))

  const handleLogin = (e: any) => {
    e.preventDefault();
    const all = $all('#login .user_Data');
    if ((all[0].value == users.email) && (all[1].value == users.password)) {
      _$('.invalid-feedback.password').classList.remove('d-block');
      router.push('/diningPage')
      _$('.btn-close').click();
      _$('.account .login').classList.toggle('d-none')
      _$('.account-m .login').classList.toggle('d-none')
      _$('.account .logout').classList.toggle('d-none')
      _$('.account-m .logout').classList.toggle('d-none')

    } else {
      _$('.invalid-feedback.password').classList.add('d-block');
      _$('.account .login').classList.toggle('d-none')
      _$('.account-m .logout').classList.add('d-none')
      _$('.account-m .login').classList.toggle('d-none')
      _$('.account-m .logout').classList.add('d-none')
    }
  }

  return (
    <div className="modal fade fullView loginModal" id="loginModal" tabIndex={-1} aria-labelledby="Login" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn-close"><i className="bi bi-x-lg"></i></button>
          <div className="modal-body ">
            <div className="w350">
              <div className="logo"></div>
              <h2 className="title">Login</h2>
              <p className="text-center note">Sign in and start managing your reservations</p>
              <form onSubmit={handleLogin} id="login">
                <div className="mb-3">
                  <label>Email</label>
                  <input type="text" className="form-control user_Data" id="userName" required />
                  <input type="hidden" id="user_profile" value={users.email}></input>
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control user_Data" id="currPassword" required />
                  <div className="invalid-feedback password mt-3 text-danger">Password does not match</div>
                </div>
                <div className="ctas text-center">
                  <div className="text-center"><button type="submit" className="btn btn-primary mt-3">Login</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default ModalLogin

export const client = contentful.createClient({
  space: 'osa9szwur3cb',
  accessToken: 'maEy9u6BFyYAWn_QrHL4pvZi6zEMZGLCD_ICiCCq9nU'
});