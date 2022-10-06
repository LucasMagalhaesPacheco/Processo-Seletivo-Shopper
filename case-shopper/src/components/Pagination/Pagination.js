import React, {useContext} from 'react'
import GlobalContext from '../../Global/GlobalContext'
import { MyPage, OtherPages, SwitchPage } from './styled'

const Pagination = () => {

    const {states, setters} = useContext(GlobalContext)
 
 const goToNextPage = () => {
    setters.setPage(states.page + 1)
    setters.setAtualizationGets(states.AtualizationGets + 1)
 }

 const goToPreviousPage = () => {
    setters.setPage(states.page - 1)
    setters.setAtualizationGets(states.AtualizationGets + 1)
 }

 const goToPreviousTwoPage = () => {
    setters.setPage(states.page - 2)
    setters.setAtualizationGets(states.AtualizationGets + 1)
 }

 const goToNexTwoPage = () => {
    setters.setPage(states.page - 2)
    setters.setAtualizationGets(states.AtualizationGets + 1)
 }
 const goToFirstPage = () => {
    setters.setPage(1)
    setters.setAtualizationGets(states.AtualizationGets + 1)
 }

 const goToFinalPage = () => {
    setters.setPage(5)
    setters.setAtualizationGets(states.AtualizationGets + 1)
 }
  
//  switch (states.page) {
    // case (states.page === 1) :
    //     return <SwitchPage>
    //     <MyPage>{states.page}</MyPage>
    //     <OtherPages onClick={goToNextPage}>{states.page + 1}</OtherPages>
    //     <OtherPages onClick={goToNexTwoPage}>{states.page +2}</OtherPages>
    //     <OtherPages onClick={goToNextPage}> &#62;</OtherPages>
    //     <OtherPages onClick={goToFinalPage}>Última</OtherPages>
    // </SwitchPage>

    if(states.page === 1) {
        return <SwitchPage>
        <MyPage>{states.page}</MyPage>
        <OtherPages onClick={goToNextPage}>{states.page + 1}</OtherPages>
        <OtherPages onClick={goToNexTwoPage}>{states.page +2}</OtherPages>
        <OtherPages onClick={goToNextPage}> &#62;</OtherPages>
        <OtherPages onClick={goToFinalPage}>Última</OtherPages>
    </SwitchPage>
    }
        
    // case (states.page === 2) :
    //     return <section>
    //         <button onClick={goToPreviousPage}>{states.page - 1}</button>
    //         <button>{states.page}</button>
    //         <button onClick={goToNextPage}>{states.page + 1}</button>
    //         <button onClick={goToNexTwoPage}>{states.page +2}</button>
    //         <button onClick={goToNextPage}> &#62;</button>
    //         <button onClick={goToFinalPage}>Última</button>
    //     </section>
        
    // case (states.page === 3) :
    //     return <section>
    //          <button onClick={goToFirstPage}>Primeira</button>
    //          <button onClick={goToPreviousPage}>{states.page -1}</button>
    //          <button>{states.page}</button>
    //          <button onClick={goToNextPage}>{states.page + 1}</button>
    //          <button onClick={goToNextPage}> &#62;</button>
    //          <button onClick={goToFinalPage}>Última</button>
    //         </section>
        
    // case (states.page === 4) :
    //     return <section>
    //         <button onClick={goToFirstPage}>Primeira</button>
    //         <button onClick={goToPreviousTwoPage}>{states.page - 2}</button> 
    //         <button onClick={goToPreviousPage}>{states.page -1}</button>
    //         <button>{states.page}</button>
    //         <button onClick={goToNextPage}> &#62;</button>
    //         <button onClick={goToFinalPage}>Última</button>
    //         </section>
        
    // case (states.page === 5):
    //     return <section>
    //         <button onClick={goToFirstPage}>Primeira</button>
    //         <button onClick={goToPreviousPage}> &#60; </button>
    //         <button onClick={goToPreviousTwoPage}>{states.page - 2}</button> 
    //         <button onClick={goToPreviousPage}>{states.page -1}</button>
    //         <button>{states.page}</button>
    //         </section>
        
    // }

 }
  


export default Pagination