import {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";
import FeedbackImage from "../images/feedback-image.jpg";

const colors = {
    orange: "FFBA5A",
    grey: "a9a9a9"
}

function Feedback() {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackText, setFeedbackText] = useState("");
    const stars = Array(5).fill(0)

    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const addNewFeedback = (feedbackText) => {
        const newFeedbacks = [...feedbacks, feedbackText];
        setFeedbacks(newFeedbacks);
    }

    return (
        <div className="container-fluid p-0 " style={styles.container}>
            <div className="container-fluid d-flex justify-content-end align-items-center" style={{
                minHeight: 300,
                backgroundImage: `url(${FeedbackImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#FFFFFF"
            }}>
                <h1 className="text-right text-white pe-5">Feedbacks</h1>
            </div>
            <h2 className="pt-5">Rate our service</h2>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleClick(index + 1)}
                            onMouseLeve={handleMouseLeave}
                        ></FaStar>
                    )
                })}

            </div>

            <textarea placeholder="Add your feedback" value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)} style={styles.textarea}/>
            <button className="mb-5 btn btn-danger" style={styles.button}
                    onClick={() => addNewFeedback(feedbackText)}>Submit
            </button>
            <div className="container-fluid">
                {
                    feedbacks.map(feedback => <div className="alert alert-dismissible alert-warning">

                        <p className="mb-0">{feedback}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        margin: "20px 0",
        minHeight: 100,
        padding: 10
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10
    }
}

export default Feedback;