import React from 'react'

interface Props {
  children: React.ReactNode
  title: string
}
const PageHeader:React.FC<Props> = (props) => {
  return (
    <div className='p-8'>
      <div className="pb-2 mb-4 border-b  border-gray-300">
        <h2 className="text-2xl font-semibold">{props.title}</h2>
      </div>
      <div className="">
      {props.children}
      </div>
      </div>
  )
}

export default PageHeader