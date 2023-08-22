
import { useNavigate } from 'react-router-dom';

const Missing = () => {
            const navigate = useNavigate();

    return (
        <>
         <div className="d-flex align-items-center justify-content-center pt-5 mt-5">
            <div className="text-center mt-5 py-5">
                <h1 className="display-1 fw-bold mt-5">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button className="btn btn-dark rounded-0" onClick = { () => navigate(-1) }>Go Back</button>
            </div>
        </div>
        </>
     );
}

export default Missing;
