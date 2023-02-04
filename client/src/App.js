import FaceNet from './components/FaceNet';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FaceNet />} />
      </Routes>
    </>
  );
}

export default App;
