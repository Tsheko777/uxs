import './styles/index.css'
import { Home } from './views/home'
import { FetchURL } from './models/url';
import { useEffect } from "react";

export const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}


