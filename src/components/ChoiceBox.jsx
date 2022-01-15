import React from 'react';
class ChoiceBox extends React.Component {
   state={
    infos:[
        {
            name:"Apply for Job",
            body:"We offer job opportunity from our company and outside our company, apply now and get your dream job started!",
            url:'/join-us'
        },
        {
            name:"Find Developer(s)",
            body:"We offer good services by designing and maintaining your app from scratch at cheaper and affordable rate.",
            url:'/find-dev'
        },
        {
            name:"Employ Developer(s)",
            body:"We have developers from starters, intermidiate, Senior and professional and you can employ them from any category.",
            url:'/employ-dev'
        },
    ]
   }
    render() { 
        return (
            
         <div className="cards container my-4 py-5">
             <div className="row m-0 py-5">
                 <h3 className='text-pri'>Get Started <i class="fa fa-fighter-jet" aria-hidden="true"></i></h3>
            {
                this.state.infos.map((info,index)=>{ 
                  return(<div className="col-lg-4 "  >
                    <div className="infotTab border p-3 rounded-x link p-2  shadow py-4 mt-3">
                    <h4 className="name font-weight-bold">{info.name}</h4>
                    <p className="body py-3 text-justify">{info.body}</p>
                    <a href={info.url}  className="btn btn-secondary shadow">Got it <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                 </div>
                  );
                })
            }
             </div>
         </div>
        );
    }
}
 
export default ChoiceBox;