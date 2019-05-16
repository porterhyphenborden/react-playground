import React from "react";
import './Accordion.css';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        currentSectionindex: null
    };
    handleButtonClick(index) {
        this.setState({ currentSectionindex: index })
    }
    renderContent() {
        const currentSection = this.state.currentSectionindex
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                {section.title}
                </button>
                {(currentSection === index) && <p>{section.content}</p>}
            </li>
        ))
    }
    render() {
        return (
            <ul>
                {this.renderContent()}
            </ul>
        )
    }
}

export default Accordion;