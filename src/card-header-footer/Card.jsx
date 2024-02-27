import profilePic from './assets/js-learn-img.jpeg'

function Card(){


    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" className='card-image'/>
            <h2 className="card-title">Mert Karahan</h2>
            <p className="card-paragraph">CS'2 Student at IZTECH</p>
        </div>
    );
}

export default Card