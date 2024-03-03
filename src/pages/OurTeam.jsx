import { GlobalStyle } from "../styles/global.css";
import { TeamContainer, TeamMember, TeamMemberDesc, Wrapper } from "../styles/our-team.css";
import team from "../team";

export default function OurTeam() {
    console.log(team);
    const teamMembers = team.map((member) => {
        return (
            <TeamMember key={member.id}>
                <img src={member.coverImg} alt={member.name} />
                <TeamMemberDesc>
                    <h3>{member.name}</h3>
                    <h5>{member.role}</h5>
                    <p>{member.bio}</p>
                </TeamMemberDesc>
            </TeamMember>
        );
    });

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <TeamContainer>
                    {teamMembers}
                </TeamContainer>
            </Wrapper>
        </>
    )
}