import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CardWithLink({ title, description, icon, buttonText, onButtonClick }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        {/* Icon */}
        {icon && (
          <div className="mb-4">
            {icon}
          </div>
        )}
        {/* Title */}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        {/* Description */}
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        {/* Button */}
        <Button size="sm" variant="text" className="flex items-center gap-2" onClick={onButtonClick}>
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardWithLink;