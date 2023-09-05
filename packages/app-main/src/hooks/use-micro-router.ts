import { useRouter } from 'vue-router'
import microApp from '@micro-zoe/micro-app'

export function useMicroRouter(){
	const router = useRouter()
  
	function push(path: string, microName: string){
		console.log(path, microName)
		if(microName){
			microApp.router.push({
				name: microName,
				path,
			})
		}

		router.push({
			path,
		})

	}

	return {
		push,
	}
}
