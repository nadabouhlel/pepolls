import React from 'react'
import ProfileCard from '../../right-nav-components/ProfileCard'
import SettingsForm from './SettingsForm/SettingsForm'
import SettingsNav from './SettingsNav'

function Settings() {
  return (
    <div>
    <SettingsNav />
<SettingsForm />
  </div>  
  )
}

export default Settings