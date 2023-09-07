
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beth from './Beth.jpg';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
function Login() {
  return (
    <section class="vh-100 mt-50">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={Beth}
          class="img-fluid" alt="Sample image" width="700px"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

 
          <div class="form-outline mb-10">
          <label class="form-label fs-5" for="form3Example3">UserName</label>
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid UserName " /><br/>
          </div>

       
          <div class="form-outline mb-3">
          <label class="form-label fs-5" for="form3Example4 ">Password</label>

            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            {/* <a href="#!" class="text-body">Forgot password?</a> */}
          </div>
          {/* // style="padding-left: 2.5rem; padding-right: 2.5rem;" */}
          <div class="text-center text-lg-start mt-4 pt-2 ">
            <button type="button" class="btn btn-primary btn-lg fs-6" 
            >Login</button>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2023. All rights reserved.
    </div>

    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</section>
  );
}

export default Login;
