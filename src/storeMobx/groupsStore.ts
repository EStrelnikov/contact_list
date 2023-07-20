import { makeAutoObservable } from 'mobx'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

export const groupsStore = makeAutoObservable({
    groups: [] as GroupContactsDto[],
    groupsListLoaded(state: GroupContactsDto[]) {
        groupsStore.groups = state;
    },
    getGroupById(id: GroupContactsDto['id']) {
        return groupsStore.groups.find((item) => item.id === id)
    }
})