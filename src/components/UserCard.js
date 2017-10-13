// @flow
import React, { Component } from 'react';
import type { DestinyUser, User } from "../types/app";

type Props = {
    user: User
}

class UserCard extends Component<Props> {

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
        if (!this.props.user) {
            return null;
        }

        return (
            <div>
                <div className="bungie-user">
                    <h2>Bungie membership</h2>
                    <div>Display name: {this.props.user.bungieNetUser.displayName}</div>
                    <div>ID: {this.props.user.bungieNetUser.membershipId}</div>
                    <div>About: {this.props.user.bungieNetUser.about}</div>
                    <div>Member since: {this.props.user.bungieNetUser.firstAccess}</div>
                </div>
                {this.props.user.destinyUsers.map((destinyUser: DestinyUser) => {
                    return (
                        <div className="destiny-membership">
                            <h2>Destiny membership</h2>
                            <div>Display name: {destinyUser.membership.displayName}</div>
                            <div>ID: {destinyUser.membership.membershipId}</div>
                            <div>Platform: {UserCard.mapMembershipType(destinyUser.membership.membershipType)}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default UserCard;
