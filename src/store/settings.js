import { createSlice } from "@reduxjs/toolkit";

const initialSettings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  iterations: 1,
  longBreakInterval: 4,
  circlePomodoro: "#ffa8a8",
  circleShort: "#c0eb75",
  circleLong: "#74c0fc",
  autoStartBreak: false,
  autoStartPomodoro: false,
  darkModeSettings: true,
  workTime: "0min",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettings,
  reducers: {
    resetSettings(state) {
      state.pomodoro = 25;
      state.shortBreak = 5;
      state.longBreak = 15;
      state.iterations = 1;
      state.longBreakInterval = 4;
      state.autoStartBreak = false;
      state.autoStartPomodoro = false;
      state.darkModeSettings = true;
      state.workTime = "0min";
    },

    incrementIterations(state) {
      state.iterations++;
    },

    modifyTimeSettings(state, actions) {
      state.pomodoro = actions.payload.pomodoro;
      state.shortBreak = actions.payload.shortBreak;
      state.longBreak = actions.payload.longBreak;
      state.longBreakInterval = actions.payload.longBreakInterval;
      state.autoStartBreak = actions.payload.autoBreak;
      state.autoStartPomodoro = actions.payload.autoWork;
      state.darkModeSettings = actions.payload.darkMode;
    },

    updateWorkTime: (state, actions) => {
      const minutes = actions.payload * state.pomodoro;
      const rest = minutes % 60;

      if (minutes < 60) {
        state.workTime = `${minutes}min`;
        return;
      }

      if (rest === 0) {
        const hours = minutes / 60;
        state.workTime = `${hours}h`;
        return;
      }

      const hours = (minutes - rest) / 60;

      state.workTime = `${hours}h${rest}min`;
    },
  },
});

export const settingsActions = settingsSlice.actions;

export default settingsSlice;
