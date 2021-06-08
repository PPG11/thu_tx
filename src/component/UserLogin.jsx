import { useState } from 'react'
import { View, Input, Button } from '@tarojs/components'
import style from './UserLogin.module.less'

export default () => {
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log(userID)
    console.log(password)
  }

  return (
    <View className={style.outer}>
      <View className={style.title}>清华大学研究生实践平台</View>
      <Input
        className={style.userID}
        type='text'
        placeholder='学号或工作证号'
        value={userID}
        onInput={(e) => setUserID(e.target.value)}
      />
      <Input
        className={style.password}
        type='password'
        placeholder='密码'
        value={password}
        onInput={(e) => setPassword(e.target.value)}
      />
      <Button className={style.login} onClick={() => handleLogin()}>
        登陆
      </Button>
    </View>
  )
}
