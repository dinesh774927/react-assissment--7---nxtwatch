import {Component} from 'react'
import ReactPlayer from 'react-player'
import NxtWatchContext from '../../Context/NxtwatchContext'

class VideoItemDetails extends Component {
  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    return <div>working</div>
  }
}

export default VideoItemDetails
