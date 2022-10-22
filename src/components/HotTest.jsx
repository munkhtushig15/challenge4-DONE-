import "../App.css"

const HotTest = ({bigImage, title, textsTwo, imageTwo, userNameTwo, date}) => {
    return (
    <div className="hotTestContainer">       
        <img className="bigImage" src={bigImage} alt={bigImage} />
        <h2 className="title">{title}</h2>
        <p className="textsTwo">{textsTwo}</p>
        <div className="userContainerTwo">
            <img className="profilePictureTwo" src={imageTwo} alt="imageTwo" />
            <span>{userNameTwo}</span>
            <p>|</p>
            <span>{date}</span>
        </div>
    </div>
    )
}

export default HotTest