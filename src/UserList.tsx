import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CenterContent = styled.div`
    text-align: center;
`


interface IUserOwnProps {

}

const UserList : React.FC<IUserOwnProps> = () : JSX.Element =>{
    return(
        <CenterContent>
            <p>
                User list
            </p>
            <Link  to="/">
                Home
            </Link>
        </CenterContent>
    )
}

export default UserList;