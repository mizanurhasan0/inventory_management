import { InfoSvg, MailSvg, TelephoneSvg } from '@/assets'
import React from 'react'

let info = { "+880 18186-74298": <TelephoneSvg />, "info@softwarebd.com": <MailSvg />, "info": <InfoSvg /> }
export default function TopBanner() {
    return (
        <div className="flex justify-between p-2">
            {/* info portion */}
            <div className="flex items-center space-x-2">
                {Object.keys(info).map((d, i) => (
                    <div key={i} className="flex space-x-1 items-center">
                        {info[d]}
                        <p className="text-green_base">{d}</p>
                    </div>

                ))}
            </div>
            <div className="flex items-center space-x-2">
                <p className="px-2 border-r border-green_base">Login</p>
                <p className="px-2 border-r border-green_base border-opacity-35">Register</p>
                <p className="px-2 border-r border-green_base border-opacity-35">Help</p>
                <p className="px-2 border-r border-green_base border-opacity-35">Feedback</p>
            </div>
        </div>
    )
}
