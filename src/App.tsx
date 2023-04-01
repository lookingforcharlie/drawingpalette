import { useState } from 'react';

type point = {
  x: number;
  y: number;
};

function App() {
  // array of obj to hold all the clicks on the page
  const [pointClick, setPointclick] = useState<point[]>([]);
  // array of obj to hold all the undo items that were taken away from pointClick array
  const [poppedPoint, setPoppedpoint] = useState<point[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e) makes you see the whole object of event
    console.log(e.clientX, e.clientY);
    setPointclick([...pointClick, { x: e.clientX, y: e.clientY }]);
    console.log(pointClick);
  };

  const handleUndo = () => {
    // Undo func starts: remove the last point added to the array
    const newPointClick = [...pointClick];
    const poppedOut = newPointClick.pop();
    console.log(`the popped point: ${JSON.stringify(poppedOut)}`);
    setPointclick(newPointClick);
    // Undo func ends

    // if statement to prevent the edge case
    if (!poppedOut) return;
    setPoppedpoint([...poppedPoint, poppedOut]);
  };

  // Redo func: redo the last undone item
  const handleRedo = () => {
    console.log(`the array of popped point: ${JSON.stringify(poppedPoint)}`);
    // declare a new temp variable to hold the value of poppedPoint
    const newPopped = [...poppedPoint];
    // declare a new variable to hold the redo value
    const redoItem = newPopped.pop();
    // take redo item away from poppedPoint array
    setPoppedpoint(newPopped);

    // declare a temp variable to hold the value of pointClick
    const temp = [...pointClick];
    if (!redoItem) return;
    // adding the redoItem to the end of pointClick array to implement redo func
    temp.push(redoItem);
    setPointclick(temp);
  };

  return (
    <>
      <div className='border-2 flex flex-col p-8 container items-center justify-center mx-auto rounded-2xl'>
        <h1 className='text-4xl text-latte text-center'>My Drawing Palette</h1>
        <div className='flex gap-6 mt-8'>
          <button
            disabled={pointClick.length === 0}
            className='border-2 border-veryDark px-4 py-1 rounded-lg shadow-lg disabled:text-gray-700 disabled:border-gray-700 disabled:opacity-70'
            onClick={handleUndo}
          >
            Undo
          </button>
          <button
            disabled={poppedPoint.length === 0}
            className='border-2 border-veryDark px-4 py-1 rounded-lg shadow-lg  disabled:text-gray-700 disabled:border-gray-700 disabled:opacity-70'
            onClick={handleRedo}
          >
            Redo
          </button>
        </div>
      </div>
      {/* We need 'h-screen' here, or there's no place for click */}
      <div className='h-screen' onClick={handleClick}>
        {pointClick.map((point) => (
          <div
            key={crypto.randomUUID()}
            className='point'
            style={{
              left: point.x - 5 + 'px',
              top: point.y - 5 + 'px',
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
