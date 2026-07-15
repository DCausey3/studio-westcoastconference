import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'xp5cx30j',
    dataset: 'production'
  },
  deployment: {
      appId: 'ylozrvyixzo6r72xbpifceaw',
    autoUpdates: true,
  },
})
