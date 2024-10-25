import { Container } from "./styles"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
    <h1>
      Hello, Ana! Vamos codar? 😎
    </h1>
    <Button title="Entrar 🖖🏽" />
    <Button title="Cadastrar 🖖🏽" loading />
    <Button title="Voltar 🖖🏽" />
  </Container>
  )
}