import React from 'react'
import Frame from './Frame'

function AdminCard(props) {
    const coreMembers = props.info.members.core.filter(item => item.department === "Admin")
    const adminMembers = {}
    adminMembers.chairPerson = coreMembers.filter(item => item.post === "chairperson")[0]
    adminMembers.viceChairPersonTech = coreMembers.filter(item => item.post === "vice-chairperson-technical")[0]
    adminMembers.viceChairPersonAdmin = coreMembers.filter(item => item.post === "vice-chairperson-admin")[0]
    adminMembers.treasurer = coreMembers.filter(item => item.post === "treasurer")[0]
    return (
            <div className='my-2 w-11/12 flex justify-center h-screen'>
                <div className='z-10 flex flex-col items-center justify-center w-4/6'>
                { adminMembers.chairPerson!==undefined ?
                    <div className='flex flex-col justify-center items-center bg-opacity-0 bg-white rounded-3xl w-full h-auto px-4 py-3'>
                        <div><Frame members={adminMembers.chairPerson} post="CHAIRPERSON"/></div>
                        <div className='flex'>
                            <Frame members={adminMembers.viceChairPersonTech} post="VICECHAIRPERSON" />
                            <Frame members={adminMembers.treasurer} post="TREASURER" />
                            <Frame members={adminMembers.viceChairPersonAdmin} post="VICECHAIRPERSON" />
                        </div>
                    </div> : null
                }
                </div>
            </div>
            
    )
}

export default AdminCard
