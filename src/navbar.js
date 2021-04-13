import React, { useState } from 'react'

const Navbar = () => {
    const [displaydrop, setdisplaydrop] = useState(false)
    const [menu, setmenu] = useState(false)
    const show=()=>{setdisplaydrop(!displaydrop)}
    const showmenu=()=>{setmenu(!menu)}
    return (
        <div>
            <div className="navbar">
                <h2>Chaya</h2>
                <div className="inner-navbar min-width">
                    <div>
                       <button onClick={show}><h3>Products ▼</h3> </button>
                    </div>
                    
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
                <div className="hamburger max-width" onClick={showmenu}>
                    <div className="rect"> </div> <div className="rect"></div> <div className="rect"></div>
                </div>

            </div>

            {
                menu && <div className="menu max-width">
                    <div  className="menu-dropdown"><button onClick={show}><h3>Products ▼</h3>  </button>
                        {displaydrop && <>
                        <h4>Computer</h4>
                        <h4>Games</h4>
                        </>}
                    </div>
                    <div><h3>About</h3></div>
                    <div><h3>Contact</h3></div>
                </div>
            }


            { displaydrop && <div className="dropdown min-width">
                            <div>Computer</div>
                            <div>Games</div>
                        </div>}


        </div>


    )
}

export default Navbar
