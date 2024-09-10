import Image from "next/image";
import classes from "./student.module.css";
import Link from "next/link";
import { CiCalculator2 } from "react-icons/ci";
import { FaCheck, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import Loader from "../loader/loader";

export default function Student() {
  const [searchOn, setSearchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchMainRef = useRef(null);
  const searchRef = useRef(null);

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(!loading);
    // setLoading(true);
    setSearchOn(true);
    console.log(searchRef.current.value);
    // setLoading(false);
  }
  return (
    <div className={classes.centerDiv}>
      <header className={classes.header}>
        <div className={classes.img}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority={true}
            />
          </Link>
        </div>
        <div className={classes.Services}>
          <Link href="/home" className={classes.smallScreenOptions}>
            <h3>Home</h3>
          </Link>
          <span className={classes.smallScreenOptions}></span>
          <Link href="/admin">
            <h3>Admin</h3>
          </Link>
          <span></span>
          <Link href="/coders">
            <h3>Coders</h3>
          </Link>
          <span className={classes.smallScreenOptions}></span>
          <Link href="/faqs" className={classes.smallScreenOptions}>
            <h3>FAQs</h3>
          </Link>
        </div>
        <div className={classes.FAQs}>
          <Link href="/faqs">
            <h3>FAQs</h3>
          </Link>
        </div>
      </header>
      <div className={classes.heading}>
        <h1>Check Your Result Instantly</h1>
        <p>
          Access your detailed academic performance at any time with just your
          Student ID.
        </p>
        <form
          className={`${classes.searchbar} ${searchOn ? classes.searchOn : ""}`}
          onSubmit={submitHandler}
          ref={searchMainRef}
        >
          <input
            type="text"
            placeholder="Enter Student ID"
            ref={searchRef}
            required
          />
          <button
            type="submit"
            style={
              loading
                ? {
                    color: "black",
                    backgroundColor: "black",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }
                : {}
            }
          >
            {loading && (
              <div className={classes.loadingHolder}>
                <Loader />
              </div>
            )}
            View Results
          </button>
        </form>
        <div
          className={`${classes.viewResult} ${
            searchOn ? classes.viewResultOn : ""
          }`}
        ></div>
      </div>
      <div className={classes.sections}>
        <h2>Track Your Academic performance</h2>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <h4>
              <FaCheck />
              View Your Marks
            </h4>
            <p>
              Instantly access marks across all categories, including
              Attendance, Project Reviews, and Assessments.
            </p>
          </div>
          <div className={classes.box}>
            <h4>
              <CiCalculator2 />
              Total Marks Calculations
            </h4>
            <p>
              Your total score is automatically calculated from all categories,
              providing you with an accurate overview.
            </p>
          </div>
          <div className={classes.box}>
            <h4>
              <FaLinkedinIn />
              LinkedIn Post Review
            </h4>
            <p>
              Track the marks you’ve earned from LinkedIn post submissions and
              understand your social impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
