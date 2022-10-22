import "../App.css"
import StarTwo from "./Star";
const Testimonials = ({ image, name, content, star }) => {

   

    return (
        <div className="TestimonialsContainer">
            <div className="starContainer">
            {
                star.map(e => {
                    return (
                        <StarTwo />
                    )
                })
            }
            </div>
            <p >
                {content}
            </p>
            <div className="userProfileContainer">
                <img className="userImage" src={image} alt={image} />
                <h3>
                    {name}
                </h3>
            </div>
        </div>
    )

}

export default Testimonials