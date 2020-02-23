import React from 'react'


class SearchBar extends React.Component {
  state = {term: ''}

  onInputChange = event => {
    this.setState({term : event.target.value})
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
