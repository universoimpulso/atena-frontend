import React from 'react'
import { StyledFooter, StyledCopyright } from './style'
import impulsoIcon from '../../assets/impulso.svg'
import SocialLinks from './SocialLinks'

const Footer = () => (
  <StyledFooter>
    <section>
      <img className="impulsoIcon" src={impulsoIcon} alt="Logo da Impulso" />
      <SocialLinks />
      <hr />
      <StyledCopyright>
        2019 © Todos os direitos reservados. Impulso.
      </StyledCopyright>
    </section>
  </StyledFooter>
)

export default Footer
