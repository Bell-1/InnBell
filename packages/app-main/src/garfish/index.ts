import Garfish from 'garfish'
import { apps } from './config'

export function runGarfish() {
	Garfish.run({
		basename: '/',
		domGetter: '#subAppContainer',
		apps,
	})
}