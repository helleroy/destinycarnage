// @flow
export type UserMembership = {
    bungieNetUser: GeneralUser,
    destinyMemberships: Array<UserInfo>
}

export type GeneralUser = {
    membershipId: number,
    uniqueName: string,
    normalizedName: string,
    displayName: string,
    profilePicture: number,
    profileTheme: number,
    userTitle: number,
    isDeleted: boolean,
    about: string,
    firstAccess: Date,
    psnDisplayName: string,
    xboxDisplayName: string,
    fbDisplayName: string,
    blizzardDisplayName: string,
    locale: string,
}

export type UserInfo = {
    supplementalDisplayName: string,
    iconPath: string,
    membershipType: number,
    membershipId: number,
    displayName: string
}

export type GroupMember = {
    memberType: number,
    isOnline: boolean,
    groupId: number,
    destinyUserInfo: UserInfo,
    bungieNetUserInfo: UserInfo,
    joinDate: Date
}

export type DestinyProgression = {
    progressionHash: number,
    dailyProgress: number,
    dailyLimit: number,
    weeklyProgress: number,
    weeklyLimit: number,
    currentProgress: number,
    level: number,
    levelCap: number,
    stepIndex: number,
    progressToNextLevel: number,
    nextLevelAt: number
}

export type ClanInfo = {
    "d2ClanProgressions": { [number]: DestinyProgression },
    "clanCallsign": string,
    "clanBannerData": ClanBanner
}

export type ClanBanner = {
    decalId: number,
    decalColorId: number,
    decalBackgroundColorId: number,
    gonfalonId: number,
    gonfalonColorId: number,
    gonfalonDetailId: number,
    gonfalonDetailColorId: number
}

export type GroupFeatures = {
    "maximumMembers": number,
    "maximumMembershipsOfGroupType": number,
    "capabilities": number,
    "membershipTypes": Array<number>,
    "invitePermissionOverride": boolean,
    "updateCulturePermissionOverride": boolean,
    "hostGuidedGamePermissionOverride": number,
    "updateBannerPermissionOverride": boolean,
    "joinLevel": number
}

export type Group = {
    groupId: number,
    name: string,
    groupType: number,
    membershipIdCreated: number,
    creationDate: Date,
    modificationDate: Date,
    about: string,
    tags: Array<string>,
    memberCount: number,
    isPublic: boolean,
    isPublicTopicAdminOnly: boolean,
    primaryAlliedGroupId: number,
    motto: string,
    allowChat: boolean,
    isDefaultPostPublic: boolean,
    chatSecurity: number,
    locale: string,
    avatarImageIndex: number,
    homepage: number,
    membershipOption: number,
    defaultPublicity: number,
    theme: string,
    bannerPath: string,
    avatarPath: string,
    isAllianceOwner: boolean,
    conversationId: number,
    enableInvitationMessagingForAdmins: boolean,
    banExpireDate: Date,
    features: GroupFeatures,
    clanInfo: ClanInfo
}
