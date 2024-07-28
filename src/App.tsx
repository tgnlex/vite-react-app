import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './app/home.tsx';
import Chat from './app/chat/index.tsx';
const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />}/>
        </Routes>
    </BrowserRouter>
  )
}


export default App;
