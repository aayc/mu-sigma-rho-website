import HomepageLayout from './layouts/Home.jsx'
import HomepageHeading from './layouts/HomeHeading.jsx'
import ContactLayout from './layouts/Contact.jsx'
import EventsLayout from './layouts/Events.jsx'
import PhotosLayout from './layouts/Photos.jsx'
import TShirtContestLayout from './layouts/TShirtContest.jsx'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Icon,
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
      once={false}
      onBottomPassed={this.showFixedMenu}
      onBottomPassedReverse={this.hideFixedMenu}
      >
      <Segment
      textAlign='center'
      style={{ minHeight: (window.location.pathname === "/" ? 700 : 0), padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as="a">Mu Sigma Rho</Menu.Item>
                <Menu.Item as={Link} to="/" active={window.location.pathname==="/"}>Home</Menu.Item>
                <Menu.Item as={Link} to="/events" active={window.location.pathname==="/events"}>Events</Menu.Item>
                <Menu.Item as={Link} to="/photos" active={window.location.pathname==="/photos"}>Photos</Menu.Item>
                <Menu.Item as={Link} to="/contact" active={window.location.pathname==="/contact"}>Contact</Menu.Item>
                {/*<Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                </Menu.Item>*/}
              </Container>
            </Menu>
            {window.location.pathname === "/" ? <HomepageHeading /> : <div></div>}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}>
            <Menu.Item as="a">Mu Sigma Rho</Menu.Item>
            <Menu.Item as={Link} to="/" active={window.location.pathname==="/"}>Home</Menu.Item>
            <Menu.Item as={Link} to="/events" active={window.location.pathname==="/events"}>Events</Menu.Item>
            <Menu.Item as={Link} to="/photos" active={window.location.pathname==="/photos"}>Photos</Menu.Item>
            <Menu.Item as={Link} to="/contact" active={window.location.pathname==="/contact"}>Contact</Menu.Item>
            {/*<Menu.Item as='a'>Log in</Menu.Item>*/}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              textAlign='center'
              style={{ minHeight: (window.location.pathname === "/" ? 700 : 0), padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    {/*<Button as='a' inverted>
                      Log in
                    </Button>*/}
                  </Menu.Item>
                </Menu>
              </Container>
              {window.location.pathname === "/" ? <HomepageHeading mobile/> : <div></div>}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        
        <ResponsiveContainer>
          <Route exact path="/" component={HomepageLayout} />
          <Route exact path="/events" component={EventsLayout} />
          <Route exact path="/photos" component={PhotosLayout} />
          <Route exact path="/contact" component={ContactLayout} />
          <Route exact path="/tshirt" component={TShirtContestLayout} />
        </ResponsiveContainer>
        

        
      </BrowserRouter>
    )
  }
}

export default App
