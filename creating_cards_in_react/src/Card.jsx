import profile_pic from "./assets/Vitz.jpg";

function Card () {

    return(

        <div className="card">
        <img className="card-image" src={profile_pic} alt="vitzprofile_picture" />
        <h2 className="card-title">Amakalu Vitalis</h2>
        <p>Lorem ipsum dolor sit
        amet consectetur adipisicing elit.
        Consequatur ea saepe repellendus in.
        Suscipit, fuga qui! A magnam odit nostrum
        nihil praesentium? Vero totam perferendis
        facilis sit dolorum. Ratione, aliquid?</p>

        </div>
    );

}

export default Card