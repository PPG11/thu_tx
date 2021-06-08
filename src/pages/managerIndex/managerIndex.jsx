import { useState } from 'react'
import { View } from '@tarojs/components'
import style from './ManagerIndex.module.less'
import ManagerLayout from '../../component/ManagerLayout'

export default () => {
  const [focusIdx, setFocusIdx] = useState(1)
  return (
    <ManagerLayout focusIdx={focusIdx} setFocusIdx={setFocusIdx}>
      {focusIdx == 1
        ? 'MMM111'
        : focusIdx == 2
        ? 'MMM222'
        : focusIdx == 3
        ? 'MMM333'
        : focusIdx == 4
        ? 'MMM444'
        : focusIdx == 5
        ? 'MMM555'
        : 'error'}
    </ManagerLayout>
  )
}
