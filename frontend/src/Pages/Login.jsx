import React, { useState } from 'react'

const Login = () => {



  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")







  const handleSubmit=()=>{
    const payload={
    email,pass
    }
  console.log("login",payload)
    //we are connectiong FE to BE
    fetch("http://localhost:8800/users/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then((res)=>{
      console.log(res)
    localStorage.setItem("token",res.token)
    
    })
    .catch(err=>console.log(err))
    
    
 
    setEmail("")
    setPass("")
   
  
  }









  return (
    <div>

<section class="vh-70" 
style={{backgroundColor: "black"}}
>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong"
        style={{borderRadius: "1rem"}}
        >
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div 
            // class="form-outline mb-4"
            >
              <input type="email" 
               name="email"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
              
              id="typeEmailX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div>
              <input type="password" 
                  name="pass"
                  value={pass}
                  onChange={(e)=>setPass(e.target.value)}
              
              
              
              id="typePasswordX-2" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX-2">Password</label>
            </div>

         
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" type="submit"
            onClick={handleSubmit}
            >Login</button>

            {/* <hr class="my-4"> */}

            <button class="btn btn-lg btn-block btn-primary" 
            style={{backgroundColor:"#dd4b39"}}

              type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
            <button class="btn btn-lg btn-block btn-primary mb-2" 
            style={{backgroundColor:" #3b5998"}}
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    </div>
  )
}

export default Login