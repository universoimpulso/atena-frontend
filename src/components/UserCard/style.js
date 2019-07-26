import styled from 'styled-components'
import theme from '~/styles/theme'

export const StyledUserCard = styled.div`
  background-color: ${theme.color.white};
  height: 413px;
  width: 325px;
  width: ${props => props.width};
  margin-right: 8px;
  padding: 0 12px 18px;
  box-shadow: 8px 8px 60px 0px rgba(0, 0, 0, 0.08);
  margin-top: ${({ first }) => (first ? null : ` 70px;`)};
  order: ${({ order }) => order};
  border-radius: 10px;
  position: relative;
`

export const Container = styled.div`
  background-color: #fff;
  height: 413px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  figure {
    margin-top: 0;
    background-color: #6567a9;
    padding-top: 30px;
    display: flex;
    width: 232px;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  img {
    width: 216px;
    height: 216px;
    border-radius: 50%;
    padding: 0 5px 8px 5px;
  }
`

export const Position = styled.div`
  background-color: #fff;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: #6567a9;
  display: flex;
  position: absolute;
  transform: translateY(330%);
  text-align: center;

  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`

export const Info = styled.div`
  margin-top: 30px;
  padding-bottom: 14px;
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    color: #595b98;
  }
`

export const Point = styled.div`
  flex: 1;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  flex-direction: column;
  text-align: center;
  border-right: ${props => (props.border ? 'solid 1px #e2e2e2' : 'none')};
  p {
    color: #666c71;
    font-size: 16px;
    font-weight: bold;
    padding: 6px;
    margin: 0;
  }
`
