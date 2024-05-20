
export default function createProxyUrl(endpoint:string){
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const formattedEndpoint = encodeURIComponent(endpoint);

const url = base + "/auth" + "?endpoint=" + formattedEndpoint;
    
    
    
    return url
}