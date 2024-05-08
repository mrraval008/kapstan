
export function convertTimeFromTimeStamp(timestamp,Onlyhours,onlyMinutes){
    let time = new Date(Number(timestamp))
    time = time.toLocaleString('en-US',  { timeZone: 'UTC' }).split(" ")
    if(Onlyhours){
        return time[1].split(":")[0]
    }
    if(onlyMinutes){
        return time[1].split(":")[1]
    }
    return time[1] + " " + time[2]
}

export function getLocalStorageData(key){
    return JSON.parse(localStorage.getItem(key))
}
export function setLocalStorageData(key,data){
    return localStorage.setItem(key,JSON.stringify(data))
}
