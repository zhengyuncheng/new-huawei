export default{
	get(url,cb){
		fetch(url).then(response=>{
			response.json().then(cb)
		})
	}
}
