import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Homeservice from '../Ourservice/Homeservice';
import './carosel.css';
import NewEvent from './NewEvent';

const img1 = "https://i.ibb.co/Z6gscFK/Doctor-with-a-stethoscope-in-the-hands-and-hospital-background.jpg";
const img2 = "https://i.ibb.co/F75YVnS/5438645.jpg";
const img3 = "https://i.ibb.co/Qd8JsXQ/doctor-standing-with-folder-stethoscope.jpg";


const Hero = () => {
    const [product, setproduct] = useState([]);

    useEffect(()=> {
        
        fetch('https://wicked-coffin-72841.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setproduct(data))


    },[])


    return (
        <div>
            <section>
         
            <Carousel className="mb-4 bg-dark ">
                <Carousel.Item >
                    <img
                        className="d-block h-70 w-100 rounded"
                        src="https://i.ibb.co/2sh8Sms/pexels-pierre-blach-3369102.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/wzPztLK/pexels-pierre-blach-3016353.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  w-100"
                        src="https://i.ibb.co/s57GnT0/pexels-asad-photo-maldives-3155666.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



 
      
    <h2> Our services</h2>
    {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
    <div className="container">
    <div class=" row row-cols-12 row-cols-md-3 g-5">
           
            {
                product.length <1? <div className="text-center my-5 py-5">
                <div class="spinner-border text-dark" role="status"> <span class="visually-hidden">Loading...</span> </div>
            </div>:

                product.map(datas => <Homeservice
                    key={datas._id}
                    post={datas}
                   ></Homeservice>)
                
            }
     
       </div>
       </div>
  
   

 </section>
 <NewEvent></NewEvent>


       
        </div>
    );
};

export default Hero;