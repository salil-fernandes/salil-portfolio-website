import Image from "next/image";

interface SkillCardProps {
  icon: any;
  name: string;
}

export default function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center px-4 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      style={{
        backgroundColor: "#1a1a1a",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        paddingBottom: "20px",
      }}
    >
      <div
        className=" flex items-center justify-center"
        style={{ width: "64px", height: "64px" }}
      >
        {typeof icon === "string" ? (
          <img src={icon} alt={name} width={40} height={40} />
        ) : (
          <div className="text-xl text-red-600">{icon}</div>
        )}
      </div>
      <h3 className="text-white text-sm font-semibold">{name}</h3>
    </div>
  );
}
