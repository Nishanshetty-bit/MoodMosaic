import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Resource = () => {
  // Data for the cards with specific NIMH links
  const mentalHealthTopics = [
    {
      title: "Mood Disorder",
      description:
        "Mood disorders are a category of mental health problems that include all types of depression and bipolar disorder. They affect your emotional state and can disrupt daily life.",
      link: "https://www.nimh.nih.gov/health/topics/mood-disorders",
    },
    {
      title: "Anxiety",
      description:
        "Anxiety disorders involve more than temporary worry or fear. For people with an anxiety disorder, the anxiety does not go away and can worsen over time.",
      link: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
    },
    {
      title: "Personality Disorder",
      description:
        "Personality disorders are a group of mental health conditions characterized by unhealthy patterns of thinking, functioning, and behaving.",
      link: "https://www.nimh.nih.gov/health/topics/personality-disorders",
    },
    {
      title: "Trauma",
      description:
        "Trauma can result from an event, series of events, or set of circumstances that is experienced as physically or emotionally harmful or life-threatening.",
      link: "https://www.nimh.nih.gov/health/topics/trauma-and-violence",
    },
    {
      title: "Sleep Disorders",
      description:
        "Sleep disorders are conditions that impair your sleep or prevent you from getting restful sleep, which can cause daytime sleepiness and other symptoms.",
      link: "https://www.nimh.nih.gov/health/topics/sleep-disorders",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Mental Health Resources
      </Typography>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentalHealthTopics.map((topic, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-4">
                {topic.title}
              </Typography>
              <Typography>{topic.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                color="blue"
                onClick={() => window.open(topic.link, "_blank")}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resource;
