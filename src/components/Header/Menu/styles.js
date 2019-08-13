import styled from 'styled-components'
import theme from '../../../styles/theme'

const StyledMenu = styled.ul`
  align-items: center;
  display: flex;
  height: 40px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: fit-content;

  li + li::before {
    content: '';
    background: ${theme.color.secondary};
    border-radius: 3px;
    display: inline-block;
    height: 4px;
    margin-bottom: 3px;
    margin-left: ${theme.fontSize.default};
    margin-right: ${theme.fontSize.default};
    width: 4px;
  }

  li {
    &:not(:first-child) a::after {
      transform: translateY(5px) translateX(32px);
    }
  }

  .user {
    margin-top: -15px;
    ::before {
      background: none;
    }

    img {
      border-radius: 50%;
      height: 50px;
      text-indent: -9999px;
      width: 50px;
    }
  }

  button {
    background: transparent;
    color: ${theme.color.white};
    cursor: pointer;
    font-weight: 600;
    outline: none;
    text-transform: uppercase;

    &::after {
      background: ${theme.color.primaryLight};
      border-radius: 3px;
      content: '';
      display: block;
      height: 3px;
      position: absolute;
      transition: 0.2s all ease-in;
      transform: translateY(5px);
      width: 0px;
    }

    &.selected::after {
      width: 20px;
    }

    &:hover {
      color: ${theme.color.primaryLight};

      &::after {
        width: 20px;
      }
    }
  }

  @media (max-width: 760px) {
    background: ${theme.color.primary};
    bottom: 0;
    flex-direction: column;
    left: 0;
    padding: 30px;
    position: fixed;
    top: 0;
    transform: translateX(-100%);
    z-index: 900;

    li + li::before {
      display: none;
    }

    a {
      display: block;
      padding: ${theme.fontSize.default};

      &::after {
        display: none;
      }
    }
  }
`

export default StyledMenu
