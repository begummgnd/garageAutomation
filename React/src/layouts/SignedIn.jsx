import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem, Image } from 'semantic-ui-react'
import logo from '../image/263-2636288_admin-premiumcare-female-administrator-icon.png'
export default function SignedIn({ signOut }) {

   
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src={logo} style={{ width: "35px" }} ></Image>
                <Dropdown pointing="top" text="admin">
                    <DropdownMenu>
                        <DropdownItem text="My Information" icon="info" />
                        <DropdownItem onClick={signOut} text="Sign Out" icon="sign-out" />
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
        </div>
    )
}
