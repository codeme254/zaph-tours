import React from "react";
import Heading from "../Heading/Heading";
import Member from "./Member";
import teamMember from './../../Assets/images/team-member.jpg'

const TeamMembers = () => {
    const teamMembers = [
        {
            image: teamMember,
            name: 'Dennis Otwoma',
            position: 'chief executive officer',
            message: 'Zaph tours is focused on givin you the ultimate travelling ang trips experience you\'ve been thinkin of ranging from tours abroad to anywhere you can think of. We are the first tours company to take people to the moon.'
        },
        {
            image: teamMember,
            name: 'humphrey muriungi',
            position: 'Photography, guide',
            message: 'Zaph tours is focused on givin you the ultimate travelling ang trips experience you\'ve been thinkin of ranging from tours abroad to anywhere you can think of. We are the first tours company to take people to the moon.'
        },
        {
            image: teamMember,
            name: 'Samuel ochiel',
            position: 'operations manager',
            message: 'Zaph tours is focused on givin you the ultimate travelling ang trips experience you\'ve been thinkin of ranging from tours abroad to anywhere you can think of. We are the first tours company to take people to the moon.'
        },
        {
            image: teamMember,
            name: 'Fenikasi bwibo',
            position: 'sales and marketing',
            message: 'Zaph tours is focused on givin you the ultimate travelling ang trips experience you\'ve been thinkin of ranging from tours abroad to anywhere you can think of. We are the first tours company to take people to the moon.'
        },
        {
            image: teamMember,
            name: 'Nathan Warimwe',
            position: 'tours organiser',
            message: 'Zaph tours is focused on givin you the ultimate travelling ang trips experience you\'ve been thinkin of ranging from tours abroad to anywhere you can think of. We are the first tours company to take people to the moon.'
        },
        {
            image: teamMember,
            name: 'ivy mbogo',
            position: 'IT expert',
            message: 'Zaph tours is focused on givin you the ultimate travelling ang trips experience you\'ve been thinkin of ranging from tours abroad to anywhere you can think of. We are the first tours company to take people to the moon.'
        },
    ]
    return(
        <section className="team">
            <Heading subHeading="amazing staff" mainHeading="meet our team" bgText="our team" />
            <div className="team__members">
                {
                    teamMembers.map((el, i) => <Member image={el.image} name={el.name} position={el.position} message={el.message} key={i} />)
                }
            </div>
        </section>
    )
}

export default TeamMembers;