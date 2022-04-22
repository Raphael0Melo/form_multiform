import * as style from './styles'

type Props = {
  title: string;
  description: string;
  icon: string;
}
export const SelectOptions = ({ title, description, icon }: Props) => {
  return (
    <style.Container>
      <style.Icon>{icon}</style.Icon>
      <style.Info>
        <style.Title>{title}</style.Title>
        <style.Description>{description}</style.Description>
      </style.Info>
    </style.Container>
  )
}