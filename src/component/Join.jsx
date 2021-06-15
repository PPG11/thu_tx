// import React from "react";
import { View, Image } from '@tarojs/components'
import ProjectCard from './ProjectCard'
import style from './Join.module.less'

// 【项目标签】【名称】【是否重点】【报名人数】【总人数】
// 【创建人】【创建人学院】【项目类型】
// 【开始时间】【结束时间】【地点】【点赞数】

export default () => {
  const infoList = [
    {
      tag: '启航',
      name: '大熊猫国家公园社区文创设计服务实践支队',
      isImortant: true,
      loginNum: 2,
      totalNum: 20,
      founderName: '何倩',
      founderFrom: '金融学院',
      projectType: '大熊猫·文创',
      startDate: '2020.08.10',
      endDate: '2020.08.21',
      location: '北京市',
      likes: 3,
    },
    {
      tag: '启航',
      name: '大熊猫国家公队22222',
      isImortant: false,
      loginNum: 2,
      totalNum: 20,
      founderName: '何倩',
      founderFrom: '金融学院',
      projectType: '大熊猫·文创',
      startDate: '2020.08.10',
      endDate: '2020.08.21',
      location: '北京市',
      likes: 3,
    },
    {
      tag: '启航',
      name: '3333大熊猫国家公园社区文创设计服务实践支队',
      isImortant: false,
      loginNum: 2,
      totalNum: 20,
      founderName: '何倩',
      founderFrom: '金融学院',
      projectType: '大熊猫·文创',
      startDate: '2020.08.10',
      endDate: '2020.08.21',
      location: '北京市',
      likes: 3,
    },
  ]
  return (
    <View className={style.outer}>
      {infoList.map((item) => (
        <ProjectCard info={item} key={item.name} />
      ))}
    </View>
  )
}
