import styled from "styled-components";
import theme from "../../styles/theme";

const StyledScreenError = styled.section`
  padding-top: 100px;
  main {
    padding-bottom: 100px;
  }

  ._inner {
    flex: 1;
    background-color: ${theme.color.bg};
    color: ${theme.color.gray};
    min-height: 400px;
  }

  ._inner > p {
    margin-top: 60px;
  }

  .super {
    max-width: 782px;
    margin: 0 auto;
    b {
      font-weight: 600;
    }
  }

  p.super {
    font-weight: 300;
  }

  .month {
    color: ${props => theme.color.secondary};
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

export default StyledScreenError;
