import React from "react";
import { DiCode  } from "react-icons/di";
import { DiDatabase  } from "react-icons/di";
import { DiAndroid  } from "react-icons/di";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        
        <h1>My Skills</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={DiCode}
            title={"frontend developement"}
            disc={`HTML, CSS, JavaScript, ReactJs`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={DiDatabase}
            title={"backend development"}
            disc={`NodeJs, ExpressJs, MongoDb, SQFlite`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={DiAndroid}
            title={"mobile app development"}
            disc={`Flutter`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
