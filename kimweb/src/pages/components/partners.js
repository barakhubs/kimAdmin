import { useEffect, useState } from "react";
import axios, { ASSET_URL } from "../../config/axios";

const Partners = () => {
    const [partnersData, setPartnersData] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint /clients
        axios.get("/clients")
            .then(response => {
                // Update the state with the fetched data
                setPartnersData(response.data.clients.slice(0, 6));
            })
            .catch(error => {
                console.error("Error fetching data from API:", error);
            });
    }, []);
    return (
        <>
            <section class="partner partner--bg pt-135 pb-110">
                <div class="container custom-container">
                    <div class="row">
                        <div class="col-lg-5 mb-30">
                            <div class="partner__content">
                                <div class="section-title animation-style2">
                                    <span class="section-title__sub primary-color mb-10">
                                        top clients
                                    </span>
                                    <h2 class="section-title__main text-white">
                                        Learn from Our Partners
                                    </h2>
                                </div>
                                <p class="partner__text mb-45">
                                    We value the trust and partnership of our clients. Join our growing community of satisfied clients who have experienced success with our services and solutions.
                                </p>
                                <a href="#" class="btn">See All Clients</a>
                            </div>
                        </div>
                        <div class="col-lg-7 mb-30">
                            <div class="row gxy-2">
                                {partnersData.map(partner => (
                                    <div class="col-lg-4 col-md-6 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="200ms">
                                        <div class="partner-block">
                                            <img src={ASSET_URL + partner.logo} alt={partner.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Partners;
