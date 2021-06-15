import { useState } from 'react'
import { View, Input, Button, Radio, RadioGroup } from '@tarojs/components'
import style from './CreateProject.module.less'

export default () => {
  // 支队名称
  const [name, setName] = useState('')
  // 支队人数
  const [num, setNum] = useState('')
  // 支队级别
  const [level, setLevel] = useState()
  const handleLevel = (e) => {
    console.log('支队级别为：', e)
    setLevel(e)
  }
  // 联合支队
  const [unite, setUnite] = useState()
  const handleUnite = (e) => {
    console.log('联合支队为：', e)
    setUnite(e)
  }

  const handleCommit = () => {
    console.log(name)
    console.log(num)
    console.log(level)
    console.log(unite)
    console.log()
    console.log()
    console.log()
    console.log()
  }

  return (
    <View className={style.outer}>
      <View className={style.row}>
        <View className={`${style.label} ${style.hot}`}>支队名称：</View>
        <Input
          className={style.input}
          type='text'
          placeholder='请填写支队名称，最多35字'
          value={name}
          onInput={(e) => setName(e.target.value)}
        />
      </View>
      <View className={style.row}>
        <View className={`${style.label} ${style.hot}`}>支队人数：</View>
        <Input
          className={style.input}
          type='text'
          placeholder='请填写支队人数'
          value={num}
          onInput={(e) => setNum(e.target.value)}
        />
      </View>
      <View className={style.row}>
        <View className={`${style.label} ${style.hot}`}>支队级别：</View>
        <RadioGroup
          className={style.radio}
          onChange={(e) => handleLevel(e.detail.value)}
        >
          <Radio value='校级' className={style.radioItem}>
            校级支队
          </Radio>
          <Radio value='院级' className={style.radioItem}>
            院级支队
          </Radio>
        </RadioGroup>
      </View>
      <View className={style.row}>
        <View className={`${style.label} ${style.hot}`}>联合支队：</View>
        <RadioGroup
          className={style.radio}
          onChange={(e) => handleUnite(e.detail.value)}
        >
          <Radio value='是' className={style.radioItem}>
            是
          </Radio>
          <Radio value='否' className={style.radioItem}>
            否
          </Radio>
        </RadioGroup>
      </View>

      <View className={style.row}>
        <Button className={style.commit} onClick={() => handleCommit()}>
          提交
        </Button>
      </View>
    </View>
  )
}
