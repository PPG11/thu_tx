import { useState } from 'react'
// import { View, Text, Navigator } from '@tarojs/components'
import style from './userIndex.module.less'
import UserLayout from '../../component/UserLayout'
import Join from '../../component/Join'
import CreateProject from '../../component/CreateProject'
import UserInfo from '../../component/UserInfo'

export default () => {
  const [focusIdx, setFocusIdx] = useState(1)
  return (
    <UserLayout focusIdx={focusIdx} setFocusIdx={setFocusIdx}>
      {focusIdx == 1
        ? <Join />
        : focusIdx == 2
        ? <CreateProject />
        : focusIdx == 3
        ? <UserInfo />
        : focusIdx == 4
        ? 'abc444'
        : 'error'}
    </UserLayout>
  )
}
