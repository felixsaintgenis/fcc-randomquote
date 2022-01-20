import React, { Suspense } from 'react';
import './App.css';

class App extends React.Component {
  state = {
    quote: '',
    author: '',
    quotes: [],
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    fetch('https://api.quotable.io/random', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          quote: data.content,
          author: data.author,
        });
      });
  };

  changeNewQuote = () => {
    console.log('new quote...');
  };

  render() {
    return (
      <Suspense fallback={<h1>Loading quote...</h1>}>
        <div className="App">
          <div id="quote-box">
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
            <div className="action-wrapper">
              <div>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  id="tweet-quote"
                  href="https://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tumblr.com/"
                >
                  <i className="fa fa-tumblr"></i>
                </a>
              </div>
              <button
                className="myButton"
                id="new-quote"
                onClick={this.fetchQuote}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}

export default App;
