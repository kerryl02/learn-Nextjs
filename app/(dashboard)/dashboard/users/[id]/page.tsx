import React from 'react'

const page = ({ params }: {params: {id: string}}) => {
  const { id } = params;
  return (
    <div>user profil: {id}</div>
  )
}

export default page