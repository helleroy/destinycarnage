// @flow
import type { Group, GroupMember, UserInfo } from "./bungie-api";

export type State = {
    +auth: Auth,
    +userData: Array<DestinyUser>
}

export type Auth = {
    loggedIn: boolean
}

export type DestinyUser = {
    membership: UserInfo,
    clans: Array<{ member: GroupMember, group: Group }>
}