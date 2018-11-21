import React from 'react'
import {
  Button,
  Container,
  Header,
  Image,
  Icon
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
    >
      <Image src='msr-logo.png' style={{width: "600px", height: "600"}}/>
    </Header>
    <Header
      as='h2'
      content='Participate in the T Shirt Design Contest!'
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Submit your design
      <Icon name='right arrow' />
    </Button>
    <Button primary size='huge'>
      View the candidates
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading
