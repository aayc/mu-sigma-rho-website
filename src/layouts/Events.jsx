
import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import {Container, Header, Card} from 'semantic-ui-react'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import request from 'superagent'
import keys from '../data/keys.json'
const CALENDAR_ID = 'mu.sigma.rho@stat.byu.edu'
const calUrl = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${keys.google_apis}`

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

class Events extends Component {
	constructor (props) {
		super(props)

		this.state = {
			events: [],
			// Todo handle recurring events
		}

		request.get(calUrl).end((err, resp) => {
			if (!err) {
				let responseEvents = JSON.parse(resp.text).items.map((event) => {
					console.log(JSON.stringify(event))
					return {
			          	start: new Date(event.start.date || event.start.dateTime),
			          	end: new Date(event.end.date || event.end.dateTime),
			          	location: event.location,
			            title: event.summary
			        }
	            })
				this.setState({ 
					events: responseEvents,
		            upcoming: responseEvents.filter(e => moment().isBefore(e.start)).slice(0, 3).map(e => {
		            	return {
		            		header: e.title,
		            		meta: moment(e.start).format("MMMM Do YYYY") + ", " + moment(e.start).format("h:mm a") + " - " + moment(e.end).format("h:mm a"),
		            		description: e.location
		            	}
		            })
		        })
			}
		})

	}

	render () {
		const { events, upcoming } = this.state

		return (
			<Container style={{ marginTop: '3em' }}>
				<center><Header as="h1">Upcoming Events</Header></center>
				<br />
				<Card.Group items={upcoming} style={{}} />

				<br /><br />
				<center><Header as="h1">Event Calendar</Header></center>
				<BigCalendar
					style={{ height: 800 }}
					events={events}
					step={60}
					defaultDate={new Date(moment())}
					onSelectEvent={event => alert(event.title + "\n" + event.start + "\n" + event.end + "\n" + event.location)}
					localizer={localizer}
				/>
			</Container>)
	}
}

export default Events
