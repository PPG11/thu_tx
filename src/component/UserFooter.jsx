import { View } from '@tarojs/components'
import style from './UserFooter.module.less'

export default ({focusIdx, setFocusIdx}) => {
  return (
    <View className={style.outer}>
      <View
        className={`${style.item} ${focusIdx == 1 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(1)
        }}
      >
        <View className={style.icon}>&#xe704;</View>
        <View className={style.tag}>申请加入</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 2 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(2)
        }}
      >
        <View className={style.icon}>&#xe606;</View>
        <View className={style.tag}>我要立项</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 3 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(3)
        }}
      >
        <View className={style.icon}>&#xe608;</View>
        <View className={style.tag}>我的</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 4 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(4)
        }}
      >
        <View className={style.icon}>&#xe600;</View>
        <View className={style.tag}>健康日报</View>
      </View>
    </View>
  )
}
