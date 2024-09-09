import Image from "next/image";
import classes from "./student.module.css";
import Link from "next/link";
import { CiCalculator2 } from "react-icons/ci";
import { FaCheck, FaLinkedinIn } from "react-icons/fa";

export default function Student() {
  return (
    <div className={classes.centerDiv}>
      <header className={classes.header}>
        <div className={classes.img}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </Link>
        </div>
        <div className={classes.Services}>
          <Link href="/admin">
            <h3>Admin</h3>
          </Link>
          <span></span>
          <Link href="/coders">
            <h3>Coders</h3>
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
        <div className={classes.searchbar}>
          <input type="text" placeholder="Enter Student ID" />
          <button>View Results</button>
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
