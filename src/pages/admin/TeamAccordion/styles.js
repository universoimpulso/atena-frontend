import styled from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.section`
  margin: 30px 0;
  min-height: 150px;
  position: relative;
  width: 100%;
`

export const AccordionWrapper = styled.div`
  width: 100%;
  :not(:last-child) {
    border-bottom: solid 1px ${theme.color.lightGray};
  }
`

export const Header = styled.header`
  cursor: pointer;
  height: 80px;
  position: relative;
  p {
    color: ${theme.color.primary};
    font-size: 16px;
    font-weight: bold;
    margin: 30px 0 6px 0;
    text-transform: uppercase;
  }

  h1 {
    color: ${theme.color.primaryHover};
    margin: 0 0 40px 0;
    position: relative;
  }
`

export const Icon = styled.i`
  color: ${theme.color.primaryHover};
  font-size: 28px;
  position: absolute;
  left: 180px;
  ${({ selected }) =>
    selected
      ? `transition: 0.2s all ease-in;
          transform: rotate(180deg);`
      : `transition: 0.2s all ease-in;
          transform: rotate(0);`}
`

export const Wrapper = styled.div`
  ${({ selected }) =>
    selected
      ? `opacity: 1;
        visibility: visible;
        transition: 0.2s all ease-in;`
      : `height: 0;
        opacity: 0;
        visibility: hidden;`}

  display: flex;
  width: 100%;
`

export const Box = styled.div`
  color: ${theme.color.gray};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  width: ${props => props.width || '33%'};
  &:not(:last-child) {
    margin-right: 30px;
  }
  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  min-height: ${props => props.height || '144px'};
  justify-content: center;
  padding: 0 20px;
  width: 100%;

  div {
    display: flex;
    font-size: 12px;
    height: 40px;
    justify-content: space-between;
    line-height: 40px;
    &:not(:last-child) {
      border-bottom: solid 1px ${theme.color.lightGray};
    }
    span {
      color: ${theme.color.primaryHover};
    }
  }

  table {
    background: ${theme.color.background};
    border-collapse: collapse;
    border-radius: 3px;
    line-height: 30px;
    margin-top: 6px;
    width: 100%;
    tr {
      height: 40px;
      &:not(:last-child):not(:first-child) {
        border-bottom: solid 1px ${theme.color.lightGray};
      }
    }

    td {
      background: ${theme.color.white};
      border-left-color: white !important;
      border-right-color: white;
      text-align: center;
    }
    span {
      color: ${theme.color.primaryHover};
    }
  }
`
