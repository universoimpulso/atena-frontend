import React from 'react'

import Title from '~/components/Title'
import { Flex, Box } from '@rebass/grid'

import ilustraAtena from '~/assets/ilustra-atena.svg'

const About = () => {
  return (
    <section className="container about">
      <Flex alignItems="center" flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <Title large color="primary">
            Mas afinal,
            <br />o que é a <span className="red">Atena</span> ?
          </Title>
          <p className="super">
            Inspirada na deusa grega da sabedoria, a <strong>Atena</strong> é
            uma iniciativa <strong>open source</strong> de gamificação da
            Impulso, que tem como objetivos promover o engajamento e premiar os
            esforços das pessoas que pertencem à Impulso Network.
          </p>
          <br />
          <p className="super ifdesktop">
            Assim que você entra na comunidade, automaticamente se tornará um(a)
            jogador(a) e poderá pontuar por meio da execução de diversas{' '}
            <strong>atividades</strong>, alcançar <strong>Níveis</strong> e
            obter <strong>conquistas</strong> como reconhecimento pelos seus
            esforços.
          </p>
        </Box>
        <Box width={[1, 1 / 2]}>
          <img
            src={ilustraAtena}
            alt="Ilustração da Atena"
            className="ilustra"
          />
        </Box>
      </Flex>
    </section>
  )
}

export default About
