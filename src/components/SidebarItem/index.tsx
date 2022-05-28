import {Link} from 'react-router-dom'
import * as style from './styles'
import {ReactComponent as ProfileIcon} from '../../svgs/profile.svg'
import {ReactComponent as BookIcon} from '../../svgs/book.svg'
import {ReactComponent as MailIcon} from '../../svgs/mail.svg'



type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

const SideBarItem = ({title, description, icon, path, active}: Props) => {
  return (
    <style.Container>
      <Link to={path}>
        <style.Info>
          <style.Title>{title}</style.Title>
          <style.Description>{description}</style.Description>
        </style.Info>

        <style.IconArea active={active}>
          {icon === 'profile' &&
          <ProfileIcon fill="white" width={24} height={24} />
          }
          {icon === 'book' &&
            <BookIcon fill="white" width={24} height={24} />
          }
          {icon === 'mail' &&
            <MailIcon fill="white" width={24} height={24} />
          }

        </style.IconArea>
        <style.Point active={active}></style.Point>

      </Link>
    </style.Container>
  )
}

export default SideBarItem

