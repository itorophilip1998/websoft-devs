import React from 'react'

class ContactForm extends React.Component {
  state={
    name:"",
    email:"",
    message:"",
    subject:"", 
  }

submitForm=(e)=>{ 
    e.preventDefault();
    console.log(e,"test")
}
 render()
 {
  
  return (       
    <section id="contact" className="contact"> 
     <div className="container" data-aos="fade-up">
   
       <header className="section-header">
         <h2>Contact</h2>
         <p>Contact Us</p>
       </header>
   
       <div className="row gy-4">
         <div className="col-lg-6 " >
           <div className="row gy-4">
             <div className="col-md-6 shadow">
               <div className="info-box">
                 <i className="bi bi-geo-alt"></i>
                 <h3>Address</h3>
                 <p>Remote</p>
               </div>
             </div>
             <div className="col-md-6 shadow">
               <div className="info-box">
                 <i className="bi bi-telephone"></i>
                 <h3>Call Us</h3>
                 <p>+2349024195493</p>
               </div>
             </div>
             <div className="col-md-6 shadow">
               <div className="info-box">
                 <i className="bi bi-envelope"></i>
                 <h3>Email Us</h3>
                 <p>websoft@gmail.com</p>
               </div>
             </div>
             <div className="col-md-6 shadow">
               <div className="info-box">
                 <i className="bi bi-clock"></i>
                 <h3>Open Hours</h3>
                 <p>24/hours Everyday</p>
               </div>
             </div>
           </div>
   
         </div>
   
         <div className="col-lg-6">
           <form onSubmit={this.submitForm} className="php-email-form">
             <div className="row gy-4">
   
               <div className="col-md-6">  
                 <input type="text" onChange={(e)=> this.setState({name:e.target.value})} name="name" className="form-control" placeholder="Your Name" required/>
               </div>
   
               <div className="col-md-6 ">
                 <input  onChange={(e)=> this.setState({email:e.target.value})} type="email" className="form-control" name="email" placeholder="Your Email" required/>
               </div>
   
               <div className="col-md-12">
                 <input type="text"  onChange={(e)=> this.setState({subject:e.target.value})} className="form-control" name="subject" placeholder="Subject" required/>
               </div>
   
               <div className="col-md-12">
                 <textarea  onChange={(e)=> this.setState({message:e.target.value})} className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
               </div>
   
               <div className="col-md-12 text-center">
                 <div className="loading">Loading</div>
                 <div className="error-message"></div>
                 <div className="sent-message">Your message has been sent. Thank you!</div>
   
                 <button type="submit" >Send Message</button>
               </div>
   
             </div>
           </form>
   
         </div>
   
       </div>
   
     </div>
   
   </section> 
       );
 }
} 

export default ContactForm;