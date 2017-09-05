import React from 'react'
import axios from 'axios'
import GistListItem from '../gist'

export default class Gists extends React.Component {
  componentWillMount(){
    console.log('Fetching gists for', this.props.username);
    if(this.props.username){
      axios(`https://api.github.com/users/${this.props.username}/gists`).then((resp) =>{
        this.setState({gists: resp.data, loading: false});
      });
    }
  }
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      gists: null
    };
  }
  render(){
    return (
      <div>
        {this.state.loading && 'Loading...'}
        {this.state.gists && this.state.gists.map(gist => <GistListItem gist={gist} key={gist.id}/>)}
      </div>
    )
  }
}
Gists.defaultProps = {
  username: 'jonniespratley'
};
