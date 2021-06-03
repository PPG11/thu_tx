// import React from "react";
import { View, Image } from '@tarojs/components'
import style from './Logo.module.less'

export default () => {
  return (
    <View className={style.outer}>
      <Image
        src='http://wepractice.student.tsinghua.edu.cn/public/images/u30.png'
        className={style.logo}
      />
      <View className={style.title}>同行</View>
      <View className={style.subtitle}>We Practice</View>
    </View>
  )
}
