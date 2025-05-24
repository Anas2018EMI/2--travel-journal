function Entry(props){
    return (
        <>
            <article>
                <div>  
                    <img src={props.img.src} alt={props.img.alt}/> 
                </div>
                <div>
                    <img className="marker" src="src/assets/marker.png" alt="Position Marker" />
                    <span className="country"> {props.country} </span>
                    <a className="location" href={props.googleMapsLink} >View On Google Maps</a>
                    <h1 className="name" >{props.title} </h1>
                    <h2 className="date">{props.dates} </h2>
                    <p>{props.text} </p>
                </div>
            </article>
        </>
    );
}

export default Entry;