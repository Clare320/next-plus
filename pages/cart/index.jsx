export default function Cart() {
  return (
    <div>
      Cart
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      showTabbar: true,
      tabbarIndex: 3,
      title: '购物车'
    }
  }
}