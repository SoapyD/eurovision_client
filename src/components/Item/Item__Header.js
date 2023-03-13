

const Item__Header = (props) => {
    return(
        <div className='Item__Header rounded_borders'>
            <h2>{props.id} - {  props.country.charAt(0).toUpperCase() + props.country.slice(1)}</h2>
            <h3>Artist: { props.artist }</h3>
            <h3>Song: "{ props.song }"</h3> 
        </div>
    )
}

export default Item__Header