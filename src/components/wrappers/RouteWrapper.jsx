import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { ROUT_FOR_ROOT_PAGE, ROUT_FOR_LANDING_PAGE, ROUT_FOR_CHARTS_PAGE } from 'constants.js'
import LandingPage from 'components/pages/LandingPage'
import ChartsPage from 'components/pages/ChartsPage'

export default function RouteWrapper() {
  return (
    <Router>
      <Switch>
        <Redirect path={ROUT_FOR_ROOT_PAGE} to={ROUT_FOR_LANDING_PAGE} exact />
        <Route path={ROUT_FOR_LANDING_PAGE} component={LandingPage} />
        <Route path={ROUT_FOR_CHARTS_PAGE} component={ChartsPage} />
      </Switch>
    </Router>
  )
}
