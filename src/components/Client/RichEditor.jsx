import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

function RichEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onBoldClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const onUnderlineClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const onListClick = () => {
    setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };

  return (
    <div>
      <button type="button" onClick={onBoldClick}>
        <b>B</b>
      </button>
      <button type="button" onClick={onItalicClick}>
        <i>I</i>
      </button>
      <button type="button" onClick={onUnderlineClick}>
        <u>U</u>
      </button>
      <button type="button" onClick={onListClick}>
        List
      </button>
      <div
        style={{
          border: "1px solid #ccc",
          minHeight: "100px",
          minHeight: "100%",
          padding: "0.5em",
        }}
      >
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}

export default RichEditor;