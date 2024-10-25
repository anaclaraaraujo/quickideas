import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Quick Ideas - React.Js e Ruby on Rails</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, error ratione suscipit velit nesciunt maiores odit accusantium ipsam.
            Quas quod tempore doloribus repellendus provident ab, consectetur dolor molestias.
            Omnis, voluptate?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="/">https://www.linkedin.com/in/anaclaraaraujoa/</a></li>
              <li><a href="/">https://github.com/anaclaraaraujo</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>
          <Button title="Volteeee"></Button>
        </Content>
      </main>
    </Container>
  )
}