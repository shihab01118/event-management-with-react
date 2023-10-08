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
    <div className="max-w-6xl mx-8 md:mx-16 lg:mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">Our Amazing Team</h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-16">
        {team?.map((member) => (
          <TeamMember key={member.id} member={member}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default Team;
