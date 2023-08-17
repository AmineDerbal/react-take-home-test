import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:8080/api/getBallotData';

const initialState = {
  ballotData: [],
  isLoading: false,
  hasError: false,
  isFetched: false,
};

export const fetchBallotData = createAsyncThunk('ballot/fetchBallotData', async () => {
  try {
    const dataStream = await fetch(baseUrl);
    const data = await dataStream.json();
    return data;
  } catch (err) {
    return err;
  }
});

const ballotSlice = createSlice({
  name: 'ballot',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBallotData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(fetchBallotData.fulfilled, (state, action) => {
      const isLoading = false;
      const isFetched = true;
      const ballotData = action.payload;
      return {
        ...state,
        ballotData,
        isLoading,
        isFetched,
      };
    });
    builder.addCase(fetchBallotData.rejected, (state) => {
      const isLoading = false;
      const hasError = true;
      return {
        ...state,
        isLoading,
        hasError,
      };
    });
  },
});

export default ballotSlice.reducer;
