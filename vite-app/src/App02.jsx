
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ColorDiv from './components/ColorDiv'
import DashBoard from './components/DashBoard'
import themeContext from './components/CreateTheme'
import { useState } from 'react'

function App02() {
    let [isDark, setIsDark] = useState(false);

    function handleTheme() {
        setIsDark(prev => !prev)
    }





    return (
        <>

            <themeContext.Provider value={{ isDark, handleTheme }}>
                <Navbar />

                <DashBoard />

            </themeContext.Provider>

            <section className="container-fluid mt-5">

                <ColorDiv />
            </section>


            <Footer />

        </>
    )
}

export default App02;