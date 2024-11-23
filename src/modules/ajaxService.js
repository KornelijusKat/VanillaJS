const ajaxService = (uri) =>{
    return fetch(uri)
        .then(response => {
            if(!response.ok){   
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()}
        )
        .catch(error =>{
            throw new Error(`HTTP error! status: ${response.status}`)
        })
}
export default ajaxService