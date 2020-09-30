import React, { ReactElement } from 'react';
import '../styles/global.scss'

export default function _app({ Component, pageProps }:any): ReactElement {

  return (
    <Component {...pageProps} />
  )
}