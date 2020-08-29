/** @jsx jsx */
import React, { useContext } from 'react'
import { css, jsx } from '@emotion/core'
import { StoreContext } from './index'

const Content = ({ children }) => {
  const { state } = useContext(StoreContext)
  return (
    <div className="Content" css={CSS}>
      {state.currentPlaylist}
      {/* {children} */}
    </div>
  )
}

const CSS = css`
  width: calc(100% - 200px);
  padding: 20px;
  background: #121212;
  padding-top: 70px;
  font-size: 20px;
  text-transform: capitalize;
`

export default Content
