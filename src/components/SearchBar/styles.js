import styled from 'styled-components'
import Select from 'react-select'
import theme from '~/styles/theme'

export const Container = styled.section`
  align-items: space-between;
  color: ${theme.color.gray};
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: 100%;
  label {
    font-size: 14px;
    line-height: 50px;
    margin: 0 12px;
  }
`

export const SearchBar = styled.input`
  border: none;
  border-radius: 6px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  color: ${theme.color.gray};
  font-weight: bold;
  height: 50px;
  padding: 0 12px;
  ::placeholder {
    color: ${theme.color.gray};
    font-weight: bold;
  }
`

export const StyledSelect = styled(Select)`
  color: ${theme.color.gray};
  flex-grow: 1;
`
