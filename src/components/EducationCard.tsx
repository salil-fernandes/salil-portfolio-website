import Image from "next/image";

interface EducationCardProps {
  universityName: string;
  logo: string;
  backgroundColor: string;
  degree: string;
  dates: string;
  gpa: string;
}

export default function EducationCard({
  universityName,
  logo,
  backgroundColor,
  degree,
  dates,
  gpa,
}: EducationCardProps) {
  return (
    <div
      className="w-full md:flex-1 md:max-w-3xl"
      style={{ position: "relative", minWidth: "400px" }}
    >
      <div
        className="rounded-lg overflow-hidden"
        style={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Header with university name */}
        <div
          className="px-6 text-center relative"
          style={{
            backgroundColor: backgroundColor,
            paddingTop: "70px",
            paddingBottom: "70px",
          }}
        >
          <h3 className="text-white text-2xl">{universityName}</h3>

          {/* University Logo - Positioned to overlap both sections */}
          <div
            className="absolute left-1/2 flex items-center justify-center"
            style={{
              bottom: "-75px",
              transform: "translateX(-50%)",
              zIndex: 10,
              width: "130px",
              height: "130px",
            }}
          >
            <img
              src={logo}
              alt={universityName}
              className="rounded-full object-contain"
              style={{
                border: "5px solid white",
                backgroundColor: "white",
                width: "120px",
                height: "120px",
                padding: "10px",
              }}
              onError={(e) => console.error("Image failed to load:", logo)}
            />
          </div>
        </div>

        {/* White section with details */}
        <div
          className="bg-white px-8"
          style={{ paddingTop: "90px", paddingBottom: "32px" }}
        >
          {/* Degree */}
          <h4 className="text-center text-md font-semibold text-black mb-4">
            {degree}
          </h4>

          {/* Dates */}
          <p className="text-center text-md text-black mb-6">{dates}</p>

          {/* GPA */}
          <div className="text-black space-y-2">
            <p className="text-base text-md text-center">
              <span className="font-semibold">GPA:</span> {gpa}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
