import React from "react";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CardWithLink from "./CardWithLink";

const Community = () => {
  const navigate = useNavigate(); // Hook for navigation

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

  // Navigation handlers
  const handlePublicClick = () => {
    alert("Redirecting to Public Queries...");
  };

  const handleDoctorClick = () => {
    navigate("/doctor-support"); // Redirects to DocSupport component
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Community
      </Typography>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Public Queries Card */}
        <CardWithLink
          title="Public Queries"
          description=""
          icon={publicIcon}
          buttonText="Ask a Question"
          onButtonClick={handlePublicClick}
        />

        {/* Doctor Assistance Card */}
        <CardWithLink
          title="Doctor Authentication"
          description=""
          icon={doctorIcon}
          buttonText="Get started"
          onButtonClick={handleDoctorClick} // Navigate to DocSupport
        />
      </div>
    </div>
  );
};

export default Community;
