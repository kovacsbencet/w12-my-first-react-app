function Beer({info, randomNum}) {
    const {title, sub, text} =info
    return(
        <div className="beer">
            {title}
            {sub}
            {text}
            <button onClick={() =>{console.log(`You clicked me`)}}>Click me!</button>
        </div>
    )
}

export default Beer