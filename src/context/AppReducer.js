const AppReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SWITCH":
      return {
        ...state,
        jobData: state.jobData.map((data) => {
          switch ((action.payload.type, action.payload.name)) {
            case ("role", data.role):
              data.display = !action.payload.on;
              break;

            case ("level", data.level):
              data.display = !action.payload.on;
              break;
            default:
              break;
          }

          switch (action.payload.type) {
            case "languages":
              data.display = data.languages.includes(action.payload.name)
                ? !action.payload.on
                : action.payload.on;
              break;
            case "tools":
              data.display = data.tools.includes(action.payload.name)
                ? action.payload.on
                : !action.payload.on;
              break;
            default:
              break;
          }

          return data;
        }),
        filterData: state.filterData.map((data) => {
          if (data.name === action.payload.name) data.on = !action.payload.on;
          return data;
        }),
      };

    case "CLEAR_JOBS":
      return {
        ...state,
        jobData: state.jobData.map((data) => {
          data.display = false;
          return data;
        }),
        filterData: state.filterData.map((data) => {
          data.on = false;
          return data;
        }),
      };

    case "VIEW_ALL_JOBS":
      return {
        ...state,
        jobData: state.jobData.map((data) => {
          data.display = true;
          return data;
        }),
        filterData: state.filterData.map((data) => {
          data.on = true;
          return data;
        }),
      };

    default:
      return state;
  }
};

export default AppReducer;
