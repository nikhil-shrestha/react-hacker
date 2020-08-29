/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import logo from '../../img/spotify-white.png'

const Sidebar = ({ children }) => {
  return (
    <div className="Sidebar" css={CSS}>
      <img src={logo} height={50} />
      {children}
    </div>
  )
}

const CSS = css`
  width: 200px;
  height: 100%;
  background: #000000;
  padding: 20px;
`

export default Sidebar
