import logo from './logo.svg';
import './App2.css';

import Button from './components/button/button'

const text = "First React App"

//Először Javascript objektumot generál le, majd abból készít sima HTML kódot
function App2() {
  return (
    <>
        <div className="App">
        <Button/>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            {text}
            </p>
            <ul>
                <li>Teszt</li>
                <li>Teszt</li>
                <li>Teszt</li>
                <li>Teszt</li>
            </ul>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
        <div></div>
    </>
  );
}

export default App2;