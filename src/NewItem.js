import React from 'react';

export default class NewItem extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            title: ''
        }
    }

    setTitle(title) {
        this.setState({
            title
        });
    }

    handleKeyPress = (event) => {
        if (event.target.value.trim() !== '' && event.key === 'Enter') {
            this.props.submit(this.state.title);
            this.setTitle('');
        }
    }

    render() {

        return <input
            type="text"
            value={this.state.title}
            placeholder="Title?"
            onChange={event => this.setTitle(event.target.value)}
            onKeyPress={this.handleKeyPress} />
    }
}