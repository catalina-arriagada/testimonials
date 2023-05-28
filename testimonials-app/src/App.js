import './App.css';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>This is what our students say about us</h1>
        
        <Testimonial 
          name='Shawn Wang'
          country='Singapur'
          image='shawn'
          altPic = 'Shawn'
          charge='Software Engineer'
          company='Amazon'
          testimonial='"<b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
         />

        <Testimonial 
          name='Sarah Chima'
          country='Nigeria'
          image='sarah'
          altPic = 'Sarah'
          charge='Software Engineer'
          company='ChatDesk'
          testimonial='"<b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
         />
        
        <Testimonial 
          name='Emma Bostian'
          country='Sweden'
          image='emma'
          altPic = 'Emma'
          charge='Software Engineer'
          company='Spotify'
          testimonial='"<b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
         />
      </div>
    </div>
  );
}

export default App;
