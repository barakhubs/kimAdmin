import { Link, useNavigate } from "react-router-dom";

const Missing = () => {
    const navigate = useNavigate();

    return (
        <>
            <section class="breadcrumb-area">
                <div class="tg-breadcrumb-bg" data-bg-image="assets/img/others/inner-page-breadcumb.jpg">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-12">
                                <div class="tg-breadcrumb">
                                    <h2 class="tg-breadcrumb-title">Erorr</h2>
                                    <div class="tg-breadcrumb-link">
                                        <span class="tg-breadcrumb-active"><a href="index.html">Home</a></span>
                                        <span>Erorr</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="error pt-120 pb-120">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-10 mx-auto">
                            <div class="error-image" data-parallax='{"y" : 50 }'>
                                <img src="assets/img/others/404.png" alt="404" />
                            </div>
                            <div class="error-content pt-80">
                                <h2 class="error-content__title mb-30">Oops! Page not found</h2>
                                <p class="error-content__text mb-60">
                                    Whoops, this is embarrassing. Looks like the page you were
                                    looking for was not found.
                                </p>
                                <Link to="/" class="btn">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Missing;
