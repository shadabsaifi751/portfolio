export const isBrowser = () => typeof window !== "undefined"

export const hostName = (host)=>{
    let hostname= host.split(':')[0]
    return hostname
}