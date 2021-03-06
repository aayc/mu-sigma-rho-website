import React from 'react'
import { Component } from 'react'
import { Grid, Card, Image, Header } from 'semantic-ui-react'
import request from 'superagent'

const bioUrl = `https://spreadsheets.google.com/feeds/cells/1MstSyY5m7Q0wNqWVNjc8doUwzDWWsrOisXuzn5MQePM/od6/public/values?alt=json-in-script&key=${process.env.google_apis}&callback=CALLBACK`


class Contact extends Component {
  constructor (props) {
    super(props)

    this.state = {
      names: [],
      bios: [],
      positions: [],
      imgs: []
    }
    request.get(bioUrl).end((err, resp) => {
      if (!err) {
        // This is probably the biggest hack of the whole website.  Receive the callback FUNCTION but instead
        // of evaluating it, remove the callback part and strip the json out.
        // Then hardcode set the name, position, and biography.  Sorry
        let sheet = JSON.parse(resp.text.substring(resp.text.indexOf("CALLBACK(") + 9, resp.text.length - 2))
        let data = sheet.feed.entry.filter(cell => cell["gs$cell"].row !== "1")
        let names = data.filter(cell => cell["gs$cell"].col === "1").map(cell => cell["gs$cell"]["$t"])
        let positions = data.filter(cell => cell["gs$cell"].col === "2").map(cell => cell["gs$cell"]["$t"])
        let bios = data.filter(cell => cell["gs$cell"].col === "3").map(cell => cell["gs$cell"]["$t"])
        let imgs = data.filter(cell => cell["gs$cell"].col === "4").map(cell => cell["gs$cell"]["$t"])

        this.setState({
          names: names,
          bios: bios,
          positions: positions,
          imgs: imgs
        })
      }
    })
  }

  range = (b) => [...Array(b).keys()]

  render () {
    const { names, bios, positions, imgs } = this.state

    return (
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
            <center>
              <Header as='h1'>Mu Sigma Rho Presidency</Header>
              <p>Have questions or suggestions? &nbsp; Contact us at <a href="mailto:mu.sigma.rho@stat.byu.edu?Subject=Inquiry">mu.sigma.rho@stat.byu.edu</a></p>
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Card.Group itemsPerRow={2} centered>
      {
        this.range(names.length).map(i => {
          return (
            <Card style={{width: 400, marginLeft: 70, marginRight: 70, boxShadow: "none"}}>
              <center><Image style={{ width: 300, height: "auto"}} src={imgs[i]} /></center>
              <Card.Content style={{border: 0}}>
                <Card.Header>{names[i]}</Card.Header>
                <Card.Meta>{positions[i]}</Card.Meta>
                <Card.Description>{bios[i]}</Card.Description>
              </Card.Content>
            </Card>
          )
        })
      }
            </Card.Group>
      </Grid>
    );
  }
}

            /*
             *
              <Card.Content extra>
                <a>
                  <Icon name='user' />
                  10 Friends
                </a>
              </Card.Content>
             *
             * <Grid.Row>
            <Grid.Column width={5}>
            <center><h3>{positions[i] + ": " + names[i]}</h3></center>
            <br />
            <Image src={imgs[i]} rounded/>
            </Grid.Column>
            <Grid.Column width={11}> 
            <p style={{"line-height": 40}}>{bios[i]}</p>
            </Grid.Column>
            </Grid.Row>*/

export default Contact
