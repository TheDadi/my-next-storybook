import React from 'react';
import GistFile from './gist-file'
import GistUser from './gist-user'
import GistStats from './gist-stats'


export default class GistListItem extends React.Component {
  render() {
    let {
      gist
    } = this.props;

    let file;
    if(gist && gist.files){
      file = gist.files[Object.keys(gist.files)[0]];
    }
    return (
      <div className='GistListItem m-2'>
        <div className='gist gist--compact'>
          <section className="d-flex justify-content-between">
            <GistUser gist={gist}/>
            <GistStats gist={gist}/>
          </section>
          <section>
            {file && <div className="d-flex flex-column"><GistFile key={file.filename} file={file}/></div>}
          </section>
        </div>
      </div>
    )
  }
}
