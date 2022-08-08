import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.style";

type Props= {
    movieTitle: string
}

export const BreadCrumb : React.FC<Props>= ({movieTitle}) =>(

    <Wrapper>
        <Content>
            <Link to='/'>
                <span> <b>Home </b></span>
            </Link>
            <span> &nbsp; | </span>
            <span> <b> {movieTitle} </b></span>
        </Content>
    </Wrapper>
)
