import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/assets/assets'
import assets from '../../assets/assets/assets';


const Footer = () => {
  return (
    <footer className="edemy-footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="logo-placeholder">
            {/* Replace this div with your actual logo img tag */}
            {/* <img src="/path-to-logo/edemy-logo.png" alt="Edemy Logo" className="footer-logo" /> */}
            <div className="temp-logo">
              <img src={assets.logo} className="footer-logo"/>
            </div>
          </div>
          <p className="footer-tagline">Empowering lifelong learning</p>
          
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="links-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Degrees</a></li>
              <li><a href="#">For Business</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Partners</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Edemy, Inc. All rights reserved.
        </div>
        <div className="footer-badges">
          {/* Replace these with actual app store badge images */}
          <div className="badge-placeholder">App Store</div>
          <div className="badge-placeholder">Google Play</div>
        </div>
      </div>

      <style jsx>{`
        .edemy-footer {
          background: linear-gradient(to right, #004e92, #000428);
          color: #ecf0f1;
          padding: 40px 0 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          padding: 0 20px;
        }

        .footer-logo-section {
          flex: 1 0 300px;
          margin-bottom: 30px;
        }

        .logo-placeholder {
          width: 150px;
          height: 50px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 24px;
        }

        .footer-tagline {
          font-style: italic;
          margin-bottom: 20px;
          color: #bdc3c7;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          color: #ecf0f1;
          font-size: 18px;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #3498db;
        }

        .footer-links {
          flex: 2 0 700px;
          display: flex;
          flex-wrap: wrap;
        }

        .links-column {
          flex: 1 0 150px;
          margin-bottom: 30px;
          padding: 0 15px;
        }

        .links-column h4 {
          color: #3498db;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .links-column ul {
          list-style: none;
          padding: 0;
        }

        .links-column ul li {
          margin-bottom: 10px;
        }

        .links-column ul li a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s;
        }

        .links-column ul li a:hover {
          color: #ecf0f1;
        }

        .footer-bottom {
          border-top: 1px solid #34495e;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .copyright {
          color: #bdc3c7;
          font-size: 14px;
        }

        .footer-badges {
          display: flex;
          gap: 10px;
        }

        .badge-placeholder {
          padding: 8px 12px;
          background: rgba(255,255,255,0.1);
          border-radius: 5px;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
          }
          
          .links-column {
            flex: 1 0 100%;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;