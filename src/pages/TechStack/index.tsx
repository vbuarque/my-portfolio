import {
  Main,
  Heading,
  TitleHeading,
  SubtitleHeading,
  TechStackGrid,
  TechStackItem
} from "./styles";

import ReactIcon from "../../assets/svg/react-icon.svg";
import BootstrapIcon from "../../assets/svg/bootstrap-icon.svg";
import CssIcon from "../../assets/svg/css-3-icon.svg";
import GitIcon from "../../assets/svg/git-icon.svg";
import HtmlIcon from "../../assets/svg/html-5-icon.svg";
import JavascriptIcon from "../../assets/svg/javascript-icon.svg";
import NodeIcon from "../../assets/svg/node-icon.svg";
import SassIcon from "../../assets/svg/sass-icon.svg";
import SCIcon from "../../assets/svg/styledcomponents-icon.svg";
import TypescriptIcon from "../../assets/svg/typescript-icon.svg";

export default function TechStack() {
  return (
    <>
      <Main>
        <Heading>
          <TitleHeading>Tech Stack</TitleHeading>
          <SubtitleHeading>Algumas tecnologias que eu utilizo.</SubtitleHeading>
        </Heading>

        <TechStackGrid>
          <TechStackItem 
            src={HtmlIcon}
          />
           <TechStackItem 
            src={CssIcon}
          />
          <TechStackItem 
            src={JavascriptIcon}
          />
           <TechStackItem 
            src={BootstrapIcon}
          />
          <TechStackItem 
            src={ReactIcon}
          />
           <TechStackItem 
            src={TypescriptIcon}
          />
          <TechStackItem 
            src={SCIcon}
          />
           <TechStackItem 
            src={SassIcon}
          />
          <TechStackItem 
            src={NodeIcon}
          />
           <TechStackItem 
            src={GitIcon}
          />
        </TechStackGrid>
      </Main>
    </>
  );
}
