import React from 'react'
import { PageAccueil } from '../components/composPageAccueil/PageAccueil'

export const Template = () => {
  return (
    <div>
      <div>
        <PageAccueil/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
