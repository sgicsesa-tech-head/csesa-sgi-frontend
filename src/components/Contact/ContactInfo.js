import React from "react";
import { Email, LocationOn } from "@mui/icons-material";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="info-card">
      <h3 className="card-title cyan animated-gradient-text_blue">Contact Information</h3>

      <div className="info-item">
        <div className="icon email">
          <Email sx={{ fontSize: 22 }} />
        </div>
        <div>
          <h4>Email</h4>
          <p>sgi.csesa@sginstitute.in</p>
        </div>
      </div>

      <div className="info-item">
        <div className="icon address">
          <LocationOn sx={{ fontSize: 22 }} />
        </div>
        <div>
          <h4>Address</h4>
          <p>D Block, 3rd Floor, Computer Science Dept, SGI Campus, Kolhapur-Sangli Highway, Kolhapur, Maharashtra 416-118</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
