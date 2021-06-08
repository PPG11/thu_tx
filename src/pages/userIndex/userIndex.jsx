import { useState } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import style from './userIndex.module.less'
import UserLayout from '../../component/UserLayout'

export default () => {
  const [focusIdx, setFocusIdx] = useState(1)
  return (
    <UserLayout focusIdx={focusIdx} setFocusIdx={setFocusIdx}>
      {focusIdx == 1
        ? 'abc111'
        : focusIdx == 2
        ? 'abc222'
        : focusIdx == 3
        ? 'abc333'
        : focusIdx == 4
        ? 'abc444'
        : 'error'}
    </UserLayout>
  )
}
