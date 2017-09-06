import React from 'react';

const GistBanner = () => (
  <div className="gist-welcome gist-banner text-center">
    <div className="container">
      <h1>Instantly share code, notes, and snippets.</h1>
    </div>
    <style>{`
.gist-banner {
  margin-top: 0;
  color: #234766;
  background-image: linear-gradient(180deg, rgba(255,255,255,0) 30%, #fff),linear-gradient(70deg, #e0f1ff 32%, #fffae3);
  border-bottom-color: #fff;
}
.gist-banner .container {
  width: 980px;
  margin-right: auto;
  margin-left: auto;
}
.gist-welcome h1 {
  margin: 0 0 10px;
  font-size: 32px;
  font-weight: 300;
}
.gist-welcome {
  padding: 40px 0;
}
      `}</style>
  </div>
)
export default GistBanner;
