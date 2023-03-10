import React from 'react'
import ReactDOM from 'react-dom'

const App=()=>
  (
    <nav class='navbar navbar-expand-lg navbar-info bg-dark text-light'>
        <div class='container-fluid'>
          <a class='navbar-brand text-light' href='#'>Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
          </div>
        </div>
    </nav>

  );

  ReactDOM.render(<App/>,document.getElementById('root'));
export default App;
