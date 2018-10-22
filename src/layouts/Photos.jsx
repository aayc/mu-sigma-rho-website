import React, { Component } from 'react'
import { Grid, Card, Icon, Image, Container } from 'semantic-ui-react'

class ImageCard extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		const { imgSrc, header, dateText, description} = this.props

		return (
			<Card>
		    <Image src={imgSrc} />
		    <Card.Content>
		      <Card.Header>{header}</Card.Header>
		      <Card.Meta>
		        <span className='date'>{dateText}</span>
		      </Card.Meta>
		      <Card.Description>{description}</Card.Description>
		    </Card.Content>
		    {/*<Card.Content extra>
		      <a>
		        <Icon name='user' />
		        22 Friends
		      </a>
		    </Card.Content>*/}
		  </Card>
		)
	}
}

class Photos extends Component {
	constructor(props) {
		super(props)
	}

	render () {
		let testCards = [{ 
			imgSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', 
			header: "MSR Opening Social",
			dateText: "September 27th, 2018",
			description: "Click me to open the album (not implemented but that's the idea)"
		}, { 
			imgSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', 
			header: "MSR Lunch time",
			dateText: "October 15th, 2018",
			description: "This placeholder guy's name is Charles."
		}, { 
			imgSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', 
			header: "Random stuff",
			dateText: "2018",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien."
		}, { 
			imgSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', 
			header: "Random stuff",
			dateText: "2018",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien."
		}, { 
			imgSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', 
			header: "Random stuff",
			dateText: "2018",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien."
		}, { 
			imgSrc: 'https://react.semantic-ui.com/images/avatar/large/matthew.png', 
			header: "Random stuff",
			dateText: "2018",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien."
		}]

		return (
			<Container style={{ marginTop: '3em' }}>
				<Grid columns={3} divided="vertically">
					{testCards.map(card => (
							<Grid.Column width={5}>
								<ImageCard
									style={{padding: 10}}
									imgSrc={card.imgSrc}
									header={card.header}
									dateText={card.dateText}
									description={card.description}>
								</ImageCard>	
							</Grid.Column>
						))
					}
				
			</Grid>
			</Container>
		)
	}
}

export default Photos