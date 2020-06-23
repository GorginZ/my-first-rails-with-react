import React from 'react'

class New extends React.Component {
  addBookmark = async () => {
    // the body the http request
    // being sent to rails
    // stored in the db as a new bookmark
    const body = {
      bookmark: {
        title: "amazon",
        url: "https://amazon.com",
        description: "cool new e-commerce site"
      }
    }
    try {
      // http request
      // POST
      await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        // converting a js obj into a json string for the request
        body: JSON.stringify(body)
      })
      // invoking a function
      this.props.getBookmarks()
    } catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <button onClick={this.addBookmark}>Add new link</button>
    )
  }
}

export default New;