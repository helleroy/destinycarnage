// @flow
import type { Group, GroupMember, UserInfo } from "./bungie-api";

export type DestinyUser = {
    membership: UserInfo,
    clans: Array<{ member: GroupMember, group: Group }>
}