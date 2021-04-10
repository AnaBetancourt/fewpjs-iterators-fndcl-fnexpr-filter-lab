function findMatching(driverArray, name){
    const matching = driverArray.filter(driver => {
        if (driver === name){ 
            return driver
        } else if(driver.toLowerCase() === name.toLowerCase()){
            return driver
        }
    })
    return matching
}

function fuzzyMatch(driverArray, name){
    const matching = driverArray.filter(driver => {
        return driver.charAt(0).toLowerCase() + driver.charAt(1).toLowerCase() === name.charAt(0).toLowerCase() + name.charAt(1).toLowerCase()
    })
    return matching
}

function matchName(driverArray, name){
    const matching = driverArray.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase()
    })
    return matching
}