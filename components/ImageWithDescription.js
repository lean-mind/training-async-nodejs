import React from 'react'
import styled from "styled-components";

const Style = styled.div`
  figcaption {
    margin-top: -24px;
    text-align: center;
    
    small {
      font-size: 1.5rem;
    }
  }
`

export const ImageWithDescription = ({
                                       id,
                                       src,
                                       alt,
                                       children
                                     }) => (
  <Style>
    <figure role="group" id={id}>
      <img
        src={src}
        alt={alt}
        style={{width: "100%", cursor: "pointer"}}
      />
      <figcaption>
        <small>
          {children}
        </small>
      </figcaption>
    </figure>
  </Style>
)
