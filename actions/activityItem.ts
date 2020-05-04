import { ActivityItem } from '../types'

export enum ActivityItemActionType {
    ADD = 'ActivityItemAdd'
}

export interface ActivityItemAction {
    type: ActivityItemActionType,
    item?: ActivityItem
}

export const add = (item: ActivityItem): ActivityItemAction => ({
    item,
    type: ActivityItemActionType.ADD
})
