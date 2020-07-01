import { FC, useState } from 'react'
import { GetStaticProps } from 'next'
import cn from 'classnames'
import axiosInstance from 'utils/request'
import styles from './index.less'

interface AppClassDTO {
  ClassID: string,
  ParentID: string,
  ClassName: string,
  ImageUrl: string,
  OrderIndex: string,
  SEOCode: string,
  IsClassNameShow: boolean,
  IsImageShow: boolean,
  ChildAppClassDTO: AppClassDTO[]
}

interface ClassMenuProps {
  data: AppClassDTO[]
}

interface LeftMenuCellProps {
  title: string
  index: number
  isSelected: boolean
  callback: (x: number) => void
}

const LeftMenuCell: FC<LeftMenuCellProps> = ({ title, index, isSelected, callback }) => {
  const handleClick = () => {
    callback(index)
  }
  return (
    <li className={cn(styles['left-menu__cell'], isSelected && styles['left-menu__cell--selected'])} onClick={handleClick}>
      {title}
    </li>
  )
}

const GoodsListSection: FC<AppClassDTO> = ({ ClassName, ChildAppClassDTO }) => {
  return (
    <>
      <h4 className={styles['goods-section__title']}>{ClassName}</h4>
      <div className={styles['goods-list__section']}>
        {
          ChildAppClassDTO.map((item, index) => (
            <Goods key={`${item.ClassID}` + index} {...item} />
          ))
        }
      </div>
    </>
  )
}

const Goods: FC<AppClassDTO> = ({ ClassName, ImageUrl }) => {
  return (
    <div className={styles['goods-list__cell']}>
      <img src={ImageUrl} className={styles['goods-image']} />
      <span className={styles['goods-name']}>{ClassName}</span>
    </div>
  )
}

const ClassMenu: FC<ClassMenuProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const childMenu = data[selectedIndex].ChildAppClassDTO

  const leftMenus: string[] = []
  data.map((item) => {
    leftMenus.push(item.ClassName)
  })

  const handleSelectMenu = (index: number) => {
    if (index === selectedIndex) return
    setSelectedIndex(index)
  }

  return (
    <div className={styles['classmenu__container']}>
      <ul className={styles['left-menu']}>
        {
          leftMenus.map((item, index) => (
            <LeftMenuCell
              key={'menucell' + index}
              title={item}
              index={index}
              isSelected={index === selectedIndex}
              callback={handleSelectMenu}
            />
          ))
        }
      </ul>
      <div className={styles['goods-list']}>
        
          {
            childMenu.map((item, index) => (
              <GoodsListSection key={'section' + index} {...item} />
            ))
          }
       
      </div>
    </div>
  )
}

export default ClassMenu

export const getStaticProps: GetStaticProps = async function () {
  const res = await axiosInstance.post('/api/classmenu')
  const data = res.data
  const { Data } = data
  return {
    props: {
      data: Data
    }
  }
}
