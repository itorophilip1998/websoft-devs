import React from 'react';
import Team from './Team';
import FAQ from './FAQ';
import ChoiceBox from './ChoiceBox';
class Main extends React.Component {
  state={
    email:""
  }
    render() {
      return ( 
        <div> 
          {/* Start Hero */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column  justify-content-center text-justify">
            <h1 data-aos="fade-up">We offer modern solutions for growing your business </h1>
            <h6 data-aos="fade-up" data-aos-delay="400" style={{fontSize:"20px !important" }} >We are team of talented Designers, Developers, Engineers and Content Writters making web-sites, Web-apps as well as Mobile-apps and Desktop-apps for your product to go global</h6>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <a href="/getstarted"   className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Get Started</span>
                  <i className="bi bi-arrow-right"></i>
                </a> 
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src="./img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div> 
      </section>
     {/* // <!-- End Hero --> */}

    <main id="main">  
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
  
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
  
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>Who We Are</h3>
                <h2>We Create, <br className="d-block d-md-none"/> We Develop,<br className="d-block d-md-none"/> We Manage</h2>
                <p>
                   We offers quality services for our client by making modern web apps, modern mobile apps and web sites as well as desktop(crossplatform) application for both small and large scale businesses.
        
               <br/> We also recruit intent who are willing to explore in Tech
                </p>
                <div className="text-center text-lg-start">
                  <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Join Us</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-6 d-flex align-items-center   order-md-first text-center" data-aos="zoom-out" data-aos-delay="200">
              <img src="./img/features-3.png" className="img-fluid w-75 m-auto" alt="" />
            </div>
  
          </div>
        </div>
  
      </section>
      {/* <!-- End About Section --> */}
  
      {/* <!-- ======= Values Section ======= --> */}
      <section id="values" className="values">
  
        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Our Values</h2>
            <p>What We Do Best</p>
          </header>
  
          <div className="row">
  
            <div className="col-lg-4">
              <div className="box" data-aos="fade-up" data-aos-delay="200">
                <img src="./img/values-1.png" className="img-fluid" alt="" />
                <h3>Smart Working</h3>
                <p>We do our best to make sure every tool and persons is available to develiver a task.</p>
              </div>
            </div>
  
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="400">
                <img src="./img/values-2.png" className="img-fluid" alt=""/>
                <h3>Develivery</h3>
                <p>No delay or time wasting when it comes to delivering our apps, we take time to deliver on time.</p>
              </div>
            </div>
  
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="600">
                <img src="./img/values-3.png" className="img-fluid" alt=""/>
                <h3>Quality Services</h3>
                <p>We render quality service to our client and nice content from scratch.</p>
              </div>
            </div>
  
          </div>
  
        </div>
  
      </section>
      {/* <!-- End Values Section --> */}
  
      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
  
          <div className="row gy-4">
  
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <div>
                  <span >50</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-journal-richtext" style={{color: "#ee6c20" }}></i>
                <div>
                  <span>50<sup>+</sup></span>
                  <p>Projects</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-headset" style={{ color: "#15be56" }}></i>
                <div>
                  <span >20</span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-people" style={{color: "#bb0852"}}></i>
                <div>
                  <span >15<sup>+</sup></span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
      {/* <!-- End Counts Section --> */}
  
      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" className="features">
  
        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Features</h2>
            <p>What We Can Do</p>
          </header>
  
          <div className="row">
  
            <div className="col-lg-6">
              <img src="./img/features.png" className="img-fluid" alt="" />
            </div>
  
            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
  
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Database Management System</h3>
                  </div>
                </div>
  
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Multitenant Application System</h3>
                  </div>
                </div>
  
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Bitcoin/Mining Application</h3>
                  </div>
                </div>
  
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Special Content Application System</h3>
                  </div>
                </div>
  
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Social Media/Blogs</h3>
                  </div>
                </div>
  
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Mini/Large Company Project Application</h3>
                  </div>
                </div>
  
              </div>
            </div>
  
          </div> 
          {/* <!-- / row --> */}
  
          {/* <!-- Feature Tabs --> */}
          <div className="row feture-tabs" data-aos="fade-up">
            <div className="col-lg-6">
              <h3>We are Not limited to creating</h3>
  
              {/* <!-- Tabs --> */}
              <ul className="nav nav-pills mb-3">
                <li>
                  <a className="nav-link active" data-bs-toggle="pill" href="#tab1">What Else Do We Do</a>
                </li> 
              </ul>
              {/* <!-- End Tabs --> */}
  
              {/* <!-- Tab Content --> */}
              <div className="tab-content">
  
                <div className="tab-pane fade show active" id="tab1"> 
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>We Train</h4>
                  </div>
                  <p>We tran people in divers aspect of Tech of worl such as Web development, Mobile Development, Product Management and Makerting, UIUX Designing etc.</p>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-check2"></i>
                    <h4>We Employ</h4>
                  </div>
                  <p>We make people to be job-ready for any opportuinity that bounce their way, we also employ Intent and senior developers and Designers including makerters.</p>
                </div>
                {/* <!-- End Tab 1 Content --> */}
   
              </div>
  
            </div>
  
            <div className="col-lg-6">
              <img src="./img/features-2.png" className="img-fluid" alt=""/>
            </div>
  
          </div>
          {/* <!-- End Feature Tabs --> */}
   
  
        </div>
  
      </section>
      {/* <!-- End Features Section --> */}
  
      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services">
  
        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Services</h2>
            <p>What We Offer</p>
          </header>
  
          <div className="row gy-4">
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-box blue">
                <i className="ri-discuss-line icon"></i>
                <h3>Web Applications</h3>
                <p>We create website and web application for large and small company and price is affordable.</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-box orange">
                <i className="ri-discuss-line icon"></i>
                <h3>Mobile Applications</h3>
                <p>We create IOS application and Andriod mobile application with affordable price.</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="service-box green">
                <i className="ri-discuss-line icon"></i>
                <h3>Desktop Applications</h3>

                <p>We creat Desktop application for Windows opersting system, Mac operating system and linux Operating system.</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="service-box red">
                <i className="ri-discuss-line icon"></i>
                <h3>Content Writting</h3>
                <p>Create from no where and modernise your content for users to read and know more about you and your product.</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="service-box purple">
                <i className="ri-discuss-line icon"></i>
                <h3>Software Makerting/Mangement.</h3>
                <p>We manage your site as well as marketting your your product and advertising your company.</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="service-box pink">
                <i className="ri-discuss-line icon"></i>
                <h3>UIUX Designs</h3>
                <p>We design and create prototype for your product uniquely and also create users experience and users interfaces for your product.</p>
                <a href="#" className="read-more"><span>Read More</span> <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
          </div>
  
        </div>
  
      </section>
      {/* <!-- End Services Section --> */}
   
  
      {/* <!-- ======= F.A.Q Section ======= --> */}
        <FAQ/>
      {/* <!-- End F.A.Q Section --> */}


  
      {/* <!-- ======= Portfolio Section ======= --> */}
      <section id="portfolio" className="portfolio">
  
        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Portfolio</h2>
            <p>Check our latest work</p>
          </header>
   
  
          <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="./img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Seekers Lobby</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="./img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="./img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Pharmacy System</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a href="./img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="./img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-info">
                  <h4>Hirepipu</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a href="./img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfokio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
   
  
          </div>
  
        </div>
  
      </section>
      {/* <!-- End Portfolio Section --> */}
  
      {/* <!-- ======= Testimonials Section ======= --> */}
      <section id="testimonials" className="testimonials d-none">
  
        <div className="container" data-aos="fade-up">
  
          <header className="section-header">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </header>
  
          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
            <div className="row m-0">
  
              <div className="col-4">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                  <div className="profile mt-auto">
                    <img src="./img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>CEO Hirepipu</h4>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}
  
              <div className="col-4">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                  <div className="profile mt-auto">
                    <img src="./img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Manager SeekersLobby</h4>
                  </div>
                </div>
              </div>
              {/* <!-- End testimonial item --> */}
  
              <div className="col-4">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  </p>
                  <div className="profile mt-auto">
                    <img src="./img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                    <h3>Jena Karlis</h3>
                    <h4>CEO StartHub</h4>
                  </div>
                </div>
              </div>
           
              {/* <!-- End testimonial item --> */} 
  
            </div>
            <div className="swiper-pagination"></div>
          </div>
  
        </div>
  
      </section>
      {/* <!-- End Testimonials Section --> */}
  
      {/* <!-- ======= Team Section ======= --> */}
            {/* <Team clasName="d-none"/> */}
      {/* <!-- End Team Section --> */}
  
     
  
      {/* <!-- ======= Recent Blog Posts Section ======= --> */}
      <section id="recent-blog-posts" className="recent-blog-posts d-none ">
  
        <div className="container "  data-aos="fade-up">
  
          <header className="section-header">
            <h2>Blog</h2>
            <p>Recent posts form our Blog</p>
          </header>
  
          <div className="row">
  
            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img"><img src="./img/blog/blog-1.jpg" className="img-fluid" alt=""/></div>
                <span className="post-date">Tue, September 15</span>
                <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit</h3>
                <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img"><img src="./img/blog/blog-2.jpg" className="img-fluid" alt=""/></div>
                <span className="post-date">Fri, August 28</span>
                <h3 className="post-title">Et repellendus molestiae qui est sed omnis voluptates magnam</h3>
                <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img"><img src="./img/blog/blog-3.jpg" className="img-fluid" alt=""/></div>
                <span className="post-date">Mon, July 11</span>
                <h3 className="post-title">Quia assumenda est et veritatis aut quae</h3>
                <a href="blog-singe.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
  
          </div>
  
        </div>
  
      </section>


            
      {/* <!-- End Recent Blog Posts Section --> */}
  

      {/*  News letter start*/}
      <footer id="footer" className="footer "> 
        
        <div className="footer-newsletter">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12 text-center">
                    <h4>Our Newsletter</h4>
                    <p>Sign up for our daily update</p>
                  </div>
                  <div className="col-lg-6">
                    <form onSubmit={this.postFunc} >
                      <input onChange={(e)=>this.state.email=e.target.value} type="email" name="email" /><input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </footer>
             
            
           <a href="#" className='whatsapp bg-white shadow'> <i className="fa fa-whatsapp text-success  fa-3x" aria-hidden="true"></i></a>
            
      {/*  News letter ends*/}
    </main>

     </div>
    );
    }
} 

export default Main;