import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus, FiSearch } from 'react-icons/fi';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Quick Ideas</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive></ButtonText></li>
        <li><ButtonText title="Frontend"></ButtonText></li>
        <li><ButtonText title="Backend"></ButtonText></li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'Vite' },
              { id: '2', name: 'Next' }
            ]
          }}></Note>
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}