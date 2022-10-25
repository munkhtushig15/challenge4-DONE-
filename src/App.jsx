

// import Testimonials from './components/Testimonials';
// import HotTest from './components/HotTest';
// import StarTwo from "./components/Star"

// const App = () => {

  
//   return (
//     <div className='bg'>
//       <div className="top">
//         <Testimonials image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800" name="John Doe" content="Discover A Text App. Find Quick Results from Multiple Sources. Get A Text App. Get Instant Quality Results at Izito Now! Explore the Best Info Now. Get More Related Info. Find Related Results Now. 100+ Qualitative Results. Discover Quality Results. Powerful and Easy to Use."
//         star={[0,1,2,3,4]}
//         />
//         <Testimonials image="https://www.nicepng.com/png/detail/906-9068843_korean-teachers-diane-profile-girl.png" name="Selena Gomez" content="Discover A Text App. Find Quick Results from Multiple Sources. Get A Text App. Get Instant Quality Results at Izito Now! Explore the Best Info Now. Get More Related Info. Find Related Results Now. 100+ Qualitative Results. Discover Quality Results. Powerful and hard to Use."
//           star={[0,1,2]}
//           /> 
//       </div>
//       <div className="bottom">
//         <Testimonials image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjNcQVGPiW5P018_LdtFjmXFN9aYRRnwqqQ&usqp=CAU" name="Milana Party" content="Discover A Text App. Find Quick Results from Multiple Sources. Get A Text App. Get Instant Quality Results at Izito Now! Explore the Best Info Now. Get More Related Info. Find Related Results Now. 100+ Qualitative Results. Discover Quality Results. Powerful and hard to Use."
//           star={[0,1,2,3]}
//           /> 
//         <HotTest bigImage="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" title="Lorem ipsum dolor sit amet consectetur adipisicing elit." textsTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." imageTwo="https://www.nicepng.com/png/detail/906-9068843_korean-teachers-diane-profile-girl.png" 
//         date= "2nd, December" userNameTwo="John Smith"
//         />
//       </div>
//     </div>
//   )
// }

// reactRouteUzev

import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Header from './components/header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App; 

