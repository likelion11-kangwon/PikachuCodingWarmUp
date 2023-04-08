export default function Channel({name, link}){      //비구조화 할당
    return(
        <div className="chan_button">
            <a href={link} target="_blank">{name}</a>
        </div>
    )
}