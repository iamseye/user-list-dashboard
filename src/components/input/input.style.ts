import styled from "styled-components";

export const InputStyle = styled.div`
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;

  .input-container {
    box-sizing: border-box;
    cursor: text;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding-left: 14px;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    min-width: 200px;
  }

  .label-text {
    display: flex;
    height: 0.01em;
    max-height: 2em;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.54);
    margin-right: 8px;
  }

  input {
    outline: none;
    border: 0px;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    display: block;
    width: 100%;
    padding: 1rem 0.5rem;
  }
`;
