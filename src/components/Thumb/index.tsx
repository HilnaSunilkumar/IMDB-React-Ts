import React from "react";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import { Image } from "./Thumb.style";

type Props = {
  image:string,
  movieId?:number,
  clickable: boolean
}

export const Thumb : React.FC<Props> = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);


