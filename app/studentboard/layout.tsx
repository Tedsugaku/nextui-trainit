import LateralBar from "@/components/lateralbar/lateral";



export default function StudentLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <LateralBar/>

        </div>
        <div className="grow p-6 md:overflow-y-auto md:p-12 bg-slate-200">
          {children}
        </div>
      </section>
    );
  }