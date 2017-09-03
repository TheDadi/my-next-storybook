import React from 'react';
import GistListItem from './gist/gist-list-item';

export default class Gists extends React.Component {

  render(){
    return (
      <div>
        {this.props.gists && this.props.gists.map(gist => <GistListItem gist={gist}/>)}
      </div>
    )
  }
}
