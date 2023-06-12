import { useEffect, useState } from "react";

import Form from "../form/Form";
import "./testimonials.scss";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8800/api"
const icon = "assets/linkedin.png";
// const img = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);

    const toggleForm = () => {
        setIsFormVisible((isFormVisible) => !isFormVisible)
    }

    useEffect(() => {
        const getAllTestimonials = async () => {
            try {
                const res = await fetch(REACT_APP_BACKEND_URL + "/testimonials/all");
                const data = await res.json();

                setTestimonials(data);
            } catch (err) {
                console.log(err);
            }
        }

        getAllTestimonials();
    }, [])

    useEffect(() => {
        if (shouldUpdate) {
            const getAllTestimonials = async () => {
                try {
                    const res = await fetch(REACT_APP_BACKEND_URL + "/testimonials/all");
                    const data = await res.json();

                    setTestimonials(data);
                } catch (err) {
                    console.log(err);
                }
            }

            getAllTestimonials();
        }
    }, [shouldUpdate]);

    return (
        <div className="testimonials" id="testimonials">
            <div className="testimonialsTitle">
                <h1>Testimonials</h1>
                <button className="buttonTestimonialTitle" onClick={toggleForm}>{isFormVisible ? "Return Testimonials" : "Add a comment"}</button>
            </div>
            <div className="container">
                {isFormVisible
                    ? <Form toggleForm={toggleForm} setShouldUpdate={setShouldUpdate} />
                    : testimonials.filter((testimonial) => testimonial.isVisible).map((testimonial) => (
                        <div key={testimonial._id} className={testimonial.featured ? "card featured" : "card"}>
                            <div className="top">
                                <img src="assets/right-arrow.png" className="left" alt="" />
                                <img src={PF + testimonial.userPicture} className="user" alt="" />
                                <img src={icon} className="right" alt="" />
                            </div>
                            <div className="center">
                                {testimonial.comment}
                            </div>
                            <div className="bottom">
                                <h3>{testimonial.userName}</h3>
                                <h4>{testimonial.userTitle}</h4>
                                <h5>{testimonial.userCompany}</h5>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}
