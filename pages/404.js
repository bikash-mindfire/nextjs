import React,{useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
 
        setTimeout(()=> {
            router.push('/')
        }, 3000)

    }, [])

    return (
        <div>
            <h1>Ooop...</h1>
            <h3>Not Found</h3>
        </div>
    )
}

export default NotFound
