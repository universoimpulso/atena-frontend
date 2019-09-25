import styled from 'styled-components'
import theme from '../../styles/theme'

export const StyledScreenRanking = styled.section`
  .layout {
    padding-top: 0;
    background-color: #fdfdfd;
    color: #666c71;
    padding-bottom: 80px;
  }

  main {
    padding-top: 240px;
    padding-bottom: 100px;
  }

  ._inner {
    flex: 1;
    background-color: ${props => theme.color.bg};
    color: ${props => theme.color.gray};
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
    text-transform: uppercase;
  }

  @media (max-width: 760px) {
    main {
      padding-top: 160px;
      padding-bottom: 60px;
    }

    .super {
      padding: 0 20px;
    }

    ._inner > p {
      margin-top: 30px;
    }
  }
`

export const StyledRectangle = styled.div`
  background: ${props =>
    props.active ? theme.color.primary : theme.color.white};
  font-size: ${theme.spacing.unit * 2.5}px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  max-height: 100px;
  padding: 40px 0;
  cursor: pointer;
  flex: 1;

  p {
    line-height: 100%;
    display: inline-block;
    color: ${props => (props.active ? theme.color.white : theme.color.gray)};
    font-weight: 600;
  }

  p:after {
    content: '';
    display: block;
    width: ${props => (props.active ? '30px' : 0)};
    height: 3px;
    background: #c9ced2;
    border-radius: 3px;
    position: absolute;
    transform: translateY(6px);
    transition: 0.2s all ease-in;
  }

  p:hover {
    color: ${props =>
      props.active ? theme.color.white : theme.color.primaryHover};
    :after {
      width: 30px;
      background: ${props =>
        props.active ? theme.color.white : theme.color.primaryHover};
    }
  }
`

export const Loading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 120px 0 400px 0;
`

export const StyledRectangleGroup = styled.div`
  display: flex;
  flex: 1;
  margin: 100px 172px;

  div:first-child {
    border-radius: 100px 0 0 100px;
  }

  div:last-child {
    border-radius: 0 100px 100px 0;
  }

  @media only screen and (max-width: 768px) {
    margin: 60px 20px 30px;
  }
`

export const UsersRanking = styled.div`
  margin: 50px 172px;

  @media only screen and (max-width: 900px) {
    margin: 50px 20px;
  }
`

export const RankingHeader = styled.div`
  color: #595b98;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  width: 100%;

  .ranking {
    flex: 1;
    max-width: 88px;
  }

  .level {
    flex: 2;
    max-width: 100px;
    text-align: center;

    @media only screen and (max-width: 768px) {
      max-width: 40px;
    }
  }

  .xp {
    flex: 1;
    max-width: 150px;
    text-align: center;

    @media only screen and (max-width: 768px) {
      text-align: right;
    }
  }

  .userInfo {
    flex: 2;
  }
`
