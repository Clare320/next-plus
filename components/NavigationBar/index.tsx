import { FC } from 'react'

interface NavigationBarProps {
  children: JSX.Element[] | JSX.Element
  title: string
  showRightMenu: boolean
}

const NavigationBar: FC<NavigationBarProps> = ({ title, children, showRightMenu }) => {
  return (
    <div>
      <div><img /></div>
      {
        title &&
        <span>{title}</span>
      }
      {
        children
      }
      {
        showRightMenu &&
        <div><img /></div>
      }
    </div>
  )
}

export default NavigationBar