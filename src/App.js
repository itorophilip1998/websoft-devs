import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Blog from './components/blog/Blog';
import Blogs from './components/blog/Blogs';
import Post from './components/blog/Post';
import ChoiceBox from './components/ChoiceBox';
import ContactForm from './components/forms/ContactForm';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/Main';
import FindDev from "./components/forms/FindDev"
import EmployDev from "./components/forms/EmployDev"
import JoinUs from "./components/forms/JoinUs"
import NotFoundPage from './components/NotFoundPage';
class App extends React.Component {
state={
  name:"Websoft"
};

 render(){
   const {name}=this.state
  return (
      <Router>
        <Header name={name}/>  

        <Routes>
         
          <Route path="/" element={<Main/>} name={name}  exact/> 
          <Route path="/contact" element={<ContactForm />}  /> 
            {/* <Route path="/blogs" element={<Blogs/>} /> */}
            {/* <Route path="/blogs/:blogId" element={<Blog />} /> */}
            {/* <Route path="/blogs/post" element={<Post />} /> */}
          <Route path="/getstarted" element={<ChoiceBox/>} />
          {/* <Route path="/join-us" element={<JoinUs/>} /> */}
          {/* <Route path="/employ-dev" element={<EmployDev/>} /> */}
          {/* <Route path="/find-dev" element={<FindDev/>} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Footer  name={name} />
      </Router>
      
  );
 }
}

export default App;
