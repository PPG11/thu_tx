import { View } from '@tarojs/components'
import style from './ManagerFooter.module.less'

export default ({focusIdx, setFocusIdx}) => {
  return (
    <View className={style.outer}>
      <View
        className={`${style.item} ${focusIdx == 1 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(1)
        }}
      >
        <View className={style.icon}>&#xe749;</View>
        <View className={style.tag}>提交项目</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 2 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(2)
        }}
      >
        <View className={style.icon}>&#xe625;</View>
        <View className={style.tag}>撤项申请</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 3 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(3)
        }}
      >
        <View className={style.icon}>&#xe619;</View>
        <View className={style.tag}>结项申请</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 4 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(4)
        }}
      >
        <View className={style.icon}>&#xe7ba;</View>
        <View className={style.tag}>信息查询</View>
      </View>
      <View
        className={`${style.item} ${focusIdx == 5 ? style.focus : style.item}`}
        onClick={() => {
          setFocusIdx(5)
        }}
      >
        <View className={style.icon}>&#xe6b6;</View>
        <View className={style.tag}>项目评价</View>
      </View>
    </View>
  )
}
