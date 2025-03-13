export default function Card({user}){
    const CardWidth ={
        width : "18rem"
    }

    return <>
        <div className="card" style={CardWidth}>
            <img className="card-img-top" src={user.image.src} alt={user.image.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                    <h6 className="card-text" >Class {user.class}</h6>
                    <p className="card-text" >{user.title}</p>
                </div>
        </div>
    </>
}
