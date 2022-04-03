import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut(params) {
    setIsAuthenticated(false);
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <div >
      <Menu inverted>
        <Container >
          <Link to="/" >
            <Menu.Item name="home"/>
          </Link>
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut login={handleSignIn} signUp={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
