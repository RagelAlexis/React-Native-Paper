
import React from 'react'
import {
    Appbar,
    Avatar
  } from 'react-native-paper'

const HeaderComponent = () => {
  return (
      <>
        <Appbar.Header style={{ margin: 10 }}>
            <Appbar.Content title="Activity tracker" />
            <Avatar.Text size={50} label="NP" style={{ borderWidth: 2 }} />
        </Appbar.Header>
      </>
  )
}


export default HeaderComponent