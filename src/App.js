import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './index.css';
import AboutCompany from './Components/AboutCompany'
import Team from './Components/Team';
import Mission from './Components/Mission';
import Services from './Components/Services';
import Analytics from './Components/Analytics';
import Projects from './Components/Projects';
import Pricing from './Components/Pricing';
import Included from './Components/Included';
import ThankYou from './Components/ThankYou';
import SharedLayout from './Components/SharedLayout'
import Error from './Components/Error';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutCompany />} />
          <Route path='team' element={<Team />} />
          <Route path='mission' element={<Mission />} />
          <Route path='services' element={<Services />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='projects' element={<Projects />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='included' element={<Included />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='thankYou' element={<ThankYou />} /> */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
