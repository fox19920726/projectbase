import React, { FC, useEffect } from 'react'
import { useUserInfo, useRouteList } from '@/hooks'
import LayoutContent from './components/layoutContent'

const ContentMain: FC = () => {
  const { handleInfo } = useUserInfo()
  const handleAsyncRoutes = useRouteList()

  useEffect(() => {
    /*
    * useEffect本身不支持async Promise<void>这样的
    * 可以用这样的自执行函数去实现
    */
    (async (): Promise<void> => {
      await handleInfo()
      handleAsyncRoutes()
    })()
  }, [])

  return (
    <>
      <LayoutContent />
    </>
  )
}

export default ContentMain