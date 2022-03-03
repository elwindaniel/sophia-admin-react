import { Switch,Route } from "react-router-dom"
import Forgot from "./forgot"
import Login from "./login"
import Otp from "./otp"
import ResetPassword from "./resetPassword"

function Auth() {
    return (
        <div>
          
           <Switch> 
               <Route exact path="/login" component={Login} />
               <Route exact path="/forgot-password" component={Forgot}/>
               <Route exact path="/otp" component={Otp} />
               <Route exact path="/reset-password" component={ResetPassword} />   
           </Switch>
        </div>
    )
}

export default Auth
