import React from 'react'
import ReactDOM from 'react-dom'

const App=()=>
  (
    <nav class='navbar navbar-expand-lg navbar-info bg-dark text-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
        </div>
    </nav>

  );

  ReactDOM.render(<App/>,document.getElementById('root'));
export default App;
