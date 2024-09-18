import { signOut } from "next-auth/react";
import classes from "./admin.module.css";
import { SlOptions } from "react-icons/sl";
import { IoMdLogOut } from "react-icons/io";
import { FaHeadphonesAlt, FaUser } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import {
  MdKeyboardDoubleArrowDown,
  MdOutlineAssessment,
  MdOutlineCollectionsBookmark,
  MdOutlineRateReview,
} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { HiBell } from "react-icons/hi";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";

export default function AdminComponent({ session }) {
  const [selectedNav, setSelectedNav] = useState(1);
  return (
    <div className={classes.admin}>
      <div className={classes.adminTray}>
        <div className={classes.adminUser}>
          <div className={classes.adminImage}>
            <Image src="/logo.png" alt="user" width={75} height={75} />
          </div>
          <div className={classes.adminName}>RMS</div>
          <div className={classes.adminOptions}>
            <SlOptions />
          </div>
        </div>
        <div className={classes.adminNav}>
          <div
            className={`${classes.adminSingleNav} ${
              selectedNav === 1 ? classes.adminNavSelected : ""
            }`}
            onClick={() => setSelectedNav(1)}
          >
            <SiTicktick />
            Attendance
          </div>
          <div
            className={`${classes.adminSingleNav} ${
              selectedNav === 2 ? classes.adminNavSelected : ""
            }`}
            onClick={() => setSelectedNav(2)}
          >
            <MdOutlineRateReview />
            Project Review
          </div>
          <div
            className={`${classes.adminSingleNav} ${
              selectedNav === 3 ? classes.adminNavSelected : ""
            }`}
            onClick={() => setSelectedNav(3)}
          >
            <MdOutlineAssessment />
            Assessment
          </div>
          <div
            className={`${classes.adminSingleNav} ${
              selectedNav === 4 ? classes.adminNavSelected : ""
            }`}
            onClick={() => setSelectedNav(4)}
          >
            <MdOutlineCollectionsBookmark />
            Project Submission
          </div>
          <div
            className={`${classes.adminSingleNav} ${
              selectedNav === 5 ? classes.adminNavSelected : ""
            }`}
            onClick={() => setSelectedNav(5)}
          >
            <CiLinkedin />
            LinkedIn Post
          </div>
        </div>
        <div className={classes.adminOthers}>
          <div className={classes.adminSingleOthers}>
            <FaHeadphonesAlt />
            Support Center
          </div>
          <div className={classes.adminSingleOthers} onClick={() => signOut()}>
            <IoMdLogOut />
            Logout
          </div>
        </div>
      </div>
      <div className={classes.adminMain}>
        <div className={classes.adminMainTop}>
          <div className={classes.adminMainText}>
            <div className={classes.adminMainTitle}>
              {selectedNav === 1
                ? "Attendance"
                : selectedNav === 2
                ? "Project Review"
                : selectedNav === 3
                ? "Assessment"
                : selectedNav === 4
                ? "Project Submission"
                : "LinkedIn Post"}
            </div>
            <div className={classes.adminMainSubTitle}>
              {selectedNav === 1
                ? "Upload Attendance Marks of students"
                : selectedNav === 2
                ? "Upload Project Review Marks of students"
                : selectedNav === 3
                ? "Upload Assessment Marks of students"
                : selectedNav === 4
                ? "Upload Project Submission Marks of students"
                : "Upload LinkedIn Post Marks of students"}
            </div>
          </div>
          <div className={classes.adminMainUser}>
            <div className={classes.adminMainNotifications}>
              <div className={classes.adminMainNotification}>
                <HiBell color="#fff" />
              </div>
              <div className={classes.adminMainNotification}>
                <BiSolidMessageSquareDetail color="#fff" />
              </div>
            </div>
            <div className={classes.adminUserMain}>
              <div className={classes.adminUserImage}>
                <FaUser />
              </div>
              <div className={classes.adminUserText}>
                <div className={classes.adminUserTitle}>
                  {session?.user?.name ? session?.user?.name : "User"}
                </div>
                <div className={classes.adminUserTeam}>Team</div>
              </div>
              <div className={classes.adminUserOptions}>
                <MdKeyboardDoubleArrowDown />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.adminMainMain}></div>
      </div>
    </div>
  );
}
