import React from 'react'; 
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component {
    render() { 
       let style={
                
            marginTop: 2, 
            fontSize: 120,
            fontFamily: "Arial",
            margin:0,
    }
        return (
            
            <div>
                <div className="container row m-0 my-5 py-5">
              
                        <div className="sidebar col-lg-5 m-auto ">
                            <h1 style={style} className="h1 text-danger">404</h1> 
                    <h1>LOOKS LIKE YOU'RE LOST</h1>
                    <span>This page you are looking for is not available!</span>
                    <br/> <br/>
                    <Link to="/" >GO TO HOME &nbsp;&nbsp;&nbsp; <i className="fa fa-long-arrow-right"></i> </Link>
                    </div>
                    <div class="content col-lg-4 m-auto order-last order-md-first">
                    <img src="./img/bulb.jpg" alt="bulb" width="80%" />
                </div>
                </div>
            </div>
        
        );
    }
}
 
export default NotFoundPage;