import './App.css';


import Navbar from './components/Header.js';
import Banner from './components/Banner.js';
import Gallary from './components/Gallary.js';
import Footer from './components/Footer.js';



const bannertext = `The Super Bowl is an annual championship game of the National Football League (NFL) in the United States. It is considered the culmination of the NFL season and is one of the most-watched television events in the country.Winning teams are awarded the Vince Lombardi Trophy, named for the coach of the Green Bay Packers who won the first two Super Bowls.`


const imagePaths = [
  'https://images.pexels.com/photos/163246/football-line-of-scrimmage-linemen-scrimmage-163246.jpeg',
  'https://images.pexels.com/photos/2763962/pexels-photo-2763962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/159520/lacrosse-players-clash-conflict-159520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1476165/pexels-photo-1476165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];


function App() {


   return(
   <div>
      <Navbar />
      <Banner 
        title="Super Bowl"
        body={bannertext}
      />
      <Gallary 
      images={imagePaths}
      />
      <Footer /> 
    </div>
   );
}

export default App;
