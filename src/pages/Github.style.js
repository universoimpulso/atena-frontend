import styled from "styled-components";

const StyledScreenGithub = styled.section`
  background: ${props => props.background};
  background-size: cover;
  background-position: center;
  padding: 100px 0;

  .title {
    font-size: 20px;
    line-height: 1.5;
    font-family: ${props => props.theme.fontFamily.primary};

  }

  .super {
    font-size: 20px;
    line-height: 1.5;
    margin-top: 60px;

    a {
      color: ${props => props.theme.color.primary};
    }
  }

  .help {
    font-size: 16px;
    line-height: 1.5;
    color: ${props => props.theme.color.white};
    text-align: center;
    margin: 60px auto 0;
     flex: 1;

    a {
      color: ${props => props.theme.color.primaryHover};

      &:hover {
        color: ${props => props.theme.color.white};
      }
    }
  }

  a {
    font-weight: bold;
    text-decoration: none;
    margin-top: 10px;
    display: block;
    word-break: break-all;

    &:hover {
      color: ${props => props.theme.color.primaryHover};
    }
  }

  ._inner {
    flex: 1;
    max-height: 590px
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
