import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './components/Game'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faWebsite } from '@fortawesome/free-solid-svg-icons'

ReactDOM.render(
  <React.StrictMode>
    <Game />
    <footer className="footer">
      <div className="footer-container">
        <div className="github">
          <a href="https://github.com/Yeab-Ad" target="_blank">
            <img src="src\assets\github-icon.png" alt="GitHub Icon" />
            <p>Yeab-Ad</p>
          </a>
        </div>
        <div className="website">
          <a href="https://yeabsiras.netlify.app" target="_blank">
            <img src="src\assets\U.svg" alt="Website Icon" />
            <p>Website</p>
          </a>
        </div>
      </div>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
)
