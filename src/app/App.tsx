import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home.tsx';
import Chat from './chat/chat.tsx';
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
