import { $all, _$ } from "@/lib/utils"

const ModalLogin = ({ user }: any) => {
  const { email, password } = user
  const handleLogin = (e: any) => {
    e.preventDefault();
    const all: any = $all('#login .user_Data');
    if ((all[0].value == email) && (all[1].value == password)) {
      _$('.invalid-feedback.password').classList.remove('d-block');
      _$('.account .login').classList.toggle('d-none')
      _$('.account-m .login').classList.toggle('d-none')
      _$('.account .logout').classList.toggle('d-none')
      _$('.account-m .logout').classList.toggle('d-none')
      _$('.loginModal .btn-close').click();
      _$('.view_profile').click();

    } else {
      _$('.invalid-feedback.password').classList.add('d-block');
      _$('.account .login').classList.toggle('d-none')
      _$('.account-m .logout').classList.add('d-none')
      _$('.account-m .login').classList.toggle('d-none')
      _$('.account-m .logout').classList.add('d-none')
    }
  }

  const togglePass = (e: any) => {
    e.target.classList.toggle('show');
    e.target.classList.contains('show') ? (e.target.textContent = "Hide", e.target.previousElementSibling.type = "text") : (e.target.textContent = "Show", e.target.previousElementSibling.type = "password");
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
              <form id="login" onSubmit={handleLogin} >
                <div className="mb-3">
                  <label>Email</label>
                  <input type="text" className="form-control user_Data" id="userName" required />
                  <input type="hidden" id="user_profile" value={email}></input>
                </div>
                <div className="mb-3 password">
                  <label>Password</label>
                  <input type="password" className="form-control user_Data" id="currPassword" required />
                  <div className="show-hide" onClick={togglePass}>Show</div>
                  <div className="invalid-feedback password mt-3 text-danger">Password does not match</div>
                </div>
                <div className="ctas text-center">
                  <div className="text-center"><button className="btn btn-primary mt-3">Login</button></div>
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
