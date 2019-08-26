import styled from 'styled-components'
import theme from '../../styles/theme'

export const AccordionWrapper = styled.div`
  & > section {
    text-decoration: none;
    border-bottom: 1px solid #e2e2e2;
    display: block;
    cursor: pointer;

    &:focus {
      outline: none;

      .accordion__link {
        color: ${props => theme.color.primary};
      }
    }
  }

  .accordion__link {
    color: ${props => theme.color.gray};
    font-size: ${props => theme.fontSize.medium};
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 30px 0px;

    &:hover {
      color: ${props => theme.color.primary};
    }
  }
`

export const Awnser = styled.div`
  ${({ selected }) =>
    selected
      ? `opacity: 1;
        visibility: visible;
        height: auto;
        transition: 0.2s all ease-in;`
      : `height: 0;
        opacity: 0;
        visibility: hidden;`}

  & > p {
    color: ${props => theme.color.gray};
    text-align: left;
    margin-bottom: 30px;
    cursor: auto;
  }
`
export const Icon = styled.i`
  ${({ selected }) =>
    selected
      ? `transition: 0.2s all ease-in;
                transform: rotate(180deg);`
      : `transition: 0.2s all ease-in;
                transform: rotate(0);`}
`
