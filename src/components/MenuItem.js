import React from "react";
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
    return(
        <div className="col mb-5">
            <div className="card h-100">
                    <div className="card-body p-4 bg-dark">
                        <div className="text-center text-light">
                            <h5 className="fw-bolder">{props.menu.domain}</h5>
                            {props.menu.description}
                        </div>
                    </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent bg-info">
                        <div className="text-center text-muted">
                            <Link className="btn btn-outline-dark mt-auto" to="/details">View Details</Link></div>
                        </div>
                    </div>
            </div>
    );
}

export default MenuItem;