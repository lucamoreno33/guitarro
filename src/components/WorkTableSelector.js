import { Link } from "react-router-dom"
import { MdOutlineNavigateNext } from "react-icons/md";
export const WorkTableSelector = () => {
    return (
        <section className="WTselector-container">
            <div className="WTselector">
                <div className="WTselector-title">
                    <h2>Arma tu propio <strong>instrumento</strong></h2>
                </div>
                <div className="WTselector-content">
                    <div id="carouselCards" className="carousel slide h-100 w-100 d-flex justify-content-center">
                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselCards" data-bs-slide="prev">
                            <MdOutlineNavigateNext className="WTselector-arrow WTselector-arrow-prev" aria-hidden="true"/>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <div className="carousel-inner w-75 h-100 d-flex align-items-center">
                            <div className="carousel-item active">
                                <Link to={''} className="WTselector-img-container">
                                    <img src="./imgs/papelDisenio.svg" className="WTselector-img" alt="guitarras"/>
                                </Link>
                            </div>
                            <div className="carousel-item ">
                                <Link to={''} className="WTselector-img-container">
                                    <img src="./imgs/papelDisenio.svg" className="WTselector-img" alt="bajos"/>
                                </Link>
                            </div>
                            <div className="carousel-item ">
                                <Link to={''} className="WTselector-img-container">
                                    <img src="./imgs/papelDisenio.svg" className="WTselector-img" alt="baterias"/>
                                </Link>
                            </div>
                        </div>
                        <button className="carousel-control-next " type="button" data-bs-target="#carouselCards" data-bs-slide="next">
                            <MdOutlineNavigateNext className="WTselector-arrow" aria-hidden="true"/>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}