import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions ={
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email: { label: "Email", type: "text ", placeholder: "Example@hotmail.com" },
                password: { label: "Password", type: "password" },
            },
            authorize(credentials, req){
                console.log("credenciales xdxdxddd ",credentials)
                return null
            }
        })
            
        
    ]

}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};