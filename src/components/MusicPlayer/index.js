/** @jsx jsx */
import React, { createContext, useReducer } from 'react'
import { css, jsx } from '@emotion/core'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'

export const StoreContext = createContext(null)

const DEFAULT_PLAYLIST = 'home'

const initialState = {
  currentPlaylist: DEFAULT_PLAYLIST,
  playlists: {
    home: new Set(),
    favorites: new Set()
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST':
      return {
        ...state,
        playlists: { ...state.playlists, [action.playlist]: new Set() }
      }
    case 'SET_PLAYLIST':
      return { ...state, currentPlaylist: action.playlist }
  }

  return state
}

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="MusicPlayer" css={CSS}>
        <Topbar />
        <Sidebar></Sidebar>
        <Content></Content>
        <Playbar></Playbar>
      </div>
    </StoreContext.Provider>
  )
}

const CSS = css`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  color: white;
`

export default MusicPlayer
