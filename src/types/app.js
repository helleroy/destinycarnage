// @flow
import type { GeneralUser, Group, GroupMember, UserInfo } from "./bungie-api";

export type State = {
    +auth: Auth,
    +userData: User,
    +randomData: Object
}

export type Auth = {
    loggedIn: boolean
}

export type User = {
    bungieNetUser: GeneralUser,
    destinyUsers: Array<DestinyUser>
}

export type DestinyUser = {
    membership: UserInfo,
    clans: Array<{ member: GroupMember, group: Group }>
}
