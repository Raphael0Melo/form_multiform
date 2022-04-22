import React, {ReactNode} from 'react';
import * as style from './styles'
import {Header} from '../Header'

type Props = {
  children: ReactNode;
}

export const Theme = ({children}: Props) => {
  return (
    <style.Container>
      <style.Area>
        <Header />

        <style.Steps>
          <style.Sidebar>
            ...
          </style.Sidebar>
          <style.Page>
            {children}
          </style.Page>
        </style.Steps>

      </style.Area>
    </style.Container>
  )
}