import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow me{' '}
      <a
        href="https://twitter.com/chris_eady/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @chris_eady
      </a>
    </h2>
    <br />
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.{' '}
          <a href="https://chriseady.dev/">Chris Eady</a>.
        </span>
      </div>
    </footer>
  </div>
)
