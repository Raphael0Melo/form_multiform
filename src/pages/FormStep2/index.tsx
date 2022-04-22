import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as style from './styles'
import { Theme } from '../../components/Theme'
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOptions } from '../../components/SelectOptions'



export const FormStep2 = () => {

  const navigate = useNavigate()
  const { state, dispatch } = useForm()

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {

      navigate('/step2')
    } else {
      alert("Preencha os Dados !")
    }
  }



  return (
    <Theme>
      <style.Container>
        <p>Passo 2/3 </p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <SelectOptions
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
        />

        <SelectOptions
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
        />

        <button onClick={handleNextStep}>Próximo</button>
      </style.Container>
    </Theme>
  )
}