import React from 'react'
import PandError from '../../assets/Error.gif'
import { ErrorImage } from './styled'
export default function Error() {
  return (
    <ErrorImage src={PandError} alt="Pagina de Erro" />
  )
}
