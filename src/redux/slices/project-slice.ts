import { createSlice } from "@reduxjs/toolkit";

export interface ProjectData {
    id: number;
    name: string;
    location: string;
    isCompleted: boolean;
}

interface ProjectState {
    project: ProjectData | null;
}
const inititalState: ProjectState = {
    project: null,
};
const projectSlice = createSlice({
    name: "project",
    initialState: inititalState,
    reducers: {
        setProject: (state, action) => {
            state.project = action.payload;
        },
        resetProject: (state) => {
            state.project = null;
        },
    },
});

export const { setProject, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
