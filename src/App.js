import './App.scss';
import backGround from './images/fon.png';
import backGroundMobile from './images/fonMobile.png';
import { Header, HeaderMobile } from './components/Header'
import { Content } from './components/Content'


function App() {
  const isTablet = window.innerWidth < 1440
  const isMobile = window.innerWidth < 768

  return (
    <div className="App">
    {
      isTablet ? 
      <img src={backGroundMobile} className='backGroundImg'/> :
      <img src={backGround} className='backGroundImg'/>
    }
      
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
