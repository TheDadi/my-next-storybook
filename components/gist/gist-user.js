import React from 'react';
//import {Link} from '../routes'
//import moment from 'moment';
const Link = ({children}) => (<div>{children}</div>);

export default class GistUser extends React.Component {

	constructor(props){
		super(props);
		this.defaultProps = {
			gist: {}
		};
	}

	render(){
		const gist = this.props.gist;
    const defaultAvatar = 'https://www.gravatar.com/avatar?d=mm';
		const file = gist.files && gist.files[Object.keys(gist.files)[0]];
    const created = gist.created_at;
		if(!gist.owner){
			gist.owner = {
				login: 'discover'
			};
		}
		return (
				<div className="gist__user d-flex ">
  				<img src={gist.owner.avatar_url || defaultAvatar} alt="Gist Owner" className="gist__avatar rounded mr-2" />
  				<div className="gist__meta">
  					<div className='gist__owner  d-flex'>
  						<Link route='gists' params={{username: gist.owner.login}}>
                <a>{gist.owner.login}</a>
  						</Link> /
                <Link route='gist-detail' params={{username: gist.owner.login, id: gist.id}}>
                <a>{file.filename}</a>
  						</Link>
  					</div>
  					<div className="gist__created text-muted">
  						<small>Created {created}</small>
  					</div>
  					<div className="gist__description text-muted pt-1">{gist.description}</div>
  				</div>
			</div>
			)
	}
}
