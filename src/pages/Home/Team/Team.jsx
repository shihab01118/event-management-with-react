import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-10">Our Amazing Team</h2>
      <div className="grid grid-cols-3 gap-16">
        {team?.map((member) => (
          <TeamMember key={member.id} member={member}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default Team;
