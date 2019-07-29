import styled from 'styled-components'
import Select from 'react-select'
import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  height: 410px;
  margin: 60px 0 30px 0;
  width: 100%;
`

export const CardsWrapper = styled.div`
  flex: 1;
  position: relative;
  &:not(:last-child) {
    margin-right: 30px;
  }
  h4 {
    color: ${theme.color.primary};
    font-size: 16px;
    margin-bottom: 30px;
    text-transform: uppercase;
  }
`

export const Card = styled.div`
  background: ${theme.color.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: space-between;
  height: 110px;
  margin-bottom: 10px;
  padding: 15px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  p {
    display: inline-block;
    color: ${theme.color.gray};
    font-weight: bold;
  }
  h1 {
    font-size: 25px;
    color: ${theme.color.primaryHover};
    font-weight: bold;
    margin: 0;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const StyledSelect = styled(Select)`
  color: ${theme.color.primaryHover};
  font-weight: bold;
  margin-left: 5px;
  text-transform: uppercase;
  width: 40%;
`
export const Percentage = styled.span`
  color: ${props =>
    props.positive ? theme.color.green : theme.color.secondary};
  font-weight: bold;
  margin-left: 3px;
`
