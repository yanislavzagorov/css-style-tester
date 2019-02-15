import React, { useRef, useState } from 'react';

export default function ClipboardHandler() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>
        <button 
            id="copyClipboardButton"
          >Copy code to clipboard.</button>
    </div>
  );
}

/*

<div>
      {
Logical shortcut for only displaying the 
button if the copy command exists
          document.queryCommandSupported('copy') &&
          <div>
            <button onClick={copyToClipboard}>Copy</button> 
            {copySuccess}
          </div>
        }
        <form>
          <textarea
            ref={textAreaRef}
            value='This is the copied value text inside of textarea inside of form'
          />
        </form>
      </div>
  
      

*/