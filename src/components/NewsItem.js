import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title,description,imgUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https:www.livemint.com/lm-img/img/2023/04/18/600x338/2-0-1244114454-iStock-839214100-0_1679615828655_1681822267882.jpg":imgUrl}/>
  <div className="card-body">
    <h5 className="card-title">{title}..</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary">Read More...</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

