import { useRootContext } from "@/context/context";
import { mobileNav } from "@/data/header";
import { Link } from "@/Reuseable";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { phone, phoneHref, email, logo, navItems, socials } = mobileNav;

const MobileNav = () => {
  const { menuStatus, toggleMenu } = useRootContext();

  const handleToggleMenu = () => {
    document.body.classList.toggle("locked");
    toggleMenu();
  };

  return (
    <div className={`mobile-nav__wrapper${menuStatus ? " expanded" : ""}`}>
      <div
        onClick={handleToggleMenu}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={handleToggleMenu}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/" aria-label="logo image">
            <Image src={logo.src} width={155} alt="" />
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map((navItem) => (
              <NavItem navItem={navItem} key={navItem.id} mobile />
            ))}
          </ul>
        </div>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <a href={`tel:${phoneHref}`}>{phone}</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {socials.map(({ id, icon, href }) => (
              <a href={href} key={id} className={icon}></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
