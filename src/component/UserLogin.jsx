// import React from "react";
import { View, Text, Input, Button, } from '@tarojs/components'
import style from './UserLogin.module.less'

export default () => {
  return (
    <View className={style.outer}>
      <View className={style.title}>清华大学研究生实践平台</View>
      <Input className={style.userID} id='userID' placeholder='学号或工作证号'></Input>
      <Input className={style.password} id='password' placeholder='密码'></Input>
      <Button className={style.login}>登陆</Button>
    </View>
  )
}
