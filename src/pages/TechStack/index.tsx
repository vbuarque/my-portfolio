import {
  Main,
  Heading,
  TitleHeading,
  SubtitleHeading,
  TechStackGrid,
  GridItem,
  GridImage
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
          <GridItem>
            <GridImage
              src={HtmlIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={CssIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={JavascriptIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={BootstrapIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={ReactIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={TypescriptIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={SCIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={SassIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={NodeIcon}
            />
          </GridItem>

          <GridItem>
            <GridImage
              src={GitIcon}
            />
          </GridItem>

        </TechStackGrid>
      </Main>
    </>
  );
}
