import { Transitions } from '../Themes/'


// I18n
import I18n from '../I18n/I18n.js'

export default new class Routes {

  // Here are the "Containers" in our app (e.g. Screens).
  //
  // These routes are implemented as getter functions
  // because I like the simple calling notation, but
  // they're lazily evaluated to prevent recursion
  // when the screens themselves use this Routes file.

  get Bullshit () {
    return {
      title: 'Bullshit',
      component: require('../Containers/Bullshit').default,
      leftButton: 'BACK'
    }
  }

  get Greenland () {
    return {
      title: 'Greenland',
      component: require('../Containers/Greenland').default,
      leftButton: 'BACK'
    }
  }

  get Saveway () {
    return {
      title: 'Saveway Market',
      component: require('../Containers/Saveway').default,
      leftButton: 'BACK'
    }
  }

  get Bao () {
    return {
      title: 'Bao An Herbs And Grocery',
      component: require('../Containers/Bao').default,
      leftButton: 'BACK'
    }
  }

  get Kue () {
    return {
      title: 'Kue Hing Co.',
      component: require('../Containers/Kue').default,
      leftButton: 'BACK'
    }
  }

  get RnK () {
    return {
      title: 'R&K Foods',
      component: require('../Containers/RnK').default,
      leftButton: 'BACK'
    }
  }

  get Golden () {
    return {
      title: 'Golden Hong Market',
      component: require('../Containers/Golden').default,
      leftButton: 'BACK'
    }
  }

  get Grocery () {
    return {
      title: 'Grocery Outlet',
      component: require('../Containers/Grocery').default,
      leftButton: 'BACK'
    }
  }

  get Dong () {
    return {
      title: 'Dong Hing Market',
      component: require('../Containers/Dong').default,
      leftButton: 'BACK'
    }
  }

  get Ew () {
    return {
      title: 'Ew Mart',
      component: require('../Containers/Ew').default,
      leftButton: 'BACK'
    }
  }

  get Union () {
    return {
      title: 'Union Station Market',
      component: require('../Containers/Union').default,
      leftButton: 'BACK'
    }
  }

  get Hoven () {
    return {
      title: 'Hoven Foods Co.',
      component: require('../Containers/Hoven').default,
      leftButton: 'BACK'
    }
  }

  get Pacific () {
    return {
      title: 'Pacific Herb & Grocery',
      component: require('../Containers/Pacific').default,
      leftButton: 'BACK'
    }
  }

  get Pan () {
    return {
      title: 'Pan Asian Food Mart',
      component: require('../Containers/Pan').default,
      leftButton: 'BACK'
    }
  }

  get Victoria () {
    return {
      title: "Victoria's Treasure",
      component: require('../Containers/Victoria').default,
      leftButton: 'BACK'
    }
  }

  get Pop () {
    return {
      title: 'Pop In',
      component: require('../Containers/Pop').default,
      leftButton: 'BACK'
    }
  }

  get Full () {
    return {
      title: 'Full Circle',
      component: require('../Containers/Full').default,
      leftButton: 'BACK'
    }
  }

  get Uwajimaya () {
    return {
      title: 'Uwajimaya',
      component: require('../Containers/Uwajimaya').default,
      leftButton: 'BACK'
    }
  }

  get Cone () {
    return {
      title: 'Cone & Steiner',
      component: require('../Containers/Cone').default,
      leftButton: 'BACK'
    }
  }

  get Big () {
    return {
      title: "Big John's Pfi",
      component: require('../Containers/Big').default,
      leftButton: 'BACK'
    }
  }

  get Mojo () {
    return {
      title: 'Walmart',
      component: require('../Containers/Mojo').default,
      leftButton: 'BACK'
    }
  }

  get Settings () {
    return {
      title: 'Settings',
      component: require('../Containers/Settings').default,
      leftButton: 'BACK'
    }
  }

  get SearchAccounts () {
    return {
      title: 'Lookup Account',
      component: require('../Containers/SearchAccounts').default,
      leftButton: 'BACK'
    }
  }

  get RepStats () {
    return {
      title: 'My Stats',
      component: require('../Containers/RepStats').default,
      leftButton: 'BACK'
    }
  }

  get InLocation () {
    return {
      title: 'Location',
      component: require('../Containers/InLocation').default,
      leftButton: 'BACK'
    }
  }


  get PresentationScreen () {
    return {
      title: 'Accounts',
      component: require('../Containers/PresentationScreen').default,
      customConfiguration: Transitions.modal,
      leftButton: 'HAMBURGER'

    }
  }


  get LoginScreen () {
    return {
      title: I18n.t('login'),
      component: require('../Containers/LoginScreen').default,
      customConfiguration: Transitions.modal,
      rightButton: 'FORGOT_PASSWORD',
      leftButton: 'BACK'
    }
  }

}
