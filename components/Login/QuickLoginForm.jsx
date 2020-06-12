import styles from './index.less'
import Request from 'utils/request'

export default function QuickLoginForm () {
  const getCode = () => {
    console.log('get code --->')

    const phoneEle = document.getElementById('phone')
    const phone = phoneEle.value
    if (phone === undefined || phone.length < 11) {
      window.alert('请输入正确手机号')
      return
    }

    Request.get('api/Home/AppHomePage202005?versionNo=4.5.8')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    /*
  Request.post('/api/Goods/GoodsLike')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
    */
  }

  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <input type='text' id='phone' className={styles.input} placeholder='手机号码' maxLength={11} />
      </div>
      <div className={styles.input_container}>
        <input type='text' id='verifycode' className={styles.input} placeholder='验证码' />
        <span className={styles.span_get_code} onClick={getCode}>获取验证码</span>
      </div>
      <div className={styles.login_container}>
        <button className={styles.login}>立即登录</button>
      </div>
      <span className={styles.agreeprotocol}>点击登录表示已同意<a className={styles.protocol}>《可得用户协议》</a></span>
    </form>
  )
}
