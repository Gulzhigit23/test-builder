import { createSlice,  } from "@reduxjs/toolkit";


const taskSlice = createSlice({
  name: "quiz",
  initialState: {
    test: [],
  },
  reducers: {
    addTestValue(state, action) {
      state.test.push(action.payload);
    },
    addSubTest(state, { payload }) {
      const findMainId = state.test.find((item) => item.id === payload.mainId);
     
      findMainId.variants.push(payload);
    },
    removeTest(state, action) {
      state.test = state.test.filter((item) => item.id !== action.payload);
    },

    removeSubTest(state, action) {
      const { testId, childrenId } = action.payload;

       state.test.map((item) => {
        if (item.id === testId) {
          return (item.variants = item.variants.filter(
            (item) => item.id !== childrenId
          ));
        }
        return item
      });
    },
    editinTest(state, action) {
      const { id, otherId, enteredEdit } = action.payload;

      state.test = state.test.filter((item) => {
        if (item.id === otherId) {
          return item.variants.map((item) => {
            if (item.id === id) {
              return (item.value = enteredEdit);
            }
            return item;
          });
        }
        return item;
      });
    },

    answerOfTest(state, action) {
    const {otherId,currentId} = action.payload
  
      const findId = state.test.find((item) => item.id === otherId)
     findId.correctAnswerid = currentId
     
      // const findId = state.test.find(
      //   (item) => item.id === action.payload.otherId
        
      //   );
       
      // findId.variants.map((element) =>
      //   element.id === action.payload.otherId
      //     ? { ...element, element.correctAnswerid: otherId }
      //     : element
      // );
    },
  },
});

export const {
  addTestValue,
  addSubTest,
  removeTest,
  removeSubTest,
  editinTest,
  answerOfTest,
} = taskSlice.actions;

export default taskSlice.reducer;
