import { Link, useNavigate } from "react-router-dom";

const Missing = () => {
    const navigate = useNavigate();

    return (
        <>
            <section class="error-section">
                <div class="auto-container">
                    <div class="inner-section">
                        <h1>404</h1>
                        <h2>
                            OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE
                            FOUND.
                        </h2>
                        <div class="text">
                            Try the search below to find matching pages:
                        </div>

                        <Link to="/" class="go-back">
                            Back to Home Page
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Missing;
