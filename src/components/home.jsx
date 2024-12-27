import Button from 'react-bootstrap/Button';

function Home(){
    return(
        <div id="Homepage" className='text-white'>
            <h1 className='fw-light fs-1'>Cristiano Ronaldo</h1>
            <p className='fs-4 fw-light'>Football Legend | Record-Breaker | Global Icon</p>
            <Button variant="primary">Learn more</Button>
        </div>
    )
}

export default Home;