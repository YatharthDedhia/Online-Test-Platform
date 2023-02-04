import Twitter from './components/Twitter';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/twitter' element={<Twitter />} />
      </Routes>
    </>
  );
}

export default App;
