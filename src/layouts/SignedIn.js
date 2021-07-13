//rfc
import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FjcPeonk9zvQ%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DjcPeonk9zvQ&tbnid=JoPzD5m_mn3XTM&vet=12ahUKEwju49z-09_xAhWDNuwKHb44CzgQMygDegUIARDLAQ..i&docid=iyFoJ-jN6FXinM&w=1280&h=720&q=araba&client=opera-gx&ved=2ahUKEwju49z-09_xAhWDNuwKHb44CzgQMygDegUIARDLAQ" />
                <Dropdown pointing="top right" text="Seyit">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>

                </Dropdown>
            </Menu.Item>
        </div>
    )
}
