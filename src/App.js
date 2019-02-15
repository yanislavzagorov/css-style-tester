import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer/CardContainer.js'
import useClipboard from "react-use-clipboard";
import ClipboardHandler from './ClipboardHandler/ClipboardHandler.js'

class App extends Component {
  state = {
    userInputText: 'Example text.',
    userInputColor: '',
    userInputWeight: '',
    userInputBackgroundColor: '',
    userInputFontFamily: ''
  }

  inputTextChangedHandler = ( event ) => {
    this.setState( { userInputText: event.target.value } );
  }

  inputColorChangedHandler = ( event ) => {
    this.setState( { userInputColor: event.target.value } );
  }

  inputWeightChangedHandler = ( event ) => {
    this.setState( { userInputWeight: event.target.value } );
  }

  inputBackgroundColorChangedHandler = ( event ) => {
    this.setState( { userInputBackgroundColor: event.target.value } )
  }

  inputFontFamilyChangedHandler = ( event ) => {
    this.setState( { userInputFontFamily: event.target.value } )
  }

  render() {
    const style = {
      color: this.state.userInputColor,
      fontWeight: this.state.userInputWeight
    }

    const outputPanelStyle = {
      fontFamily: this.state.userInputFontFamily,
      backgroundColor: this.state.userInputBackgroundColor
    }

    return (
      <div className="Wrapper">
        <div className="LeftPanel">
          <h2 className='headings'>Input</h2>
          <hr/>
          <p>Sample Text</p>
          <input 
            type="text"
            onChange={this.inputTextChangedHandler}
            value={this.state.userInputText}
            placeholder='Your sample text'
          />
          <p>Color</p>
          <input 
            type="text"
            onChange={this.inputColorChangedHandler}
            value={this.state.userInputColor}
            placeholder='color: '
          />
          <p>Weight</p>
          <input 
            type="text"
            onChange={this.inputWeightChangedHandler}
            value={this.state.userInputWeight}
            placeholder='font-weight: '
          />
          <p>Background Color</p>
          <input 
            type="text"
            onChange={this.inputBackgroundColorChangedHandler}
            value={this.state.userInputBackgroundColor}
            placeholder='background-color:'
          />
          <p>Font Family</p>
          <input 
            type="text"
            onChange={this.inputFontFamilyChangedHandler}
            value={this.state.userInputFontFamily}
            placeholder='font-family:'
          />
          <button 
            id="copyClipboardButton"
          >Copy code to clipboard.</button>
          <ClipboardHandler />
        </div>
        <div className="RightPanel">
          <h2 className='headings'>Output</h2>
          <hr/>
          <p>Styling for: {this.state.userInput}</p>
          <div style={outputPanelStyle} className="OutputPanel">
            <h1 style={style}>H1 - {this.state.userInputText}</h1>
            <h2 style={style}>H2 - {this.state.userInputText}</h2>
            <h3 style={style}>H3 - {this.state.userInputText}</h3>
            <h4 style={style}>H4 - {this.state.userInputText}</h4>
            <h5 style={style}>H5 - {this.state.userInputText}</h5>
            <h6 style={style}>H6 - {this.state.userInputText}</h6>
            <br/>
            <p style={style}>Paragraph - {this.state.userInputText}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
