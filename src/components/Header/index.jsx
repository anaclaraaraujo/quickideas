import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/anaclaraaraujo.png" 
          alt="Foto de perfil do usuário" 
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Ana Clara Araujo</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}