import React, { Component } from 'react'
import { Grid, Card, Image, Container } from 'semantic-ui-react'
import request from 'superagent'
import keys from '../data/keys.json'

const albumUrl = `https://spreadsheets.google.com/feeds/cells/1eCZJqG1cekEOm2xdFmlEm13DHfmsOexKvQykfNr4Ltg/od6/public/values?alt=json-in-script&key=${keys.google_apis}&callback=CALLBACK`


class ImageCard extends Component {
	render () {
		const { imgSrc, header, linkTo, dateText, description} = this.props

		return (
			<Card
        href={linkTo}>
		    <Image src={imgSrc} />
		    <Card.Content>
		      <Card.Header>{header}</Card.Header>
		      <Card.Meta>
		        <span className='date'>{dateText}</span>
		      </Card.Meta>
		      <Card.Description>{description}</Card.Description>
		    </Card.Content>
		  </Card>
		)
	}
}

class Photos extends Component {
	constructor(props) {
		super(props)

    this.state = {
      photoCards: []
    }

    request.get(albumUrl).end((err, resp) => {
      if (!err) {
        let sheet = JSON.parse(resp.text.substring(resp.text.indexOf("CALLBACK(") + 9, resp.text.length - 2))
        let data = sheet.feed.entry.filter(cell => cell["gs$cell"].row !== "1")
        let titles = data.filter(cell => cell["gs$cell"].col === "1").map(cell => cell["gs$cell"]["$t"])
        let dates = data.filter(cell => cell["gs$cell"].col === "2").map(cell => cell["gs$cell"]["$t"])
        let descriptions = data.filter(cell => cell["gs$cell"].col === "3").map(cell => cell["gs$cell"]["$t"])
        let coverLinks = data.filter(cell => cell["gs$cell"].col === "4").map(cell => cell["gs$cell"]["$t"])
        let albumLinks = data.filter(cell => cell["gs$cell"].col === "5").map(cell => cell["gs$cell"]["$t"])

        let numAlbums = Math.min(titles.length, dates.length, descriptions.length, coverLinks.length, albumLinks.length)

        let cards = this.range(numAlbums).map(i => {
          return (
						<ImageCard
                key={albumLinks[i]}
								style={{padding: 10}}
								imgSrc={coverLinks[i]}
								header={titles[i]}
								dateText={dates[i]}
                linkTo={albumLinks[i]}
								description={descriptions[i]} />
        )})
        
        this.setState({
          photoCards: cards
        })
      }
    })
	}

	render () {
    const { photoCards } = this.state
		return (
			<Container style={{ marginTop: '3em' }}>
				<Grid columns={3} divided="vertically">
					{photoCards.map(card => (
							<Grid.Column key={card} width={5}>
                {card}
							</Grid.Column>
						))
					}
				
			</Grid>
			</Container>
		)
	}

  range = (b) => [...Array(b).keys()]
}

export default Photos
