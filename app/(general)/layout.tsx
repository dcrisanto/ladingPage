export default function GeneralLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <section>
                <p>Layout general</p>
                {children}
            
            </section>
        </>
    )
  }
