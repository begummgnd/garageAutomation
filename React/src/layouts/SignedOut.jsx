import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut({signUp,login}) {
    return (
        <div>
            <MenuItem>
                <Button primary onClick={login}>Login</Button>
                <Button primary style={{marginLeft:"0.5em"}} onClick={signUp}>Sign Up</Button>
            </MenuItem>
        </div>
    )
}
