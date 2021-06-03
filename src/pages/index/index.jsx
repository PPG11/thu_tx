// import React from "react";
import { View, Text, Navigator } from '@tarojs/components'
import style from './index.module.less'
import Logo from '../../component/logo'

export default () => {
  return (
    <View className={style.index}>
      <View className={style.logobox}>
        <Logo />
      </View>
      <View className={style.box2}>
        <View className={style.box21}>
          <Navigator
            url='/pages/userLogin/userLogin'
            openType='navigate'
            className={style.login}
          >
            清华学生/教师登录入口
          </Navigator>
          <Navigator
            url='/pages/map/map'
            openType='navigate'
            className={style.map}
          >
            &gt;&nbsp;实践地图&nbsp;&lt;
          </Navigator>
        </View>
        <View className={style.infobox}>
          <Text className={style.info}>
            清华大学研究生实践信息化平台&nbsp;·&nbsp;
          </Text>
          <Navigator
            url='/pages/map/map'
            openType='navigate'
            className={style.manage}
          >
            管理后台
          </Navigator>
        </View>
      </View>
    </View>
  )
}
