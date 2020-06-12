import { inject } from 'mobx-react'

const Cart = inject('store')(
  ({ store }) => {
    const increaseGoodsNum = () => {
      store.cartGoodsNum += 1
    }

    const decreaseGoodsNum = () => {
      store.cartGoodsNum -= 1
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

export async function getStaticProps () {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 3,
      title: '购物车'
    }
  }
}
