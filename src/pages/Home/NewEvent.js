import React from 'react';

const NewEvent = () => {
    return (
        <div className="container my-5">
            <div className="text-center my-3">
                <h2>Upcoming Events</h2>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{"width": "150px", "height": "4px"}} ></hr>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                    <img src="https://images.firstpost.com/fpimages/1200x800/fixed/jpg/2021/05/35073192954_c14fb1e40c_k-1.jpg?w=400" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Amazon</h5>
                        <h6 className="text-muted">Oct 31, 2021</h6>
                        <p class="card-text">Join the Boo Crew Saturday and Sunday mornings for some extra festive "Pre-Opening" Hallo-Fun activities!</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://images.unsplash.com/photo-1610413341456-e283a1c6026f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80?w=400" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Barmuda</h5>
                        <h6 className="text-muted">Oct 22, 2021</h6>
                        <p class="card-text">Knoebels transforms into a spooktacular place for ghost and ghouls of all ages.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://www.knoebels.com/data/uploads/media/image/Copy-of-Copy-of-Trivia.png?w=400" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Trivia Night</h5>
                        <h6 className="text-muted">Oct 5, 2021</h6>
                        <p class="card-text">Grab your friends and join us for Trivia Night!</p>
                    </div>
                    </div>
                </div>

                <iframe className="w-100" title="kaptai" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.823403910306!2d92.22224995747071!3d22.49645856297121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad4eb0dbe3a9a5%3A0xd3e13f6327f82695!2sKaptai%20Hydro%20Electric%20Station%20Rest%20House%20(BPDB)!5e0!3m2!1sen!2sbd!4v1635695264829!5m2!1sen!2sbd" 
                height="450px" style={{"border":"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default NewEvent;