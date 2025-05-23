import { useRootContext } from "@/context/context";
import header from "@/data/header";
import useScroll from "@/hooks/useScroll";
import React from "react";
import { Image } from "react-bootstrap";
import Link from "../Reuseable/Link";
import NavItem from "./NavItem";
import SideNavToggler from "./SideNavToggler";

const { navItems, socials, logo, phone, phoneHref, logo2 } = header;

const socialsLength = socials.length;

const Header = ({ className = "" }) => {
  const { toggleMenu, setSideNav } = useRootContext();
  const { scrollTop } = useScroll(130);

  const newLogo = className && !scrollTop ? logo2 : logo;

  const handleToggleMenu = () => {
    toggleMenu();
    document.body.classList.toggle("locked");
  };

  return (
    <header
      className={`main-header main-header--one clearfix${
        scrollTop ? "" : " " + className
      }`}
    >
      <div className="main-header--one__wrapper">
        <div className="auto-container">
          <div className="main-header--one__inner">
            <div className="main-header--one__left">
              <div className="logo">
                <Link href="/">
                  <Image src={newLogo.src} alt="" />
                </Link>
              </div>
            </div>
            <nav
              className={`${
                scrollTop
                  ? "stricky-header stricked-menu stricky-fixed"
                  : "main-menu--1"
              } main-menu`}
            >
              <div className={scrollTop ? "sticky-header__content" : ""}>
                <div className="main-menu__inner">
                  <a onClick={handleToggleMenu} className="mobile-nav__toggler">
                    <i className="fa fa-bars"></i>
                  </a>
                  <div className="stricky-one-logo">
                    <div className="logo">
                      <Link href="/">
                        <Image src={logo.src} alt="" />
                      </Link>
                    </div>
                  </div>

                  <div className="main-header--one__middle">
                    <ul className="main-menu__list">
                      {navItems.map((navItem) => (
                        <NavItem navItem={navItem} key={navItem.id} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <div className="main-header--one__right clearfix">
              <div className="number">
                <a href={`tel:${phoneHref}`}>{phone}</a>
              </div>

              <div className="social-icon">
                <ul>
                  {socials.map(({ id, icon, href }) => (
                    <li key={id}>
                      <a
                        className={id !== socialsLength ? "me-1" : ""}
                        href={href}
                      >
                        <span className={icon}></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden-content-button bar-box">
                <SideNavToggler onClick={setSideNav} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
