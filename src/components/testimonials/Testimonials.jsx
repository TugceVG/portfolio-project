import { useEffect, useState } from "react";

import Form from "../form/Form";
import "./testimonials.scss";

const icon = "assets/twitter.png";
const img = "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

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
                const res = await fetch("/testimonials/all");
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
                    const res = await fetch("/testimonials/all");
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
                <button onClick={toggleForm}>Add a comment</button>
            </div>
            <div className="container">
                {isFormVisible
                    ? <Form toggleForm={toggleForm} setShouldUpdate={setShouldUpdate} />
                    : testimonials.filter((testimonial) => testimonial.isVisible).map((testimonial) => (
                        <div className={testimonial.featured ? "card featured" : "card"}>
                            <div className="top">
                                <img src="assets/right-arrow.png" className="left" alt="" />
                                <img src={img} className="user" alt="" />
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
