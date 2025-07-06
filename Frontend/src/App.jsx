import React from 'react'
import Layout from './components/layout/layout'
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout/>
    </>
  )
}