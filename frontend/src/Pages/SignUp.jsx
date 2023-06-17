import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [pass,setPass]=useState("")
const [pass2,setPass2]=useState("")




const handleSubmit=()=>{
  const payload={
    name,email,pass,pass2
  }
  //console.log(payload)
  //we are connectiong FE to BE
  fetch("http://localhost:8800/users/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(payload)
  }).then(res=>res.json())
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  
  
  setName("")
  setEmail("")
  setPass("")
  setPass2("")

}





const navigate=useNavigate()
const Loginpage=()=>{
    navigate("/login")




}

  return (
    <div>
<section class="vh-100 bg-image"
style={{backgroundColor:  "black"}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" 
          style={{borderRadius: "15px"}}
          >
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div 
                >
                  <input type="text" 
                  name="username"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}

                  id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div >
                  <input type="email" 
                   name="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                  
                  id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div 
                // class="form-outline mb-4"
                >
                  <input type="password" 
                   name="pass"
                   value={pass}
                   onChange={(e)=>setPass(e.target.value)}

                  
                  id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                <div>
                  <input type="password" 
                   value={pass2}
                   onChange={(e)=>setPass2(e.target.value)}
                  
                  
                  
                  
                  id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>

                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    
                    onClick={handleSubmit}
                    
                    >Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u onClick={Loginpage}>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SignUp