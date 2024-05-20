export default function configureFetch(method:string,body:{}){
const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(body)
}


    return options
}