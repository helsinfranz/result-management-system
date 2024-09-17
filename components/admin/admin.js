import { signOut } from "next-auth/react";
import classes from "./admin.module.css";
import { SlOptions } from "react-icons/sl";
import { IoMdLogOut } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import {
  MdOutlineAssessment,
  MdOutlineCollectionsBookmark,
  MdOutlineRateReview,
} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import Image from "next/image";

export default function AdminComponent({ session }) {
  return (
    <div className={classes.admin}>
      <div className={classes.adminTray}>
        <div className={classes.adminUser}>
          <div className={classes.adminImage}>
            <Image src="/logo.png" alt="user" width={100} height={100} />
          </div>
          <div className={classes.adminName}>
            {session?.user?.name ? session?.user?.name : "User"}
          </div>
          <div className={classes.adminOptions}>
            <SlOptions />
          </div>
        </div>
        <div className={classes.adminNav}>
          <div className={classes.adminSingleNav}>
            <SiTicktick />
            Attendance
          </div>
          <div className={classes.adminSingleNav}>
            <MdOutlineRateReview />
            Project Review
          </div>
          <div className={classes.adminSingleNav}>
            <MdOutlineAssessment />
            Assessment
          </div>
          <div className={classes.adminSingleNav}>
            <MdOutlineCollectionsBookmark />
            Project Submission
          </div>
          <div className={classes.adminSingleNav}>
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
      <div className={classes.adminMain}></div>
    </div>
  );
}
