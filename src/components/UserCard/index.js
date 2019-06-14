import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@rebass/grid";
import {
  StyledUserCard,
  StyledContainer,
  StyledPosition,
  StyledInfo,
  StyledPoint
} from "./style";

const Position = ({ children }) => <StyledPosition>{children}</StyledPosition>;

const Point = ({ label, value, ...props }) => (
  <StyledPoint {...props}>
    <p>{label}</p>
    <p>{value}</p>
  </StyledPoint>
);

const Info = ({ name, level, xp }) => (
  <StyledInfo>
    <h1>{name}</h1>
    <Flex justifyContent="center">
      <Point label="Level" value={level} border />
      <Point label="XP" value={xp} />
    </Flex>
  </StyledInfo>
);

const Container = ({ position, avatar, ...props }) => (
  <StyledContainer>
    <figure>
      <img alt="" src={avatar} />
    </figure>
    <Position>{position}º</Position>
    <Info {...props} />
  </StyledContainer>
);

const UserCard = ({ ...props }) => (
  <StyledUserCard {...props}>
    <Container {...props} />
  </StyledUserCard>
);

UserCard.propTypes = {
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  xp: PropTypes.number.isRequired
};

export default UserCard;
