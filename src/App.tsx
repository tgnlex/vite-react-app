import {BrowserRouter, Routes, Route} from 'react-router-dom';

const RootRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
