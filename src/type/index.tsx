export interface UserInfo {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export interface SingleUserInfo {
    data: UserInfo
    support: {
        url: string
        text: string
    }
}