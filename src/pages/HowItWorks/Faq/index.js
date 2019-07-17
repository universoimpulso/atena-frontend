import React from "react";
import StyledFaq from "./style";
import { Flex, Box } from "@rebass/grid";
import Title from "../../../components/Title";
import Accordion from "../../../components/Accordion";
import Button from "../../../components/Button";

const Faq = () => (
  <section className="container faqs">
    <StyledFaq>
      <Flex
        justifyContent="space-between"
        css={{ margin: "0 -25px" }}
        flexWrap="wrap"
      >
        <Box width={[1, 2 / 5]} px={25}>
          <Title extralarge>
            Dúvi
            <br />
            Das <br />
            <span className="red">
              Fre
              <br />
              quen
              <br />
              tes
            </span>
          </Title>
        </Box>
        <Box width={[1, 3 / 5]} px={25}>
          <Accordion />
          <Button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/impulso/Atena-Um-projeto-de-gamifica-o-open-source-da-Impulso-cac95f0898e648f6a31f5911a3c46d41"
            >
              Mais dúvidas
            </a>
          </Button>
        </Box>
      </Flex>
    </StyledFaq>
  </section>
);

export default Faq;
