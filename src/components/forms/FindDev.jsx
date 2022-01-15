import React, { Component } from 'react'

 class FindDev extends Component {
    render() {
        return (
            <div className='py-5 my-5'>
                
                <div className="container">
                    <form action="">
                        <div className="row m-0 p-3 col-md-8">
                            <div class="mb-3 col-lg-5">
                    
                                <input type="text"  className="form-control" placeholder='Project Name'/>
                                </div>
                            <div class="mb-3 col-lg-5">
                                <select class="form-control form-select" name="" id="">
                                    <option selected>Project Type</option>
                                    <option >School Project(Defends)</option>
                                    <option >CMS Project</option>
                                    <option>Blog Project</option>
                                    <option>Personal Project</option>
                                    <option>Company Project</option>
                                    <option>Customise Project</option>
                                    <option>BitCoin Management Project</option>
                                    <option>Investment Project</option>
                                    <option>NGO Project</option>
                                    <option>Small Business Project</option>
                                    <option>Large Business Project</option>
                                    <option>Social Media Project</option>
                                    <option>Graphics Design</option>
                                    <option>Project Management</option>
                                </select>
                            </div>
                            <div class="mb-3 col-lg-5">
                                <input type="date"  className="form-control" placeholder='Project Name'/>
                            </div>
                             <div class="mb-3 col-lg-5">
                                <input type="date"  className="form-control" placeholder='Project Name'/>
                            </div>
                            
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default FindDev
