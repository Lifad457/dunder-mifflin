import { GlobalStyle } from "../styles/global.css";
import { TeamContainer } from "../styles/our-team.css";
import { Wrapper } from "../styles/wrapper.css";
import team from "../team";

export default function OurTeam() {
    console.log(team);
    const teamMembers = team.map((member) => {
        return (
            <div key={member.id}>
                <h3>{member.name} - {member.role}</h3>
                <p>{member.bio}</p>
            </div>
        );
    });


    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <TeamContainer>
                    <h1>Our Team</h1>
                    {teamMembers}
                </TeamContainer>
            </Wrapper>
        </>
    )
}