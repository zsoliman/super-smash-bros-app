
const Fighter = ({ fighter }) => {
    return (
        <div style={{ backgroundColor: fighter.color }}>
            <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.name.toLowerCase()}.png`} className='fighter-img' />
            <h5 className='fighter-name'>{fighter.name}</h5>
        </div >

    );
}


export default Fighter;