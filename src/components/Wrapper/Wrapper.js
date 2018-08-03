import React from 'react'

const Header = (props) => (
    <div>
        <header>
            <div className="Logo">
                <h1>LightHouse</h1>
            </div>
        </header>

        <div className="Content">
            {props.children}
        </div>

        <footer>
            <p>Copyright</p>

        </footer>
    </div>
)

export default Header;