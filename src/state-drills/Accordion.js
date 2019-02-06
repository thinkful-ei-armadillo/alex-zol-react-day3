import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    };

    state = {
        activeSection: null,
    };

    handleOnButtonClick = (index) => {
        this.setState({ activeSection: index });
    };

    getSections = () => {
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button onClick={() => this.handleOnButtonClick(index)}>{section.title}</button>
                {(index === this.state.activeSection) && <p>{section.content}</p>}
            </li>
        ));
    };

    render() {
        return (
            <ul>{this.getSections()}</ul>
        );
    }
}

export default Accordion;