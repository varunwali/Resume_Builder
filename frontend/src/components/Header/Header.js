import React, { useContext } from "react";
import resumeSvg from "../../assets/resume_svg.svg";
import styles from "./Header.module.css";
import { Context } from "../../index";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Header() {
  const { isAuthorized, setIsAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/user/logout",
        {
          withCredentials: true, //like token,cookies etc
        }
      );
      toast.success(response.data.message); //its is used to provied notifications
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.navConatiner}>
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li>
              <Link className={styles.navlink} to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className={styles.navlink} onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
          <Link
            className={styles.link}
            to={isAuthorized ? "/templates" : null}
            onClick={() => {
              if (!isAuthorized) {
                toast.error("Please login");
              }
            }}>
            Get Started
          </Link>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
    </div>
  );
}

export default Header;
