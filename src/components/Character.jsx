import React from 'react'

export default function Character({ character }) {
  return (
    <li>{ `${character.firstname} ${character.lastname}`}</li>
  )
}
