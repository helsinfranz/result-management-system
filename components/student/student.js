import Image from "next/image";
import classes from "./student.module.css";
import Link from "next/link";
import { CiCalculator2 } from "react-icons/ci";
import { FaCheck, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import Loader from "../loader/loader";
import GlitchLoader from "../loader/glitch_loader";

export default function Student() {
  const [searchOn, setSearchOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const searchMainRef = useRef(null);
  const searchRef = useRef(null);

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    setResult({});
    setSearchOn(true);
    console.log(searchRef.current.value);
    // Wait for 5 sec
    await new Promise((resolve) => setTimeout(resolve, 10000));
    setResult({
      id: 101,
      attendanceMarks: 20,
      projectReviewMarks: 30,
      assessmentMarks: 40,
      projectSubmissionMarks: 20,
      linkedInPostMarks: 30,
      total: 140,
    });
    setLoading(false);
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
          className={`${searchOn ? classes.backdrop : ""}`}
          style={searchOn ? {} : { opacity: 0, pointerEvents: "none" }}
        ></div>
        <div
          className={`${classes.viewResult} ${
            searchOn ? classes.viewResultOn : ""
          }`}
          style={loading ? { overflow: "hidden" } : {}}
        >
          <h3>
            Result for{" "}
            <strong>{result.id ? result.id : searchRef?.current?.value}</strong>
          </h3>
          <div className={classes.gridResultView}>
            <div className={classes.gridResultViewSingle}>
              <div className={classes.gridResultViewTopic}>
                Attendance Marks:
              </div>
              <div className={classes.gridResultViewMain}>
                {loading ? (
                  <GlitchLoader />
                ) : result.attendanceMarks ? (
                  result.attendanceMarks
                ) : (
                  "N.A."
                )}
              </div>
            </div>
            <div className={classes.gridResultViewSingle}>
              <div className={classes.gridResultViewTopic}>
                Project Review Marks:
              </div>
              <div className={classes.gridResultViewMain}>
                {loading ? (
                  <GlitchLoader />
                ) : result.projectReviewMarks ? (
                  result.projectReviewMarks
                ) : (
                  "N.A."
                )}
              </div>
            </div>
            <div className={classes.gridResultViewSingle}>
              <div className={classes.gridResultViewTopic}>
                Assessment Marks:
              </div>
              <div className={classes.gridResultViewMain}>
                {loading ? (
                  <GlitchLoader />
                ) : result.assessmentMarks ? (
                  result.assessmentMarks
                ) : (
                  "N.A."
                )}
              </div>
            </div>
            <div className={classes.gridResultViewSingle}>
              <div className={classes.gridResultViewTopic}>
                Project Submission Marks:
              </div>
              <div className={classes.gridResultViewMain}>
                {loading ? (
                  <GlitchLoader />
                ) : result.projectSubmissionMarks ? (
                  result.projectSubmissionMarks
                ) : (
                  "N.A."
                )}
              </div>
            </div>
            <div className={classes.gridResultViewSingle}>
              <div className={classes.gridResultViewTopic}>
                LinkedIn Post Marks:
              </div>
              <div className={classes.gridResultViewMain}>
                {loading ? (
                  <GlitchLoader />
                ) : result.linkedInPostMarks ? (
                  result.linkedInPostMarks
                ) : (
                  "N.A."
                )}
              </div>
            </div>
          </div>
          <div className={classes.gridResultViewTotal}>
            <div className={classes.gridResultViewTopic}>Total</div>
            <div className={classes.gridResultViewMain}>
              {loading ? (
                <GlitchLoader />
              ) : result.total ? (
                result.total
              ) : (
                "N.A."
              )}
            </div>
          </div>
        </div>
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
