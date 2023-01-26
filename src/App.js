import './styles/index.css'
import { Home } from './views/home'
import { useParams } from "react-router-dom";
import { FetchURL } from './models/url';
import { useEffect } from "react";

export const App = () => {
  let params = useParams();

  useEffect(() => {
    if (params.id) {
      FetchURL(params.id)
    }
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}


