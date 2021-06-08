import { useState } from 'react'
import { View, Text, Input, Button } from '@tarojs/components'
import style from './ManagerLogin.module.less'

export default () => {
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    console.log(userID)
    console.log(password)
  }

  return (
    <View className={style.outer}>
      <Text className={style.title}>登录</Text>
      <View className={style.input}>
        <Text className={style.label}>*账号</Text>
        <Input
          className={style.userID}
          type='text'
          placeholder='学号或工作证号'
          value={userID}
          onInput={(e) => setUserID(e.target.value)}
        />
      </View>
      <View className={style.input}>
      <Text className={style.label}>*密码</Text>
        <Input
          className={style.password}
          type='password'
          placeholder='密码'
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
      </View>

      <Button className={style.login} onClick={() => handleLogin()}>
        登陆
      </Button>
      <Text className={style.info}>仅清华大学师生登录info账号密码认证使用</Text>
    </View>
  )
}
