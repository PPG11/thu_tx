// import React from "react";
import { View } from '@tarojs/components'
import style from './ProjectCard.module.less'

export default ({ info }) => {
  return (
    <View className={style.outer}>
      <View className={style.top}>
        <View className={style.tag}>
          <View className={style.logo}>&#xe62d;</View>
          <View className={style.content}>{info.tag}</View>
        </View>
        <View className={style.name}>{info.name}</View>
        <View className={style.wrapper}>
          <View className={style.num}>
            {info.loginNum}/{info.totalNum}
          </View>
          <View className={style.important}>
            {info.isImortant && '重点支队'}
          </View>
        </View>
      </View>
      <View className={style.mid}>
        <View className={style.founder}>
          {info.founderName}({info.founderFrom})
        </View>
        <View className={style.projectType}>{info.projectType}</View>
      </View>
      <View className={style.down}>
        <View className={style.date}>
          {info.startDate}-{info.endDate}
        </View>
        <View className={style.location}>{info.location}</View>
        <View className={style.likes}>{info.likes}</View>
      </View>
    </View>
  )
}
