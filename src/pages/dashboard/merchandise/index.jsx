import React from 'react'
import imageMap from '../../../utlis/helper'
import './merchandish.scss'
import { Link } from 'react-router-dom'
import { DashboardHeader } from '../../../component'

const products = [
    {
        title:'Arc Hoodie',
        img:imageMap['hoodie.jpg']
    },
    {
        title:'Arc Cap',
        img:imageMap['cap.jpg']
    },
    {
        title:'Arc T-shirt',
        img:imageMap['tshirt.jpg']
    },
    {
        title:'Arc Hoodie',
        img:imageMap['hoodie.jpg']
    }
]
const Merchandise = () => {
    return (
        <>
        <DashboardHeader title="Merchandise"/>
        <section className='merchandise-wrapped'>
            <div className='contaienr'>
                <div className='flex-box'>
                    {products.map((item,index)=>(
                    <div className='card-wrapped dark-gradient  ' key={index}>
                        <div className='image'>
                            <img src={item.img} alt='img' />
                        </div>
                        <div className='detail'>
                            <h4 className='uppercase text-lg'>{item.title}</h4>
                            <span className='text-sm mb-2 block'>(Limited Addition)</span>
                            <h3 className='font-display text-amber-600 title'>RM 50  <span className='text-white'>-10% off</span></h3>
                            <Link to="#/" className="purple_bordered w-full mt-2">
                                Buy
                            </Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Merchandise