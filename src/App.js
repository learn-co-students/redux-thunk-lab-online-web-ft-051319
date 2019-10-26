import React, { Component } from 'react';
import CatList from './CatList'
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'

class App extends Component {   

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading){
      return <div>Loading...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {  //state passed in reflects the state from the store adding to the props
  return {catPics: state.cats, loading: state.loading}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchCats: () => dispatch(fetchCats())}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)

