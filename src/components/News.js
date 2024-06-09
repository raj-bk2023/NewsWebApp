import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

//constructor runs first followed by render() and then componentDidMount()

  constructor(){
    super()
   
  this.state={
    articles:[],
    loading:false
  }
}
async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=2d4a5532295a47b7890dfc9b747f1dfb"
  let data=await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData)
  this.setState({articles:parsedData.articles})
}
 
  render() {
    return (
      <div className="container my-3">
  <h2>NewsMonkey  - Top Headlines</h2>
  <div className="row">
  {this.state.articles.map((element)=>{
  return <div className="col-md-4" key={element.url}>
<NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
imgUrl={element.urlToImage} newsUrl={element.url}/>
  </div>
  })}
    </div>
    
    <div className="container">
    <button type="button" class="btn btn-info">Previous</button>
    <button type="button" class="btn btn-info">Next</button>
    </div>
      </div>
    )
  }
}

export default News
