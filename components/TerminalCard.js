import React from 'react';
import styled from 'styled-components';

const TerminalCard = ({ children }) => {
  // Convert children array to properly formatted content
  const formatContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((line, index) => (
        <div key={index} style={{ display: 'block' }}>
          {line}
        </div>
      ));
    }
    // If content is a string, split by newlines and render each line
    if (typeof content === 'string') {
      return content.split('\n').map((line, index) => (
        <div key={index} style={{ display: 'block' }}>
          {line}
        </div>
      ));
    }
    // Wrap single element in a div to maintain consistent formatting
    return <div style={{ display: 'block' }}>{content}</div>;
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="container_terminal" />
        <div className="terminal_toolbar">
          <div className="butt">
            <button className="btn btn-color" />
            <button className="btn" />
            <button className="btn" />
          </div>
          <p className="user">SVB@admin: ~ </p>
        </div>
        <div className="terminal_body">
          <div className="terminal_promt">
            <span className="terminal_user">SVB@admin:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <div style={{ marginLeft: '8px' }}>
              {formatContent(children)}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(#504b45 0%, #3c3b37 100%);
  }

  .butt {
    display: flex;
    align-items: center;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 5px;
    font-size: 8px;
    height: 12px;
    width: 12px;
    box-sizing: border-box;
    border: none;
    border-radius: 100%;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
    box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
  }

  .btn-color {
    background: #ee411a;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .butt--exit {
    background: linear-gradient(#f37458 0%, #de4c12 100%);
  }

  .user {
    color: #d5d0ce;
    margin-left: 6px;
    font-size: 14px;
    line-height: 15px;
  }

  .terminal_body {
    background: rgba(56, 4, 40, 0.9);
    padding: 10px;
    font-size: 12px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-family: monospace;
    overflow-x: auto;
  }

  .terminal_promt {
    display: block;
    white-space: pre-wrap;
  }

  .terminal_promt span {
    margin-left: 4px;
  }

  .terminal_user {
    color: #7eda28;
  }

  .terminal_location {
    color: #4878c0;
  }

  .terminal_bling {
    color: #dddddd;
  }

  .terminal_cursor {
    display: block;
    height: 14px;
    width: 5px;
    margin-left: 10px;
    animation: curbl 1200ms linear infinite;
  }

  @keyframes curbl {

    0% {
      background: #ffffff;
    }

    49% {
      background: #ffffff;
    }

    60% {
      background: transparent;
    }

    99% {
      background: transparent;
    }

    100% {
      background: #ffffff;
    }
  }`;

export default TerminalCard;