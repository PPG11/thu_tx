// import React from "react";
import { View } from '@tarojs/components'
import style from './UserInfo.module.less'

export default () => {
  return (
    <View className={style.outer}>
      <View className={style.info}>我的</View>
      <View className={style.finish}>已经结项项目</View>
      <View className={style.doing}>正在进行项目</View>
    </View>
  )
}
