import * as style from './styles'

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}
export const SelectOptions = ({ title, description, icon, selected, onClick }: Props) => {
  return (

    <style.Container onClick={onClick} selected={selected}>
      <style.Icon>{icon}</style.Icon>
      <style.Info>
        <style.Title>{title}</style.Title>
        <style.Description>{description}</style.Description>
      </style.Info>
    </style.Container>
  )
}