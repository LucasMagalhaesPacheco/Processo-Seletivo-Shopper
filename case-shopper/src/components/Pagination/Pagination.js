import React, { useContext } from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { MyPage, OtherPages, SwitchPage } from './styled'

const Pagination = () => {

   const { states, setters } = useContext(GlobalContext)

   const goToFirstPage = () => {
      setters.setPage(1)
      setters.setAtualizationGets(states.atualizationGets + 1)
   }
   const goToFinalPage = () => {
      setters.setPage(5)
      setters.setAtualizationGets(states.atualizationGets + 1)
   }

   const goToNextPage = () => {
      setters.setPage(states.page + 1)
      setters.setAtualizationGets(states.atualizationGets + 1)
   }
   const goToPreviousPage = () => {
      setters.setPage(states.page - 1)
      setters.setAtualizationGets(states.atualizationGets + 1)
   }
   const goToPreviousTwoPage = () => {
      setters.setPage(states.page - 2)
      setters.setAtualizationGets(states.atualizationGets + 1)
   }
   const goToNexTwoPage = () => {
      setters.setPage(states.page + 2)
      setters.setAtualizationGets(states.atualizationGets + 1)
   }

   
   if (states.page === 1) {
      return <SwitchPage>
         <MyPage>{states.page}</MyPage>
         <OtherPages onClick={() => goToNextPage()}>{states.page + 1}</OtherPages>
         <OtherPages onClick={() => goToNexTwoPage()}>{states.page + 2}</OtherPages>
         <OtherPages onClick={() => goToNextPage()}> &#62;</OtherPages>
         <OtherPages onClick={() => goToFinalPage()}>Última</OtherPages>
      </SwitchPage>
   } else if (states.page === 2) {
      return <SwitchPage>
         <OtherPages onClick={() => goToPreviousPage()}>{states.page - 1}</OtherPages>
         <MyPage>{states.page}</MyPage>
         <OtherPages onClick={() => goToNextPage()}>{states.page + 1}</OtherPages>
         <OtherPages onClick={() => goToNexTwoPage()}>{states.page + 2}</OtherPages>
         <OtherPages onClick={() => goToNextPage()}> &#62;</OtherPages>
         <OtherPages onClick={() => goToFinalPage()}>Última</OtherPages>
      </SwitchPage>
   } else if (states.page === 3) {
      return <SwitchPage>
         <OtherPages onClick={() => goToFirstPage()}>Primeira</OtherPages>
         <OtherPages onClick={() => goToPreviousPage()}>{states.page - 1}</OtherPages>
         <MyPage>{states.page}</MyPage>
         <OtherPages onClick={() => goToNextPage()}>{states.page + 1}</OtherPages>
         <OtherPages onClick={() => goToNextPage()}> &#62;</OtherPages>
         <OtherPages onClick={() => goToFinalPage()}>Última</OtherPages>
      </SwitchPage>
   } else if (states.page === 4) {
      return <SwitchPage>
         <OtherPages onClick={() => goToFirstPage()}>Primeira</OtherPages>
         <OtherPages onClick={() => goToPreviousTwoPage()}>{states.page - 2}</OtherPages>
         <OtherPages onClick={() => goToPreviousPage()}>{states.page - 1}</OtherPages>
         <MyPage>{states.page}</MyPage>
         <OtherPages onClick={() => goToNextPage()}> &#62;</OtherPages>
         <OtherPages onClick={() => goToFinalPage()}>Última</OtherPages>
      </SwitchPage>
   } else  {
           return <SwitchPage>
           <OtherPages onClick={() => goToFirstPage()}>Primeira</OtherPages>
           <OtherPages onClick={() => goToPreviousPage()}> &#60; </OtherPages>
           <OtherPages onClick={() => goToPreviousTwoPage()}>{states.page - 2}</OtherPages> 
           <OtherPages onClick={() => goToPreviousPage()}>{states.page -1}</OtherPages>
           <MyPage>{states.page}</MyPage>
           </SwitchPage>
   }

}

export default Pagination