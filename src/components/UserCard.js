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
        return (
            <div>
                <div className="bungie-user">
                    <h2>Bungie membership</h2>
                    <div>Display name: {this.props.bungieNetUser.displayName}</div>
                    <div>ID: {this.props.bungieNetUser.membershipId}</div>
                    <div>Member since: {new Date(this.props.bungieNetUser.firstAccess).toDateString()}</div>
                </div>
                {this.props.destinyMemberships.map((destinyMembership) => {
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
