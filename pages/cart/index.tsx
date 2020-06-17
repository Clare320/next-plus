import { FC } from 'react'
import { GetStaticProps } from 'next'
import { inject } from 'mobx-react'
import { UserStore } from 'store'

interface CartProp {
  store?: UserStore
}

const Cart: FC<CartProp> = inject('store')(
  ({ store }: CartProp) => {
    const increaseGoodsNum = () => {
      store!.cartGoodsNum += 1
    }

    const decreaseGoodsNum = () => {
      store!.cartGoodsNum -= 1
    }

    return (
      <div>
        Cart
        <br />
        <button onClick={increaseGoodsNum}>购物车数量+1</button>
        <br />
        <br />
        <button onClick={decreaseGoodsNum}>购物车数量-1</button>
      </div>
    )
  }
)

export default Cart

export const getStaticProps: GetStaticProps = async function () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 3,
      title: '购物车'
    }
  }
}
