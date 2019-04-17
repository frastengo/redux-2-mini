import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
//connect is a higher order function that will accept a component and return an enhanced component with state from reducer 
import {connect} from 'react-redux'
//action creator from reducer that has axios call to get news articles and put in reducer state
import {requestArticles} from '../../ducks/hackerNewsReducer'

class HackerNews extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount(){
    //no need to subscribe to store
    //requestArticles from reducer that was mapped to props
    this.props.requestArticles();
  }

  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

//mapStateToProps will map the state in the reducer to the props in this component
function mapStateToProps(state){
  return state.hackerNews;
}

//mapDispatchToProps will map functions imported from the reducer onto the props of this component
const mapDispatchToProps = {
  requestArticles: requestArticles
}

//exporting as a new enhanced component
//connect component evoked 
//if not using mapStateToProps, use null because it is ordinal 
export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}