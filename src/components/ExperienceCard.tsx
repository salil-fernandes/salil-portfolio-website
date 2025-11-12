import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  logo: string;
  backgroundColor: string;
  position: string;
  dates: string;
  description: string[];
}

export default function ExperienceCard({
  company,
  logo,
  backgroundColor,
  position,
  dates,
  description,
}: ExperienceCardProps) {
  return (
    <div
      className="w-full md:w-auto md:flex-1 md:max-w-sm"
      style={{ position: "relative" }}
    >
      <div
        className="rounded-lg overflow-hidden h-full"
        style={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Header with company name */}
        <div
          className="px-6 text-center relative"
          style={{
            backgroundColor: backgroundColor,
            paddingTop: "60px",
            paddingBottom: "60px",
          }}
        >
          <h3 className="text-white text-lg">{company}</h3>

          {/* Company Logo - Positioned to overlap both sections */}
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
              alt={company}
              className="rounded-full object-contain"
              style={{
                border: "1px solid white",
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
          className="bg-white px-4"
          style={{
            paddingTop: "90px",
            paddingBottom: "48px",
            minHeight: "450px",
          }}
        >
          {/* Position */}
          <h4 className="text-center text-xl font-semibold text-black mb-4">
            {position}
          </h4>

          {/* Dates */}
          <p className="text-center text-md text-black mb-6">{dates}</p>

          {/* Description - Bullet Points */}
          <ul className="text-gray-600 space-y-3 list-disc pl-6">
            {description.map((item, index) => (
              <li key={index} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
