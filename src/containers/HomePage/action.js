export const HOME_ACTION_TYPE = {
    LOAD_DATA: "LOAD_DATA",
    LOAD_DATA_SUCCESSFULLY: "LOAD_DATA_SUCCESSFULLY",
    LOAD_DATA_FAILED: "LOAD_DATA_FAILED"
}

export function updateData(data) {
    console.log('action run');
    return {
        type: HOME_ACTION_TYPE.LOAD_DATA,
        payload: {
            data
        }
    };
  }
  
export function updateDataSuccessfully(data) {
    console.log('action run');
    return {
        type: HOME_ACTION_TYPE.LOAD_DATA_SUCCESSFULLY,
        payload: {
            data
        }
    };
}

/*export const loadDataAction = data => ({
    type: HOME_ACTION_TYPE.LOAD_DATA,
    payload: {
        data
    }
});

export const loadDataSuccessfullyAction = data => ({
    type: HOME_ACTION_TYPE.LOAD_DATA,
    payload: {
        data
    }
});*/