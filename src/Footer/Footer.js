import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_6.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-indigo-900 dark:text-gray-100">
      <div>
        <div className="w-16">
          <img src={logo} alt="" />
        </div>
        <p>
          The Maritime
          <br />
          Experts in distance learning...
        </p>
      </div>
      <div>
        <span className="footer-title ">Services</span>
        <Link className="link link-hover">Short Courses</Link>
        <Link className="link link-hover">Maritime Law</Link>
        <Link className="link link-hover">Marine Salvage</Link>
        <Link className="link link-hover">Yacht Brokerage</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
