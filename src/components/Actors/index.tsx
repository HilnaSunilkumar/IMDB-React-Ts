import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Image } from "./Actors.style";

type Props = {
    name:string,
    character:string,
    imageUrl:string
}

export const Actors: React.FC<Props> = ({name, character, imageUrl})=> (
    <Wrapper>
        <Image src = {imageUrl} alt='actors-thumb'/>
        <h3> {name} </h3>
        <p> {character} </p>
    </Wrapper>
);

