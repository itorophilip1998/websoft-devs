import React from 'react'
class Team extends React.Component {
    state={
     teams:[
         {
             name:"Itoro Philip",
             description:"CEO/Software Engineer/Lead Frontend Team",
             details:"CEO of DevSoft, Fullstack Developer, Senior Software Engineer, Studied Computer Science Federal Polytechnic Oko",
             img:"./img/team/team-5.jpg",
             twitter:'/me',
             facebook:'',
             instagram:'',
             linkedin:'',
         },
         { 
            name:"Gideon Moses",
            description:"Software Engineer/Lead Backend Team",
            details:"Fullstack Developer, Senior Software Engineer, Studied Computer Science Federal Polytechnic Oko",
            img:"./img/team/team-6.jpg",
            twitter:'',
            facebook:'',
            instagram:'',
            linkedin:'',
         },
         {
            name:"Emmanuel Imeh",
            description:"UIUX Designer/Lead Designing Team",
            details:"CEO of DevSoft, Fullstack Developer, Senior Software Engineer, Studied Computer Science Federal Polytechnic Oko",
            img:"./img/team/team-5.jpg",
            twitter:'',
            facebook:'',
            instagram:'',
            linkedin:'',
         },
         {
            name:"Prince Akpan",
            description:"Software Engineer/Lead Android Team",
            details:"CEO of DevSoft, Fullstack Developer, Senior Software Engineer, Studied Computer Science Federal Polytechnic Oko",
            img:"./img/team/team-5.jpg",
            twitter:'',
            facebook:'',
            instagram:'',
            linkedin:'',
         },
              
     ]
    };
   
    render() { 
        return (
            <section id="team" className="team">
            <div className="container" data-aos="fade-up">
              <header className="section-header">
                <h2>Team</h2>
                <p>Meet Our Team Officers</p>
              </header>

              <div className="row gy-4">
               {this.state.teams.map((team,index)=>
                <div key={index} className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="member">
                  <div className="member-img">
                    <img src={team.img}  className="img-fluid" alt=""/>
                    <div className="social bg-light">
                      <a href={team.twitter} target="_blank"><i className="bi bi-twitter"></i></a>
                      <a href={team.facebook} target="_blank"><i className="bi bi-facebook"></i></a>
                      <a href={team.instagram} target="_blank"><i className="bi bi-instagram"></i></a>
                      <a href={team.linkedin} target="_blank"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{team.name}</h4>
                    <span style={{ fontSize:13 }}>{team.description}</span>
                    <p>{team.details}</p>
                  </div>
                </div>
              </div>
               )};
              </div>
            </div>
          </section>
        );
    }
}
 
export default Team;