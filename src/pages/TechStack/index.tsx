import {
  Main,
  Heading,
  TitleHeading,
  SubtitleHeading,
} from "./styles";

import TechStackItems from '../../components/GridItems';

interface Props {
  toggleTheme(): void;
}

export default function TechStack({ toggleTheme }: Props) {
  return (
    <>
      <Main>
        <Heading>
          <TitleHeading>Tech Stack</TitleHeading>
          <SubtitleHeading>Algumas tecnologias que eu utilizo.</SubtitleHeading>
        </Heading>
        <TechStackItems toggleTheme={toggleTheme}/>
      </Main>
    </>
  );
}
