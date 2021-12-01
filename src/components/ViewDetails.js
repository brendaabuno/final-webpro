import React from 'react';
import { Link } from 'react-router-dom';

const ViewDetails = (props) => {
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-3">
            <h1>Details</h1>
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <div className="fs-5 mb-5">
                        </div>
                        <p className="display-5 fw-bolder">ID : hu</p>
                        <p className="display-5 fw-bolder">Desc : Humidity</p>
                        <p className="display-5 fw-bolder">Type : Hourly</p>
                        <div className="d-flex">
                            <Link className="my-5 btn btn-outline-dark flex-shrink-0" to="/">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ViewDetails;