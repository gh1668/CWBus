import {action, observable} from "mobx";

export default class ObservableMainStore {
    @observable tabIndex = 0;

    @action setTabIndex(idx) {
        this.tabIndex = idx;
    }
}