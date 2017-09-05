import React from 'react'

export default ({gist}) => (
  <div className="gist__stats">
    <div className='hidden-sm-down text-muted d-flex'>
      <div className="mr-4 text-nowrap"><i className="fa fa-file-code-o mr-1"></i><span>{gist.files && Object.keys(gist.files).length}</span> files</div>
      <div className="mr-4 text-nowrap"><i className="fa fa-code-fork mr-1"></i>{gist.forks && gist.forks.length} forks</div>
      <div className="mr-4 text-nowrap"><i className="fa fa-comment-o mr-1"></i>{gist.comments && gist.comments.length} comments</div>
      <div className="mr-2 text-nowrap"><i className="fa fa-star mr-1"></i>0 stars</div>
    </div>
    <div className='gist__actions'>
    </div>
  </div>
)
