import React from 'react';

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              TRINITY
            </span>
            , Using <i className="fab fa-react" /> Reactjs &amp; Redux 
              with the  
            <a
              href="https://api.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              TMDB API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

