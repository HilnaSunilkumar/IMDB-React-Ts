import React from "react";
import PropTypes from 'prop-types';
import { Wrapper, Content } from "./Grid.style";

type Props = {
    header:string,
}

export const Grid : React.FC<Props>= ({header,children}) =>(
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

