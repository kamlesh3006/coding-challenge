import { MessageSquareCode } from "lucide-react";
import { LineChart } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { Route } from "lucide-react";
import { MapPin  } from "lucide-react";
import { BarChart3  } from "lucide-react";
import { ArrowUp  } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Explore", href: "/explore" },
  { label: "Problems", href: "/problems" },
  { label: "Features", href: "/dummy#features" },
  { label: "Dummy", href: "/dummy" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Software Engineer",
    image: user1,
    text: "CodeArena has been a game-changer for me! The practice questions are challenging yet rewarding, and the progress tracking feature helps me stay motivated. Highly recommend to anyone looking to improve their coding skills!",
  },
  {
    user: "Jane Smith",
    company: "Tech Enthusiast",
    image: user2,
    text: "As a coding enthusiast, I'm always on the lookout for platforms that offer quality content and a supportive community. CodeArena checks all the boxes with its extensive library of coding questions and the ability to compare progress with friends. It's my go-to platform for continuous learning!",
  },
  {
    user: "David Johnson",
    company: "Computer Science Student",
    image: user3,
    text: "I've tried several coding platforms, but none compare to CodeArena. The friendly competition environment keeps me engaged, and the analysis dashboard provides valuable insights into my strengths and areas for improvement. It's the perfect tool for honing your coding abilities!",
  },
  {
    user: "Ronee Brown",
    company: "Software Developer",
    image: user4,
    text: "Thanks to CodeArena, I was able to ace my coding interviews! The technical interview preparation section provided realistic coding scenarios, and the feedback I received helped me refine my skills. I'm grateful for the invaluable resources CodeArena offers",
  },
  {
    user: "Michael Wilson",
    company: "Aspiring Developer",
    image: user5,
    text: "I stumbled upon CodeArena while searching for coding practice websites, and I'm glad I did! The user-friendly interface, comprehensive tutorials, and regular updates make learning to code enjoyable and accessible. It's been a game-changer for my programming journey!",
  },
  {
    user: "Emily Davis",
    company: "Coding Enthusiast",
    image: user6,
    text: "CodeArena has exceeded my expectations in every way! The vast array of coding challenges caters to all skill levels, and the gamified experience makes learning fun. Whether you're a beginner or an experienced coder, CodeArena has something for everyone!",
  },
];

export const features = [
  {
    icon: <BookOpenText />,
    text: "Comprehensive Learning Resources",
    description:
      "Access beginner-friendly and advanced tutorials, articles, and documentation on Data Structures, Algorithms, Object-Oriented Programming, and more.",
  },
  {
    icon: <MessageSquareCode />,
    text: "Interactive Coding Platform",
    description:
      "Engage in interactive coding exercises, tackling real-world problems with varying difficulty levels, and receive instant feedback to enhance coding skills.",
  },
  {
    icon: <Route />,
    text: "Personalized Learning Paths",
    description:
      "Tailor your learning path to skill level, interests, and goals, track progress, and receive personalized recommendations for skill enhancement.",
  },
  {
    icon: <LineChart  />,
    text: "Coding Challenges and Assessments",
    description:
      "Assess proficiency through coding tests, quizzes, and simulated interviews, with detailed feedback and analytics for improvement.",
  },
  {
    icon: <MapPin  />,
    text: "Accessible Anytime, Anywhere",
    description:
      "Access CodeArena anywhere, anytime, on any internet-connected device, enabling flexible learning, practice, and skill testing at your own pace.",
  },
  {
    icon: <BarChart3  />,
    text: "Analytics Dashboard",
    description:
      "Utilize a comprehensive analysis dashboard offering detailed statistics, insights, and customizable tracking to enhance coding skills and tailor learning approaches effectively.",
  },
];

export const checklistItems = [
  {
    title: "Select Preferred Language",
    description:
      "Select your  preferred programming language to start Practicing.",
  },
  {
    title: "Get Problem Statement",
    description:
      "Select a problem through no. of Problem Statements available in the website.",
  },
  {
    title: "Use Inbuilt Compiler",
    description:
      "Write the code for the problem in the inbuilt compiler of the website.",
  },
  {
    title: "Get Results",
    description:
      "Get accurate results and your score.Track your progress and analyse learning",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
