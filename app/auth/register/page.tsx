import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import prisma from "@/lib/prisma";
export default function Page(){

       async function createTask(formData : FormData){
            "use server"
           const email= formData.get("email")?.toString()
           const password= formData.get("password")?.toString() 
            console.log(email,password)

            if(!email || !password){
                return;
            }
            const newUser = await prisma.user.create({
                data:{
                    username: '',
                    email: email,
                    password:password,
                }
            })
            console.log(newUser)
        }
    return(

        <>
        <div className="flex flex-row justify-center  ">

            <div className="box-border border-1 shadow-md  w-full md:w-1/5 mt-2 mb-2 bg-white"> 

                <form action={createTask}>
                <div className="flex flex-col gap-4 p-4">
                    <div className="">
                        <h1 className="font-semibold" >Iniciar Sesión</h1>
                    </div>
                        <Input name="email" id="email" type="email" label="Email" />
                        <Input name="password" id="password" type="password" label="Contraseña" />
                    {/* <Button color="primary" href="/studentboard/tests" as={Link}  className="font-semibold">inciar</Button> */}
                    <Button color="primary" type="submit"  className="font-semibold">inciar</Button>
                </div>
                </form>
            </div>
            </div>
        </>
    )
}