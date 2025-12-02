"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import {
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import SkillCard from "@/components/SkillCard";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullText = "Hey, I'm Salil Fernandes!";

  // Array of skill names for display
  const skills = [
    "Python",
    "Javascript",
    "TypeScript",
    "Java",
    "C#",
    "AWS",
    "Docker",
    "Kubernetes",
    "React",
    "Next.js",
    "Node.js",
    "REST APIs",
    "GraphQL",
    "Apache Kafka",
    "Elasticsearch",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Git",
    "Linux",
    "Jenkins",
    "Terraform",
    "Golang",
    "HTML",
    "CSS",
  ];

  // Array of icon file names (without .svg extension)
  const skillIcons = [
    "python",
    "javascript",
    "typescript",
    "java",
    "csharp",
    "aws",
    "docker",
    "kubernetes",
    "react",
    "nextjs",
    "nodejs",
    "api",
    "graphql",
    "kafka",
    "elasticsearch",
    "mongo",
    "postgresql",
    "redis",
    "github",
    "linux",
    "jenkins",
    "terraform",
    "go",
    "html",
    "css",
  ];

  useEffect(() => {
    let index = 0;
    let isTyping = true;
    let timeout: NodeJS.Timeout;

    const typeAndDelete = () => {
      const interval = setInterval(
        () => {
          if (isTyping) {
            if (index < fullText.length) {
              setDisplayedText(fullText.slice(0, index + 1));
              index++;
            } else {
              clearInterval(interval);
              timeout = setTimeout(() => {
                isTyping = false;
                typeAndDelete();
              }, 3000);
            }
          } else {
            if (index > 0) {
              setDisplayedText(fullText.slice(0, index - 1));
              index--;
            } else {
              clearInterval(interval);
              timeout = setTimeout(() => {
                isTyping = true;
                typeAndDelete();
              }, 500);
            }
          }
        },
        isTyping ? 100 : 50
      );
    };

    typeAndDelete();

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      {
        <>
          <nav
            className="sticky top-0 z-40 w-full h-20 flex items-center justify-between"
            style={{
              paddingLeft: "50px",
              paddingRight: "100px",
              backgroundColor: "#3a3a3a",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="flex items-center">
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "#eeee16",
                  width: "56px",
                  height: "56px",
                  marginRight: "-40px",
                }}
              >
                <Image
                  src={"/avatar/av2.png"}
                  alt="profile"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div className="text-white2 font-bold text-2xl letter-spacer">
                S<span className="text-lg">ALIL</span> F
                <span className="text-lg">ERNANDES</span>
              </div>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex gap-16 text-white font-bold">
              <a href="#home" className="hover:opacity-70 cursor-pointer">
                HOME
              </a>
              <a href="#about" className="hover:opacity-70 cursor-pointer">
                ABOUT
              </a>
              <a href="#skills" className="hover:opacity-70 cursor-pointer">
                SKILLS
              </a>
              <a href="#projects" className="hover:opacity-70 cursor-pointer">
                PROJECTS
              </a>
              <a href="#education" className="hover:opacity-70 cursor-pointer">
                EDUCATION
              </a>
              <a href="#experience" className="hover:opacity-70 cursor-pointer">
                EXPERIENCE
              </a>
            </div>

            {/* Burger button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div
                className="absolute top-16 left-0 w-full md:hidden flex flex-col gap-4 text-white p-6"
                style={{
                  backgroundColor: "#3a3a3a",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                }}
              >
                <a
                  href="#home"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a
                  href="#education"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </a>
                <a
                  href="#experience"
                  className="hover:opacity-70 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
              </div>
            )}
          </nav>
          <div className="min-h-screen bg-custom">
            <section
              id="home"
              className="mt-16 flex flex-col items-center justify-center scroll-mt-20"
            >
              <div className="div-about flex items-center justify-center">
                <Image
                  src={"/avatar/av1.png"}
                  alt="profile"
                  width={110}
                  height={110}
                  style={{ paddingRight: "15px" }}
                />
                <h2 className="text-5xl font-bold text-black">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p
                  className="text-2xl text-black text-center"
                  style={{ paddingTop: "50pt" }}
                >
                  A full stack software engineer with a knack for building
                  scalable and versatile software solutions.
                </p>
                <p className="text-2xl text-black text-center">
                  I'm currently seeking full time software engineering
                  opportunities.
                </p>
              </div>
              <div className="flex gap-6 mt-6 items-center">
                <a
                  href="#contact"
                  className="px-6 rounded-full hover:opacity-80 transition-opacity"
                  style={{
                    border: "2px solid #4d4c4c",
                    color: "#4d4c4c",
                  }}
                >
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1KnZLErlGAGBK_EVv5yQQAl-zn_QXjplo/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 rounded-full hover:opacity-80 transition-opacity"
                  style={{
                    border: "2px solid #4d4c4c",
                    color: "#4d4c4c",
                  }}
                >
                  Download CV
                </a>
              </div>
            </section>
            <div className="flex flex-row gap-8 mt-70 px-8 items-start">
              <section
                id="about"
                className="flex-1 flex flex-col items-center justify-center scroll-mt-20"
              >
                <h2 className="text-3xl font-bold text-black">ABOUT ME</h2>
                <hr
                  style={{
                    border: "none",
                    borderTop: "5px solid blue",
                    margin: "0",
                    width: "80px",
                    marginTop: "10px",
                  }}
                />
                <div className="flex flex-col mt-12">
                  <p className="text-black text-lg text-center">
                    Thriving in fast paced Agile environments, I have a
                    particular interest in API design, cloud native
                    architectures, microservice scaling, CI/CD deployment
                    pipelines and database management, complemented by
                    experience in both backend and frontend frameworks.
                  </p>
                  <p className="text-black text-lg text-center mt-6">
                    What excites me the most is delivering products that put
                    people first and leave a lasting positive impact. As a
                    recent Master’s graduate in Computer Science from the
                    University of Southern California (USC) with 2 years of
                    prior software development experience, I am eagerly looking
                    for my next opportunity to showcase my skillset. I'm
                    currently based in the San Francisco Bay Area and am willing
                    to relocate for the right opportunity.
                  </p>
                </div>
              </section>
              <section
                id="skills"
                className="flex-1 flex flex-col items-center justify-center scroll-mt-20"
              >
                <h2 className="text-3xl font-bold text-black">SKILLS</h2>
                <hr
                  style={{
                    border: "none",
                    borderTop: "5px solid blue",
                    margin: "0",
                    width: "80px",
                    marginTop: "10px",
                  }}
                />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-12">
                  {skills.map((skill, index) => (
                    <SkillCard
                      key={skill}
                      icon={`/skills/${skillIcons[index]}.svg`}
                      name={skill}
                    />
                  ))}
                </div>
              </section>
            </div>
            <section
              id="projects"
              className="flex flex-col items-center justify-center py-20 scroll-mt-20"
            >
              <div className="w-full flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold text-black">PROJECTS</h2>
                <hr
                  style={{
                    border: "none",
                    borderTop: "5px solid blue",
                    margin: "0",
                    width: "80px",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>

              <div className="w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                  <ProjectCard
                    projectName="CloudSmith - Cloud Native CI/CD Deployment"
                    image="/projects/cloud.png"
                    description="A developer-centric CI/CD platform that enables one-click deployment of web applications from GitHub to AWS using a microservices architecture with Jenkins, Kafka, Docker, ECS/Fargate, and Terraform."
                    skills={["AWS", "Javascript", "Kafka"]}
                    githubLink="https://github.com/salil-fernandes/CloudSmith-CI-CD-Deployment"
                  />

                  {/* Second project card */}
                  <ProjectCard
                    projectName="LLM Hallucination Detection & Reduction"
                    image="/projects/hallucination.png"
                    description="This framework detects and reduces LLM hallucinations using a two-stage pipeline that combines NLI-based inference, entropy scoring and Wikipedia fact-checking for detection, then applies RAG with LangChain and Pinecone for mitigation."
                    skills={["Python", "LangChain", "Jupyter"]}
                    githubLink="https://github.com/salil-fernandes/LLM-Hallucination-Detection-and-Reduction-Framework"
                  />

                  {/* Third project card - will be centered in next row */}
                  <div className="md:col-span-2 w-full md:w-1/2">
                    <ProjectCard
                      projectName="Stock Trading Platform"
                      image="/projects/stock.png"
                      description="A full-stack web application simulates real-time stock trading using Angular, Node.js, MongoDB, and Finnhub APIs, featuring live price quotes, interactive Highcharts visualizations, buy/sell transactions, portfolio management and a watchlist, all hosted on Google Cloud Platform."
                      skills={["Angular", "Typescript", "Node.js"]}
                      githubLink="https://github.com/salil-fernandes/Real-Time-Stock-Trading-Simulator"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section
              id="education"
              className="flex flex-col items-center justify-center py-20 scroll-mt-20"
            >
              <div className="w-full flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold text-black">EDUCATION</h2>
                <hr
                  style={{
                    border: "none",
                    borderTop: "5px solid blue",
                    margin: "0",
                    width: "80px",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>

              <div className="flex flex-row gap-12 flex-wrap justify-center px-8">
                <EducationCard
                  universityName="University of Southern California"
                  logo="/education/usc.png"
                  backgroundColor="#991b1e"
                  degree="Master of Science, Computer Science"
                  dates="August 2023 – May 2025"
                  gpa="3.85/4"
                />
                <EducationCard
                  universityName="University of Mumbai"
                  logo="/education/mumbai.png"
                  backgroundColor="#000000"
                  degree="Bachelor of Engineering, Computer Engg"
                  dates="August 2017 – June 2021"
                  gpa="4/4"
                />

                {/* Add more EducationCard components here for other degrees */}
              </div>
            </section>
            <section
              id="experience"
              className="flex flex-col items-center justify-center py-20 scroll-mt-20"
            >
              <div className="w-full flex flex-col items-center mb-12">
                <h2 className="text-3xl font-bold text-black">EXPERIENCE</h2>
                <hr
                  style={{
                    border: "none",
                    borderTop: "5px solid blue",
                    margin: "0",
                    width: "80px",
                    marginTop: "10px",
                    marginBottom: "20px",
                  }}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center px-8 w-full items-stretch flex-wrap">
                <ExperienceCard
                  company="Easley Dunn Productions"
                  logo="/experience/easley.png"
                  backgroundColor="#000000"
                  position="Software Engineer Intern"
                  dates="May 2025 – Present"
                  description={[
                    "Developed and optimized CI/CD pipelines using Python, C# and Jenkins scripts to automate builds and integrated testing, reducing deployment time and accelerating agile sprint delivery cycles.",
                    "Built scalable backend microservices in Node.js, AWS EC2 and PostgreSQL delivering user authentication and a geolocation based emergency connection mapping service, supporting 1500+ monthly active users."
                  ]}
                />
                <ExperienceCard
                  company="Insider.in"
                  logo="/experience/insider.png"
                  backgroundColor="#d11460"
                  position="Software Development Engineer 1"
                  dates="August 2021 – July 2023"
                  description={[
                    "Built robust REST APIs using Javascript, AWS Lambda Serverless Framework, and API Gateway for the Ticket Booking SaaS platform to manage high-volume sales traffic while minimizing system downtime.",
                    "Enhanced web performance through AWS CloudFront static asset caching, Emotion CSS-in-JS styling, and server-side rendering implementation with Typescript, Next.js, and React to accelerate page load speeds.",
                    "Expanded backend capacity to accommodate significant traffic increases by implementing CI/CD pipelines with Jenkins, Git, and CircleCI, alongside Docker containerization and Terraform-managed AWS EKS Kubernetes clusters, reducing operational costs while ensuring reliable uptime during critical sales periods.",
                    "Spearheaded the transition from Algolia to Elasticsearch for the search infrastructure, incorporating Kibana analytics and tailored scoring algorithms that utilize MongoDB event data to enhance ticket purchase conversion.",
                  ]}
                />
                <ExperienceCard
                  company="Young Women's Christian Association"
                  logo="/experience/ywca.png"
                  backgroundColor="#1c59ae"
                  position="Backend Developer Intern"
                  dates="August 2019 – June 2021"
                  description={[
                    "Developed a Java-based Android application for the YWCA of Mumbai using Firebase, enabling real-time event updates, user authentication, and seamless database integration to increase event participation and support a growing user base.",
                    "Enhanced user engagement through push notification implementation and an optimized RecyclerView interface, driving higher event registration rates and improving visibility for hostel facilities and women's initiatives.",
                    "Improved application performance on low-end devices with a fragment-based navigation system, and streamlined member verification processes using Firebase Authentication and Realtime Database to reduce manual processing time while maintaining reliable uptime.",
                  ]}
                />

                {/* Add more ExperienceCard components here */}
              </div>
            </section>
          </div>
          <footer
            id="contact"
            className="w-full py-4 text-center text-white"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="flex justify-center">
              <div className="w-4/5">
                <div className="flex justify-between mb-10">
                  <h3 className="text-xl font-bold">SALIL FERNANDES</h3>
                  <div className="flex flex-col">
                    <h3 className="font-bold">SOCIALS</h3>
                    <div className="flex flex-row gap-4 mt-2">
                      <a
                        href="https://www.linkedin.com/in/salilfernandes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:opacity-70 transition-opacity p-3 rounded-full"
                        style={{ color: "#4d4c4c", backgroundColor: "#FFFACD" }}
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href="mailto:salilfernandes73@gmail.com"
                        className="text-2xl hover:opacity-70 transition-opacity p-3 rounded-full"
                        style={{ color: "#4d4c4c", backgroundColor: "#FFFACD" }}
                      >
                        <FaEnvelope />
                      </a>
                      <a
                        href="https://github.com/salil-fernandes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:opacity-70 transition-opacity p-3 rounded-full"
                        style={{
                          color: "#4d4c4c",
                          backgroundColor: "#FFFACD",
                        }}
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    border: "none",
                    borderTop: "1px solid gray",
                    margin: "0",
                  }}
                />
              </div>
            </div>
            <p style={{ fontSize: "10px", marginTop: "10px" }}>
              &copy; 2025 Salil Fernandes. All rights reserved.
            </p>
          </footer>
        </>
      }
    </>
  );
}
