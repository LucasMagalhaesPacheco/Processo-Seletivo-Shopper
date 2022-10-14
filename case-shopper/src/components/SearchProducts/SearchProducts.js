import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { FormSearch, InputForm } from './styled'

const SearchProducts = () => {
    const { states, setters } = useContext(GlobalContext)

    const onChange = (event) => {
      setters && setters.setSearch(event.target.value)
      setters.setAtualizationGets(states.atualizationGets + 1)
    }

  return (
    <>
     <FormSearch>
        <InputForm
        name="search"
        placeholder='Que Produto deseja Buscar'
        value={states?.search}
        onChange={onChange}/>
     </FormSearch>
    </>
  )
}

export default SearchProducts