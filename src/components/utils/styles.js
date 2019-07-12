import styled from "styled-components";
import theme from "../../styles/theme";

export const StyledScreenError = styled.section`
  main {
    padding-bottom: 100px;
  }

  ._inner {
    background: transparent;
    color: ${theme.color.gray};
    flex: 1;
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
    color: ${theme.color.secondary};
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

export const Loading = styled.div`
  align-items: center;
  display: flex;
  height: ${({ height }) => height || "initial"};
  justify-content: center;
  padding: ${({ paddingSize }) => paddingSize || "0"};
  width: ${({ width }) => width || "100%"};
  img {
    height: ${({ imgSize }) => imgSize || "10rem"};
  }
`;

export const SmallLoadingWrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  height: ${({ height }) => height || "100%"};
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: ${({ width }) => width || "100%"};
  z-index: 10;
  img {
    height: 40%;
    margin: 0 auto;
  }
`;

export const SmallErrorWrapper = styled.div`
  align-items: center;
  background: ${theme.color.white};
  border-radius: 10px;
  color: ${theme.color.primary};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: ${({ height }) => height || "100%"};
  justify-content: center;
  padding: 14px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: ${({ width }) => width || "100%"};
  z-index: 1000;
  p {
    color: ${theme.color.gray};
    padding-bottom: 40px;
  }
`;
