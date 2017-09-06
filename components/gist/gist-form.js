import React from 'react'
import GistFileInput from './gist-file-input'
import GistBanner from './gist-banner'

export default class GistForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
			files: [{}]
		};

		// This binding is necessary to make `this` work in the callback
		this._handleClickAdd = this._handleClickAdd.bind(this);
		this._handleDelete = this._handleDelete.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}
	_handleSubmit(e) {
		e.preventDefault();
		console.log('Submit', this.state);
	}

	_handleChange(index, file) {
		var state = this.state;
		state.files[index] = file;
		this.setState(prevState => (state));
	}

	_handleClickAdd(e) {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
			files: prevState.files.concat({filename: null, content: null})
		}));
	}

	_handleDelete(index) {
		let files = this.state.files.slice();
		files.splice(index, 1);
		console.warn('_handleDelete', index, files);
		this.setState({
			files: files
		});
	}

	render() {
		return (
			<div className="">
				<GistBanner/>
				<form className="gist-form container" action="">
					<div className="mb-4">
						<input type="text" className="form-control" placeholder="Gist description..." tabIndex='0'/>
					</div>
					<ul className="gist__files">
						{this.state.files.map((file, index) => (
							<li className="gist__file" key={index} data-index={`${index}`}>
								<GistFileInput file={file}
									onChange={this._handleChange}
									onDelete={this._handleDelete} index={index}/>
							</li>
						))}
					</ul>
					<div className="form-actions d-flex justify-content-between mt-3">
						<button type="button"
							className="btn btn-sm btn-secondary gist__add-btn"
							onClick={this._handleClickAdd}>Add File</button>
						<div>
							<button className="btn btn-secondary"
								onClick={this._handleSubmit}
							type="submit">Create public gist</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}
