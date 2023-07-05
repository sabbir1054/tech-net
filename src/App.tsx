import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "./redux/features/Counter/counterSlice";
import { RootState } from "./redux/store";
function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className="flex gap-6 p-50">
          <button
            className="border-2 border-green-400 bg-purple-600  text-white font-bold"
            onClick={() => dispatch(increment())}
          >
            {" "}
            Increment
          </button>
          <button
            className="border-2 border-green-400 bg-purple-600  text-white font-bold"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            {" "}
            Increment 5
          </button>
          <h1 className="text-xl text-center">{count}</h1>
          <button
            className="border-2 border-green-400 bg-purple-600  text-white font-bold"
            onClick={() => dispatch(decrement())}
          >
            {" "}
            Decrement
          </button>
          <button
            className="border-2 border-green-400 bg-purple-600  text-white font-bold"
            onClick={() => dispatch(decrementByAmount(5))}
          >
            {" "}
            Decrement 5
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
