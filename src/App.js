import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {
  componentDidMount() {
    this.props.fetchCats()
  }

  // componentWillMount() {
  //   if(this.props.loading === true) {
  //     <h5>Loading...</h5>
  //   }
  // }

  renderCats = () => {
    if (this.props.loading) {
      return 'Loading...'
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
          {this.renderCats()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCats })(App);

