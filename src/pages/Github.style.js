import styled from "styled-components";
import theme from "../styles/theme";

const StyledScreenGithub = styled.section`
  main {
    padding-top: 250px;
    padding-bottom: 100px;
  }

  .title {
    font-size: 20px;
    line-height: 1.5;
  }

  .super {
    font-size: 20px;
    line-height: 1.5;
    margin-top: 60px;

    a {
      color: ${props => theme.color.primary};
    }
  }

  .help {
    font-size: 16px;
    line-height: 1.5;
    color: ${props => theme.color.white};
    text-align: center;

    a {
      color: ${props => theme.color.white};
    }
  }

  a {
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
    display: block;

    &:hover {
      color: ${props => theme.color.primaryHover};
    }
  }

  ._inner {
    flex: 1;
    margin-top: 100px;
  }

  ._inner > p {
    margin-top: 60px;
  }

  @media (max-width: 760px) {
    main {
      padding-top: 160px;
      padding-bottom: 60px;
    }

    ._inner > p {
      margin-top: 30px;
    }
  }
`;

export default StyledScreenGithub;
