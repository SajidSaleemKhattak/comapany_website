import React from "react";
import styles from "./Styling/Become_a_Partner.module.css";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import banner from "./banner.jpg";
import people_working from "./people_working.jpg";
import { Link } from "react-router-dom";
const Become_a_Partner = () => {
  return (
    <div>
      <img className={styles.banner} src={banner} alt="" />
      <div className={styles.container}>
        <h1 className={styles.heading1}>
          Unlock Growth with a Strong Partnership
        </h1>
        <img src={people_working} className={styles.people_working} alt="" />

        <div className={styles.listContainer}>
          <h2 className={styles.titles}>Why Partner With Us?</h2>
          <ul className={styles.uls2}>
            <li>
              <strong>Revenue Growth:</strong> Increase your earnings through
              our partnership programs.
            </li>
            <li>
              <strong>Exclusive Resources:</strong> Gain access to premium tools
              and dedicated support.
            </li>
            <li>
              <strong>Co-Branding Opportunities:</strong> Build credibility with
              a trusted software company.
            </li>
            <li>
              <strong>End-to-End Support:</strong> From onboarding to client
              servicing, we've got you covered.
            </li>
          </ul>
        </div>

        <div className={styles.listContainer}>
          <h2 className={styles.titles}>Who Can Partner?</h2>
          <ul className={styles.uls2}>
            <li>
              <strong>Freelancers & Consultants:</strong> Expand your service
              offerings.
            </li>
            <li>
              <strong>Marketing & IT Agencies:</strong> Add top-tier software
              solutions to your portfolio.
            </li>
            <li>
              <strong>Resellers & Distributors:</strong> Sell our services under
              your brand or co-brand with us.
            </li>
          </ul>
        </div>

        <div className={styles.listContainer}>
          <h2 className={styles.titles}>How It Works?</h2>
          <ol className={styles.uls2}>
            <li>
              <strong>Apply Online:</strong> Fill out our quick partnership
              form.
            </li>
            <li>
              <strong>Get Approved:</strong> We evaluate your profile and
              discuss collaboration terms.
            </li>
            <li>
              <strong>Start Earning:</strong> Refer, resell, or collaborate with
              us on projects.
            </li>
          </ol>
        </div>
        <p className={styles.strong}>
          <strong>Join Us Today!</strong> Let’s build something great together.
        </p>
        <Link to="/Contact_us" className={styles.btn}>
          Become a Partner
        </Link>
      </div>
    </div>
  );
};

export default Become_a_Partner;

// <FaMoneyBillTrendUp />
// import { GrResources } from "react-icons/gr";  <GrResources />

// import { MdOutlineBrandingWatermark } from "react-icons/md";
// <MdOutlineBrandingWatermark />

// import { MdSupportAgent } from "react-icons/md";
//  <MdSupportAgent />;
