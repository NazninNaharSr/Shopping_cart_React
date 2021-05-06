import React from 'react';
 export default function Header (props) {
     return (
      <header className="row block center">
          <div>
            <a href="#/">
              <h1>Shopping Cart</h1>  
             </a>  
          </div>
          <div>
              <a href="#/cart">Cart</a> <a href="#/sign in">Sign In</a>
          </div>
      </header>

     );
 } 