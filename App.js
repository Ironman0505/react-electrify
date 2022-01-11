import logo from './logo.svg';
import './App.css';
import img from './images/wp3112894-ben-10-alien-x-wallpapers.png';
// for css import from 'file-path' => from ni lepeyocchuuuu🤩
//index.css doesn't need to be importedddd     GLOBAL BHAI
function App() {



  // let spidy='Parker'
  //object state
  //  let mcu={
  //    country:'USA',
  //    hero:'Tony'
  //  }
   // array state

  //  let weapons=['Nano-tech','Shield','Mjolnir','Spidy-Suit']

  let ben='Tennyson';
  let life={
    place:'The Van',
    guardian:'Grandpa MAX',
    cousin:'Gwenn',
    ph_no:1234
  }
  return (
   <div>

     {/* <h1 style={ {color: 'grey'} }>Hey you!! welcome to MCU</h1>
     <p>THE END GAME</p>
     <p>Spiderman is {spidy}</p>
     <h3>Country - {mcu.country}</h3>
     <h3 className="display-4">Hero - {mcu.hero}</h3> */}
   {
     //js code must be written in braces...
     //rendering an array 
    //  weapons.map((wpn) => <p>{wpn}</p>)

   }
   <img class="omn" src="https://mediaproxy.tvtropes.org/width/350/https://static.tvtropes.org/pmwiki/pub/images/omnitrix_first_appearence.png" alt="" />
<h1 style={{color:'pink'}}>Images ka demo</h1>
  <h3>God level entry by Alien-X</h3>
  <img class="pic" src={img} alt=""/>

  <h2 className="text-danger">The guy who has the OMNITRIX is from {ben} family..</h2>
  <span> <h3>His name is BEN TENNYSON</h3>
  <img class="zap"src="https://e7.pngegg.com/pngimages/549/586/png-clipart-ben-10-illustration-ben-tennyson-ben-10-desktop-cartoon-ben-10-miscellaneous-human.png" alt=""/></span>
  <h4>More about this adventurous kid </h4>
    <p>He lives in - {life.place}</p>
    <p>His care is taken by -{life.guardian}</p>
    <p>His torturing cousin is {life.cousin}</p>
  
   </div>
  );
}

export default App;
