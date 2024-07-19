import CredentialsProvider from 'next-auth/providers/credentials'
import {login} from '@/actions' 

const authOptions = {
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                try {
                    const user = await login(credentials)
                    if(!user.success){
                        throw new Error(user.message)
                    }
                    return user.user
                } catch (error) {
                    throw new Error(error.message)
                }
            }
        }),
    ],
    callbacks:{
        async session({session, token}){
            if(session.user && token){
                session.user._id=token._id
                session.user.isAdmin=token.isAdmin
                session.user.phone=token.phone
                session.user.address = token.address
                session.user.isActive = token.isActive
                session.user.createdAt = token.createdAt
            }
            return session
        },
        async jwt({token,user}){
            if(user && token){
                token._id=user._id
                token.isAdmin=user.isAdmin
                token.phone=user.phone
                token.address = user.address
                token.isActive = user.isActive
                token.createdAt = user.createdAt
            }
            return token;
        }
    },
    pages:{
        signIn:"/login",
        signOut:"/signout"
    }
}

export default authOptions;