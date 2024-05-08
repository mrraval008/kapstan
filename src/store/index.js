import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialApplicationsData = {applicationData:[]}

const applicationSlice = createSlice({
    name:"applications",
    initialState:initialApplicationsData,
    reducers:{
        updateApplications(state,action){
            state.applicationData = action.payload.applicationData
        },
    }
})
const initalActiveApplication = {activeApplication:undefined};
const activerApplicationSlice = createSlice({
    name:"activeApplication",
    initialState:initalActiveApplication,
    reducers:{
        setActiveApplication(state,action){
                state.activeApplication = action.payload.activeApplication;
        }

    }
})

const initalSelectedTab = {activeTab:1};
const activerTabSlice = createSlice({
    name:"activeTab",
    initialState:initalSelectedTab,
    reducers:{
        setActiverTab(state,action){
                state.activeTab = action.payload.activeTab;
        }

    }
})

const store = configureStore({
    reducer:{applications:applicationSlice.reducer,activeApplication:activerApplicationSlice.reducer,activeTab:activerTabSlice.reducer}
})

export const applicationDataAction = applicationSlice.actions;
export const activeApplicationAction  = activerApplicationSlice.actions;
export const activeTab  = activerTabSlice.actions;

export default store;