import '@styles/globals.css';

export const metadata = {
    title: "promptopia",
    description: 'Discover & Share AI Propmts'
}

const Rootlayout = ({ childern }) => {
  return (
    <html lang="en">
       <body>
        <div className="main">
            <div className="gradient" />
        </div>

        <main className="app">
            {childern}
        </main>
       </body>
    </html>
  )
}

export default Rootlayout
