import styled from 'styled-components'
import { RankingHeader } from '../styles'
import theme from '../../../styles/theme'

export const StyledRankingRow = styled(RankingHeader)`
  background-color: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 8px 8px 60px 0px rgba(0, 0, 0, 0.08);
  height: 107px;
  margin-bottom: 15px;
  margin-top: 15px;

  .ranking {
    align-self: center;
    color: #666c71;
    text-align: center;
  }

  .userInfo {
    align-items: center;
    align-self: center;
    border-left: solid 1px #e2e2e2;
    border-right: solid 1px #e2e2e2;
    color: #666c71;
    display: flex;
    height: 65%;
    padding-left: 10px;

    img {
      border-radius: 50%;
      max-height: 60px;
      max-width: 60px;
    }

    p {
      padding-left: 18px;
    }
  }
  .level {
    align-items: center;
    align-self: center;
    border-right: solid 1px #e2e2e2;
    color: #666c71;
    display: flex;
    height: 65%;
    justify-content: center;
    text-align: center;
  }

  .xp {
    align-self: center;
    color: #666c71;
    text-align: center;

  }

  @media only screen and (max-width: 768px) {
    .ranking {
      width: 55px;
    }

    .userInfo {
      height: 65%;

      img {
        max-height: 40px;
        min-width: 40px;
      }

      p {
        padding: 10px;
      }
    }

    .level {
      height: 65%;
    }
  }
`
