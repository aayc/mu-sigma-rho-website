import React from 'react'
import { Component } from 'react'
import { Button, Container } from 'semantic-ui-react'
import WordCloud from 'react-d3-cloud';
import request from 'superagent'
const responseUrl = `https://spreadsheets.google.com/feeds/cells/1BQxh0CMMQo_DM9yaTbqCXzVHxUyb_KMOmtXblFsRDCw/od6/public/values?alt=json-in-script&key=${process.env.google_apis}&callback=CALLBACK`
 
const data = [
  { text: 'Hey', value: 100 },
  { text: 'lol', value: 200 },
  { text: 'first impression', value: 800 },
  { text: 'very cool', value: 100 },
  { text: 'duck', value: 100 },
];

class TShirtContest extends Component {
  constructor (props) {
    super(props)
    this.state = { words: [] }
    
    request.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRfd_-cMg7c-HNpE7ztE79ob58_2lWXju2PF8No9UibAnP2lE_AwjXD4RXtpmC0y5X7C3j6vCWijO_a/pub?output=tsv").end((err, resp) => {
      if (!err) {
        let words = resp.text.split("\r\n").slice(1).map(s => s.split("\t")[1].trim())
        let wordFreq = {}
        words.map(w => {
          wordFreq[w] = (wordFreq.hasOwnProperty(w)) ? wordFreq[w] + 1 : 1
        })
        let wordCloudData = []
        for (let key in wordFreq) {
          wordCloudData.push({ text: key, value: wordFreq[key] * 100 })
        }
        this.setState({ words: wordCloudData })
      }
    })
  }

  render () {

    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => 0

    console.log(this.state.words)

    return (
      <Container style={{ marginTop: '3em' }}>
        <p>Hi I'm in the T shirt contest</p>
        <WordCloud
          data={this.state.words}
          fontSizeMapper={fontSizeMapper}
          rotate={rotate}
        />

        <Button href="https://goo.gl/forms/S3XvvzIsBUl4oUPm1">Add a phrase</Button>
      
      </Container>
    )
  }
}

export default TShirtContest
