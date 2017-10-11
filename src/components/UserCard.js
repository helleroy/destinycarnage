import React, { Component } from 'react';

class UserCard extends Component {

    static mapMembershipType(type) {
        switch (type) {
            case 1:
                return 'Xbox';
            case 2:
                return 'PSN';
            case 4:
                return 'Blizzard';
            default:
                return 'Unknown'
        }
    }

    render() {
        const membershipData = this.props.membershipData;

        console.log(membershipData);
        console.log(!membershipData);

        if (!membershipData) {
            return null;
        }

        return (
            <div>
                <div className="bungie-user">
                    <h2>Bungie membership</h2>
                    <div>Display name: {membershipData.bungieNetUser.displayName}</div>
                    <div>ID: {membershipData.bungieNetUser.membershipId}</div>
                    <div>Member since: {new Date(membershipData.bungieNetUser.firstAccess).toDateString()}</div>
                </div>
                {membershipData.destinyMemberships.map((destinyMembership) => {
                    return (
                        <div className="destiny-membership">
                            <h2>Destiny membership</h2>
                            <div>Display name: {destinyMembership.displayName}</div>
                            <div>ID: {destinyMembership.membershipId}</div>
                            <div>Platform: {UserCard.mapMembershipType(destinyMembership.membershipType)}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default UserCard;
