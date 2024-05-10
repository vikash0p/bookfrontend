'use client'
import { useGlobalAuth } from '@/context/AuthProvider'
import React, { useEffect } from 'react'

const UserData = () => {
  const{getUserData, user}=useGlobalAuth();

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800 text-violet-600">
      <div className='bg-gray-900 rounded text-center space-y-3 p-12 '>
        <h1 className="text-2xl">{user?.user.email} </h1>
        <h1 className="text-2xl">{user?.user.name} </h1>
      </div>
    </div>
  );
}

export default UserData
