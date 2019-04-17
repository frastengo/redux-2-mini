import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

import {connect} from 'react-redux'
import {requestArticles} from './../../ducks/redditReducer'

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  componentDidMount(){
    this.props.requestArticles();
  }
  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./redditLogo.png" alt="" style={styles.logo} />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.reddit
}

const mapDistpachToProps = {
  requestArticles: requestArticles
}

export default connect(mapStateToProps, mapDistpachToProps)(Reddit);


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}