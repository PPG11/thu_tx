import { View } from '@tarojs/components'
import UserFooter from './UserFooter'
import style from './UserLayout.module.less'

export default ({ children, focusIdx, setFocusIdx }) => {
  return (
    <View className={style.layout}>
      <View className={style.main}>{children}</View>
      <UserFooter focusIdx={focusIdx} setFocusIdx={setFocusIdx}/>
    </View>
  )
}
