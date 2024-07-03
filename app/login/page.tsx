import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

export default function Page(){
    return(

        <>
        <div className="flex flex-row justify-center  ">

            <div className="box-border border-1 shadow-md  w-full md:w-1/5 mt-2 mb-2 bg-white"> 

                <form>
                <div className="flex flex-col gap-4 p-4">
                    <div className="">
                        <h1 className="font-semibold" >Iniciar Sesión</h1>
                    </div>
                        <Input type="email" label="Email" />
                        <Input type="password" label="Contraseña" />
                    <Button color="primary" href="/studentboard" as={Link}  className="font-semibold">inciar</Button>
                </div>
                </form>
            </div>
            </div>
        </>
    )
}