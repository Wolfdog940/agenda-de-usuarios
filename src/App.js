import Navbar from "./componentes/Navbar";
import UserList from "./componentes/UserList";
import { Provider } from "react-redux";
import store from "./store";
import Info from "./componentes/Info";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
          <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/info/:id" element={<Info />} />
          </Routes>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
