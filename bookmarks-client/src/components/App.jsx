import React from "react";
import New from "./New";

class App extends React.Component {
  async componentDidMount() {
    await this.getBookmarks();
  }

  getBookmarks = async () => {
    // fetching from rails
    // GET http request
    // list of bookmarks
    const response = await fetch("http://localhost:3000");
    const bookmarks = await response.json();
    // sets state with the updated list of bookmarks
    this.setState({ bookmarks: bookmarks });
  };

  render() {
    const bookmarks = this.state?.bookmarks;
    return (
      <div>
        {bookmarks &&
          bookmarks.map((bookmark, index) => {
            return (
              <div key={index}>
                <a href={bookmark.url}>
                  <h3>{bookmark.title}</h3>
                  <h3>{bookmark.url}</h3>
                </a>
                <p>{bookmark.description}</p>
                <hr />
              </div>
            );
          })}
        <New getBookmarks={this.getBookmarks} />
      </div>
    );
  }
}

export default App;