import {Fragment} from "react";
import {NavLink} from "react-router-dom";
function Footer() {
    return(
        <Fragment>
        <section className="bg-secondary">

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
                        <h1 className="font-sans-serif fw-bold" style={{"color":"white"}}>Boot&React Project</h1>
                        <p className="text-light my-4"> <i className="fas fa-map-marker-alt me-3"></i><span className="text-light">제작자: 김소연  &nbsp;</span><a className="text-light" href="tel:+604-680-9785">010-2244-9683</a><br /></p>
                        <p className="text-light"> <i className="fas fa-envelope me-3"> </i><a className="text-light" href="#">ksy8_13@naver.com </a></p>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
                        <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">Git Address >>  </h5>
                        <ul className="list-unstyled mb-md-4 mb-lg-0">
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                        <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Informations</h5>
                        <ul className="list-unstyled mb-md-4 mb-lg-0">
                        </ul>
                    </div>

                </div>
            </div>


        </section>
        </Fragment>
    )
}
export default Footer