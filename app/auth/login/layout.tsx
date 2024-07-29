export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return(

    <div className="grow p-6 md:overflow-y-auto md:p-12 h-screen grid content-center bg-slate-400  bg-[url('/img/ptrrr.png')] bg-cover" >
      
        {children}
      </div>
    )

  }