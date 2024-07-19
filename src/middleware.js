export {default} from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req){
    const url = req.nextUrl
    const token = await getToken({req})
    const path = (url.pathname.startsWith('/signup') || url.pathname.startsWith('/login'))
    if(!token && !path){
        return NextResponse.redirect(new URL('/login',req.url))
    }
    if(token && url.pathname.startsWith('/dashboard') && !token.isAdmin){
        return NextResponse.redirect(new URL('/',req.url))
    }
    if(token && path){
        return NextResponse.redirect(new URL('/',req.url))
    }
}

export const config = {
    matcher:['/','/dashboard/:path*','/login','/signup']
}