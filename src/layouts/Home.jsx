import React from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

const HomepageLayout = () => (
  <div>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              About BYU Mu Sigma Rho
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Mu Sigma Rho is a National Statistical Honors Society whose purpose is the promotion and encouragement of scholarly activity in statistics
              and the recognition of worthwhile achievement among the staff and students.
            </p>
            <p style={{ fontSize: '1.33em' }}>
              It aims to do this by electing members according to their academic
              achievements, engaging in activities designed to promote the statistical and general scholarly development of its members, and encouraging participation
              in the various professional statistical societies and associations.
            </p>
            <Button size='huge' href="/events">See Our Events
            <Icon name='right arrow' />
            </Button>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' alt="BYU Statistics Department Logo" src="stat-logo.gif" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='left' width={6}>
            <Image bordered rounded size='large' alt="put picture here" style={{height: "auto", maxWidth: "100%"}} src='/cohort.jpg' />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              How Do I Join?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Invitations to join will be extended in Winter semester (around February) of 2019.  We require that students:</p>
              <ul>
                <li>Have completed two years of college course work</li>
                <li>Have completed 8 semester hours of statistics courses, of which at least 5 must be junior/senior level.</li>
                <li>Have a 3.25 GPA in all statistics courses.</li>
                <li>Be in the top 1/3 of their class in all statistics course work.</li>
              </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Presidency' />
              <List link inverted>
                <List.Item as='a'>Aubrey Odom</List.Item>
                <List.Item as='a'>Matt Drewer</List.Item>
                <List.Item as='a'>Dana Yow</List.Item>
                <List.Item as='a'>Aaron Chan</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Advisors' />
              <List link inverted>
                <List.Item as='a'>Dr. Candace Berrett</List.Item>
                <List.Item as='a'>Dr. Scott Grimshaw</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
)

export default HomepageLayout
