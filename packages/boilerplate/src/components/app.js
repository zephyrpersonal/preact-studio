import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
import ScrollerDemo from '../routes/scrollerDemo'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render () {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
          <ScrollerDemo path="/scroller/" />
        </Router>
      </div>
    )
  }
}
