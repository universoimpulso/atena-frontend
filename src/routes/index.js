import React from 'react'
import { Switch } from 'react-router-dom'
import Route from '../routes/Route'

import TransferXp from '../pages/TransferXP'
import HowItWorks from '../pages/HowItWorks'
import Ranking from '../pages/Ranking'
import Admin from '../pages/admin'
import UserInfo from '../pages/UserInfo'
import Github from '../pages/Github'

import { LinkedInPopUp } from 'react-linkedin-login-oauth2'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HowItWorks} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/github/:status" component={Github} />
      <Route path="/linkedin" component={LinkedInPopUp} />
      <Route path="/transfer" component={TransferXp} isPrivate coreTeam />
      <Route path="/admin" component={Admin} isPrivate coreTeam />
      <Route path="/userInfo" component={UserInfo} isPrivate />
    </Switch>
  )
}
