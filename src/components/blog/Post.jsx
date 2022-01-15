import React from 'react'
import Sidebar from './Sidebar';

class Post extends React.Component {
    render() { 
        return (
            <main id="main">

            {/* <!-- ======= Breadcrumbs ======= --> */}
            <section className="breadcrumbs">
              <div className="container">
        
                <ol>
                  <li><a href="#">Home</a></li>
                  <li>Post</li>
                </ol>
                <h2>Write Your Post </h2>
        
              </div>
            </section>
            {/* <!-- End Breadcrumbs --> */}
        
            
        
            {/* <!-- ======= Blog Section ======= --> */}
            <section id="blog" className="blog">
              <div className="container" data-aos="fade-up">
        
                <div className="row">
        
                  <div className="col-lg-8 entries">
                  <div class="reply-form">
                <h4>Write a Blog Post</h4>
                <p>Your email address will not be published. Required fields are marked * </p>
                <form action="">
                  <div class="row my-3">
                    <div class="col-md-6 mt-2 form-group">
                      <input name="name" type="text" class="form-control" placeholder="Your Name*" />
                    </div>
                    <div class="col-md-6 mt-2 form-group">
                      <input name="email" type="text" class="form-control" placeholder="Your Email*"/>
                    </div>
                  </div>
                  <div class="row my-2">
                    <div class="col form-group">
                      <input name="website" type="text" class="form-control" placeholder="Your Website"/>
                    </div>
                  </div>
                  <div class="row my-3">
                    <div class="col form-group">
                      <textarea name="comment" rows="10" class="form-control" placeholder="Write Here*"></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">   Post </button>
                </form>

              </div>
        
                  </div> 
                  {/* <!-- End blog entries list --> */}
        
                  <div className="col-lg-4">
                     <Sidebar/>
                  </div>
                  {/* <!-- End blog sidebar --> */}
        
                </div>
        
              </div>
            </section>
            {/* <!-- End Blog Section --> */}
        
          </main> 
        
            );
    }
}
 
export default Post;