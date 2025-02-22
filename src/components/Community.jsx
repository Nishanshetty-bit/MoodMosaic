

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography, // Add this import
  Button,
} from "@material-tailwind/react";
import CardWithLink from "./CardWithLink";
import PublicQueries from "./PublicQueries";

const Community = () => {
  // Icons for the cards
  const publicIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-12 w-12 text-blue-500"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 6a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 6zm0 12a.75.75 0 01-.75-.75V15a.75.75 0 011.5 0v2.25A.75.75 0 0112 18z"
        clipRule="evenodd"
      />
    </svg>
  );

  const doctorIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-12 w-12 text-green-500"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 6a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 6zm0 12a.75.75 0 01-.75-.75V15a.75.75 0 011.5 0v2.25A.75.75 0 0112 18z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Button click handlers
  const handlePublicClick = () => {
    alert("Redirecting to Public Queries...");
  };

  const handleDoctorClick = () => {
    alert("Redirecting to Doctor Assistance...");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Use Typography component */}
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Community
      </Typography>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Public Queries Card */}
        <CardWithLink
          title="Public Queries"
          description="Ask questions and get answers from the community."
          icon={publicIcon}
          buttonText="Ask a Question"
          onButtonClick={handlePublicClick}
        />

        {/* Doctor Assistance Card */}
        <CardWithLink
          title="Doctor Assistance"
          description="Get help from certified doctors for your health concerns."
          icon={doctorIcon}
          buttonText="Ask a Doctor"
          onButtonClick={handleDoctorClick}
        />
      </div>
    </div>
  );
};

export default Community;