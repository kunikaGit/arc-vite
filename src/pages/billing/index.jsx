import React from 'react'
import './billing.scss'
import { DownloadIcon } from 'lucide-react'
import { DashboardHeader } from '../../component'
import { Link } from 'react-router-dom'
const Billing = () => {
    return (
        <>
            <DashboardHeader title="Billing" />
            <div className='billing-wrapped'>
                <div className="theme_card dark-gradient data-table mb-5">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Invoice</th>
                                <th>Description</th>
                                <th>Add-ons</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='bg-transparent border-0 w-full flex items-center justify-center'><DownloadIcon /></button>
                                </td>
                            </tr>

                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='bg-transparent border-0 w-full flex items-center justify-center'><DownloadIcon /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='bg-transparent border-0 w-full flex items-center justify-center'><DownloadIcon /></button>
                                </td>
                            </tr>
                            <tr>
                                <td>04/01/2025</td>
                                <td>INV-2024</td>
                                <td>ARC 100k Challenge Purchase</td>
                                <td>Extra Phase Extension</td>
                                <td>$499</td>
                                <td>Paid</td>
                                <td>
                                    <button type='button' className='bg-transparent border-0 w-full flex items-center justify-center'><DownloadIcon /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className='flex justify-end'>
                <Link   
                    to="#/"
                    className="purple_bordered">
                    Refund
                </Link>
                </div>
            </div>
        </>
    )
}

export default Billing