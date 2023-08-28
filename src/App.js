// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.jsx';
import MainSection from './components/MainSection/MainSection.jsx';
import InfoSection from './components/InfoSection/InfoSection.jsx';
import AppBar from './components/AppBar/AppBar.jsx';

// import Home from './views/Home/Home.jsx';
// import { useLocation } from 'react-router-dom';
// import Voting from './views/Voting/Voting.jsx';
// import Breeds from './views/Breeds/Breeds.jsx';
// import Gallery from './views/Gallery/Gallery.jsx';

export default function App() {
  return (
    <>
      <Container>
        <MainSection>
          <AppBar />
        </MainSection>
        <InfoSection>
          {/* <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<Home />} />
          </Routes> */}
        </InfoSection>
      </Container>
    </>
  );
}
