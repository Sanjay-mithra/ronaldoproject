
import Button from 'react-bootstrap/Button';

function Contact(){
    return(
        <div id="Contact-container">
            <div className="container ">
            <h1 className='text-center fw-2 fs-2 my-5 pt-3 text-white'>Contact</h1>
            
            <form>
  <div class="row">
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="Your Name"></input>
    </div>
    <div class="col-md-6">
      <input type="email" class="form-control" placeholder="Your Email"></input>
    </div>
    <div class="form-group mt-3" >
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter message" rows="5"></textarea>
  </div>
  <div className='text-center mt-3 mb-5'>
  <span><Button variant="primary">Send message</Button></span>
  </div>
  </div>
</form>
            </div>
        </div>
    )
}

export default Contact;