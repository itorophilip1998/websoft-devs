import React from 'react';
import { Link} from "react-router-dom"; 
class Header extends React.Component {
  state={ 
    ico:"bi-list",
  };
  navbars=[
    {
      name:"Home",
      url:"/" 
    },
    {
      name:"About",
      url:"#about" 
    },
     
    {
      name:"Contact",
      url:"/contact" 
    }
  ]
 

 handleSidbar=()=>{ 
 if(window.innerWidth > 991){
   return false
  }
    var fix=document.getElementById('navbar').classList 
    if(fix.contains('navbar-mobile')) {
       fix.remove('navbar-mobile'); 
       this.setState({ico:'bi-list'}) 
       }else{ 
        this.setState({ico:'bi-x'})  
         fix.add('navbar-mobile')  
       }
  } 


  clickLinkFunc () {
    // Navigator.push("url")
  }
  render() {

  const {name}=this.props
    return (
    <header id="header" className="header  header-scrolled  bg-white shadow-sm fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">


      <a href="/" className="logo d-flex align-items-center">
        <img src="./logo.png" alt=""/>
        <span>{name}</span>
      </a>

      <nav id="navbar" className="navbar ">
        <ul>
          {this.navbars.map((navbar,index)=>
            <li onClick={this.handleSidbar} key={index}> 
              {
                <Link className="nav-link scrollto px-lg-3 px-0 mt-3 mt-lg-0 link" to={navbar.url}>{navbar.name}</Link>
              }
            </li>
            )} 
          <li onClick={this.handleSidbar}><Link className="getstarted scrollto"  to="/getstarted">Get Started</Link></li>
        </ul>
        <i className={`bi ${this.state.ico} mobile-nav-toggle`}   onClick={this.handleSidbar}></i>
 
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  );
}
}
export default Header;