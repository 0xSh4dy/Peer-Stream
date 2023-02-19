const shortenAddress = (address,type) => {
    if(!type){
        return(address.substring(0,4)+"..."+address.substring(address.length-4,address.length))
    }
    if(type==="channel"){
        return(address.substring(0,6)+"..."+address.substring(address.length-5,address.length))
    }
    if(type==="chat"){
        return(address.substring(0,4)+"..."+address.substring(address.length-4,address.length))
    }
} 

export default shortenAddress