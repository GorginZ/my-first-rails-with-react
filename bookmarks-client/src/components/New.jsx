import React from 'react'

class New extends React.Component {
  addBookmark = async () => {
    const body = {
      bookmark: {
        title: "amazon",
        url: "https://amazon.com",
        description: "cool new e-commerce site"
      }
    }
    try {
        //http request
        //post request
      await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
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
