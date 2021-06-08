// import React from "react";
import { View } from '@tarojs/components'
import style from './userLogin.module.less'
import Logo from '../../component/Logo'
import UserLogin from '../../component/UserLogin'

export default () => {
  return (
    <View className={style.login}>
      <View className={style.logo}>
        <Logo />
      </View>
      <View className={style.box}>
        <UserLogin />
      </View>
    </View>
  )
}
