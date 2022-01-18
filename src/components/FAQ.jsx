import React from 'react'
class FAQ extends React.Component {
    render() { 
        return (
            <section id="faq" className="faq">
  
            <div className="container" data-aos="fade-up">
      
              <header className="section-header">
                <h2>F.A.Q</h2>
                <p>Frequently Asked Questions</p>
              </header>
      
              <div className="row">
                <div className="col-lg-6">
                  {/* <!-- F.A.Q List 1--> */}
                  <div className="accordion accordion-flush" id="faqlist1">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                         how can i make my product digital with devsoft?
                        </button>
                      </h2>
                      <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </div>
                      </div>
                    </div>
      
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                         How can i join Devsoft Community?
                        </button>
                      </h2>
                      <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                      </div>
                    </div>
      
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                         How can i get a job here?
                        </button>
                      </h2>
                      <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist1">
                        <div className="accordion-body">
                          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </div>
                      </div>
                    </div>
      
                  </div>
                </div>
      
                <div className="col-lg-6">
      
                  {/* <!-- F.A.Q List 2--> */}
                  <div className="accordion accordion-flush" id="faqlist2">
      
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-1">
                         How can i get a developer to develop a site for me?
                        </button>
                      </h2>
                      <div id="faq2-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                      </div>
                    </div>
      
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-2">
                         How can i get a developer to develop a Mobile/Desktop app for me?
                        </button>
                      </h2>
                      <div id="faq2-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                        </div>
                      </div>
                    </div>
      
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-content-3">
                         How can i get a developer to Design an inteface and prototype for my product?
                        </button>
                      </h2>
                      <div id="faq2-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist2">
                        <div className="accordion-body">
                          Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                        </div>
                      </div>
                    </div>
      
                  </div>
                </div>
      
              </div>
      
            </div>
      
          </section>
        );
    }
}
 
export default FAQ;