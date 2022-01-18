import React from 'react'

class footer extends React.Component {
  state={
    email:""
  }
  postFunc=(e)=>{
   e.preventDefault();
   console.log(this.state)
  }
 render(){
  const {name}=this.props

  return (  
    <footer id="footer" className="footer"> 
        
      
          <div className="footer-top">
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-5 col-md-12 footer-info">
                  <a href="index.html" className="logo d-flex align-items-center">
                    <img src="./logo.png" alt=""/>
                    <span>{name}</span>
                  </a>
                  <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                  <div className="social-links mt-3"> 
                    <a href="javascript:void(0)" className="linkedin"><i className="bi bi-telegram"></i></a>
                    <a href="javascript:void(0)" className="instagram"><i className="bi bi-whatsapp"></i></a>
                    <a href="javascript:void(0)" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
      
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="#services">Services</a></li>
                    {/* <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Terms of service</a></li> */}
                    {/* <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Privacy policy</a></li> */}
                  </ul>
                </div>
      
                <div className="col-lg-2 col-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Web Design</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Web Development</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Product Management</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Marketing</a></li>
                    <li><i className="bi bi-chevron-right"></i> <a href="javascript:void(0)">Graphic Design</a></li>
                  </ul>
                </div>
      
                <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                  <h4>Contact Us</h4>
                  <p>
                    Remote <br/>
                    <strong>Phone:</strong> +2349024195493<br/>
                    <strong>Email:</strong> itorophilip1998@example.com<br/>
                  </p>  
                </div>
      
              </div>
            </div>
          </div>
      
      
           
       
      
        </footer> 
        );
 }
}

export default footer;