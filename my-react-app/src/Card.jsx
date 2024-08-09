import profilePic from './assets/download.jpeg'

// react practice by making card components.
function Card(){
  return(
    <>
      <div className='card'>
      <img className='cardpic' src={profilePic} alt="profile pic" />
      <h2 className='carttitle'>Bro code</h2>
      <p className='para'>make tech videos on react and js.</p>
    </div>
    </>
  );
}

export default Card;