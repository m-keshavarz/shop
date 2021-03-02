import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const TopNav = styled.nav`
  background-color: #49484b;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  @media (max-width: 767px) {
    flex-direction: column;
    max-height: 4.5rem;
    overflow: hidden;
    transition: all 0.5s;
  }
  li {
    list-style: none;
    padding: 1.5rem 2rem;
  }
  a {
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const TopNavRight = styled.ul`
  display: flex;
  li.active {
    background-color: #333;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
  li:first-child {
    display: flex;
    justify-content: space-between;
    label {
      display: flex;
      align-self: center;
      @media (min-width: 767px) {
        display: none;
      }
    }
  }
`;

const TopNavLeft = styled.ul`
  display: flex;
  li.active {
    background-color: #333;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ToggleTopNavbar = styled.input`
  display: none;
  &:checked + nav {
    max-height: 100rem;
  }
`;

class Navbar extends React.Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? "active" : "";
  };
  render() {
    console.log(this.props.match);
    return (
      <header>
        <ToggleTopNavbar type="checkbox" id="toggle-top-navbar" />
        <TopNav>
          <TopNavRight>
            <li className={this.getNavLinkClass("/")}>
              <NavLink exact to="/" activeClassName="active">
                فروشگاه زنجیره ای پاتریس
              </NavLink>
              <label htmlFor="toggle-top-navbar">
                <i className="fas fa-bars"></i>
              </label>
            </li>
            <li className={this.getNavLinkClass("/register")}>
              <NavLink to="/register" activeClassName="active">
                ثبت نام در سایت
              </NavLink>
            </li>
            <li className={this.getNavLinkClass("/login")}>
              <NavLink to="/login" activeClassName="active">
                ورود به سایت
              </NavLink>
            </li>
          </TopNavRight>
          <TopNavLeft>
            <li className={this.getNavLinkClass("/products")}>
              <NavLink to="/products" activeClassName="active">
                محصولات ویژه
              </NavLink>
            </li>
            <li>
              <a href="##">تخفیف ها</a>
            </li>
            <li>
              <a href="##">راهنما</a>
            </li>
          </TopNavLeft>
        </TopNav>
      </header>
    );
  }
}

export default withRouter(Navbar);
