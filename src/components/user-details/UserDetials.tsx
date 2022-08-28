import React from 'react'

export default function UserDetails({ workerData }: { workerData: { name: string, experience: { title: string, startDate: Date, endDate: Date, gap?: number }[] } }) {

    return (
        <div className='user-details' key={workerData.name}>
            <div >Hello {workerData.name}</div>
            {workerData.experience.map((exp: any) =>
                <div key={`${workerData.name}-${exp.title}-${exp.startDate}`}>
                    <div >Worked as: {exp.title}, From {exp.startDate} To {exp.endDate}</div>
                    {exp.gap && <div>Gap between jobs: {exp.gap <= 31 ? `${exp.gap} days` : exp.gap <= 365 ? `${exp.gap / 30} months` : `${exp.gap / 365} years`},</div>}
                </div>
            )}
            <div>---</div>
        </div>

    );

}