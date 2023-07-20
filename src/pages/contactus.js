import React from 'react'

const ContactUs = () => {
  return (
       <div className='wrapper py-5'>
             <h1 className='blog-title'>Call us or Fill the Form</h1>
            <div className='section-border blog-icon'></div>
            <div className='section-subtitle dark-subtitle mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus nam, 
                sapiente exercitationem laborum veritatis!
            </div>
            <div className=" mx-36">
                <div className="row">
                    <div className="col-md-7 shadow-lg border py-4 px-5">
                        <form action="#" className='d-flex flex-wrap gap-15 justify-content-between'>
                            <div className="flex-grow-1">
                               <input type="text" placeholder='First Name' className="form-control" />
                            </div>
                            <div className="flex-grow-1">
                               <input type="text" placeholder='Last Name' className="form-control" />
                            </div>
                            <div className="flex-grow-1">
                               <input type="text" placeholder='Email Address' className="form-control" />
                            </div>
                            <div className="flex-grow-1">
                               <input type="text" placeholder='Subject' className="form-control" />
                            </div>
                            <div className="w-100">
                            <textarea className="form-control" id="exampleFormControlTextarea1"
                            placeholder='Your message'
                            rows="3"></textarea>
                            </div>
                            <div className='contact-btn'>
                                <button className='border-0 button'>
                                    Contact Us
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2 text-left ps-5">
                        <div className='address mb-5'>
                            <h5>Address:</h5>
                            <p>8083 Mukono</p>
                            <p>Kampala, Uganda</p>
                        </div>
                        <div className='email mb-5'>
                            <h5>Email:</h5>
                            <p>
                            <a href="mailto:contact@gmail.com">contact@gmail.com</a>    
                            </p>
                            <p>
                             <a href="mailto:support@gmail.com">support@gmail.com</a>   
                            </p>
                        </div>
                        <div className="phone ">
                            <h5>Phone:</h5>
                            <p>
                                mobile: <a href="tel:+256708234567">+256708234567</a>
                            </p>
                            <p>
                                fax: <a href="tel:+256743098762">+256743098762</a>
                            </p>
                            
                        </div>

                    </div>
                </div>

            </div>

            <div className='map-wrapper w-full mt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.481005859164!2d32.74204767770998!3d0.3578493000000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dc7ce155b7939%3A0x86e90e950d5db210!2snasuti%20market%20final!5e0!3m2!1sen!2sug!4v1689257938449!5m2!1sen!2sug"
             width="600" height="450" 
            className='border-0 w-100'
            allowfullscreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

       </div>
  )
}

export default ContactUs