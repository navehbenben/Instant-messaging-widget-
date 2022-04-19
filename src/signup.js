import React from "react";
import { Link,Navigate} from "react-router-dom";

//a placeholder component until the real one.

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = props
    }
    render(){
        if (this.state.bool==true){
            return(
                <Navigate to="/homepage"/>
            )
        }
        return(
            <div>
                sign up
                
                {this.state.name}
                
                <Link to="/login">fh</Link>
            </div>
        )
    }
}

export default SignUp