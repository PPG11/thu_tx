import { View } from '@tarojs/components'
import ManagerFooter from './ManagerFooter'
import style from './ManagerLayout.module.less'

export default ({ children, focusIdx, setFocusIdx }) => {
  return (
    <View className={style.layout}>
      <View className={style.main}>{children}</View>
      <ManagerFooter focusIdx={focusIdx} setFocusIdx={setFocusIdx}/>
    </View>
  )
}
