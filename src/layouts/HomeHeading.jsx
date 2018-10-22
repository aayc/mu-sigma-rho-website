import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Mu Sigma Rho'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Participate in the T Shirt Design Contest!'
      inverted
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