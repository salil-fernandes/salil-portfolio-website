import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  projectName: string;
  image: string;
  description: string;
  skills: string[];
  githubLink: string;
}

export default function ProjectCard({
  projectName,
  image,
  description,
  skills,
  githubLink,
}: ProjectCardProps) {
  return (
    <div
      className="w-full rounded-lg overflow-hidden h-full"
      style={{
        backgroundColor: "#1a1a1a",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        minHeight: "400px",
      }}
    >
      <div className="flex flex-col h-full p-8">
        {/* Text Content Section */}
        <div className="flex flex-col justify-between flex-grow">
          {/* Project Name */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">
              {projectName}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center mb-6">
            <img
              src={image}
              alt={projectName}
              className="w-full h-auto object-contain max-h-48 rounded-lg"
            />
          </div>

          {/* Skills and GitHub Link Row */}
          <div className="flex items-center justify-between gap-4">
            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-white text-sm"
                  style={{
                    backgroundColor: "#2d3748",
                    border: "1px solid #4a5568",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors flex-shrink-0"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
