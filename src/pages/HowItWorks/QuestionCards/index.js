import React from 'react'

import badge from '~/assets/badge.svg'
import stars from '~/assets/stars.svg'

import Card from '~/components/Card'
import { Flex, Box } from '@rebass/grid'
import Title from '~/components/Title'
import Button from '~/components/Button'

const QuestionCards = () => {
  return (
    <section className="container cards">
      <Flex css={{ margin: '0 -25px' }} flexWrap="wrap">
        <Box width={[1, 1 / 2]} px={25}>
          <Card>
            <img alt="estrelas" src={stars} />
            <Title>
              O QUE SÃO E<br /> COMO GANHAR <br />
              <span className="red">NÍVEIS</span>?
            </Title>
            <p className="super">
              Os <strong>Níveis</strong> são representações simplificadas do seu
              avanço na Atena e são atingidos mediante uma determinada
              quantidade de <strong>XP</strong>. Além disso, eles conferem o
              acesso à novas missões, cargos e recompensas.
            </p>
            <Button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.notion.so/impulso/N-veis-Como-ganhar-6d67592b078f49b3879ce4db91081be4"
              >
                mais detalhes
              </a>
            </Button>
          </Card>
        </Box>
        <Box
          width={[1, 1 / 2]}
          px={25}
          css={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Card>
            <img alt="badge" src={badge} />
            <Title>
              O QUE SÃO E <br /> COMO GANHAR <br />{' '}
              <span className="red">CONQUISTAS</span>?
            </Title>
            <p className="super">
              <strong>Conquistas</strong> são formas de reconhecer o seu
              esforço. Após realizar algo que mereça esse reconhecimento, você
              será condecorado(a) com uma <strong>medalha</strong> que
              representa este marco.
            </p>
            <Button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.notion.so/impulso/Conquistas-Como-ganhar-f8cded2569e7411ebabb78c8e99a2f94"
              >
                mais detalhes
              </a>
            </Button>
          </Card>
        </Box>
      </Flex>
    </section>
  )
}

export default QuestionCards
