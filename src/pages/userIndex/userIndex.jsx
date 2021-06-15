import { useState } from 'react'
import { View, Text, Navigator } from '@tarojs/components'
import style from './userIndex.module.less'
import UserLayout from '../../component/UserLayout'
import Join from '../../component/Join'
import CreateProject from '../../component/CreateProject'

export default () => {
  const [focusIdx, setFocusIdx] = useState(1)
  return (
    <UserLayout focusIdx={focusIdx} setFocusIdx={setFocusIdx}>
      <Join />
      {/* <CreateProject /> */}
      {/* {focusIdx == 1
        ? 'abc111'
        : focusIdx == 2
        ? <CreatProject />
        : focusIdx == 3
        ? 'abc333'
        : focusIdx == 4
        ? 'abc444'
        : 'error'} */}
    </UserLayout>
  )
}
