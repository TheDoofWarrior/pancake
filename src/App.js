import React from 'react';

function App(props) {
  const flipDemCakes = (pancakeStack) => {
    if (isValidPancakeString(pancakeStack)) {
      return 'We only flip pancakes. Please try again.';
    }

    let flipCount = 0;
    const stacksAndFlipCount = [];
    stacksAndFlipCount.push(pancakeStack);

    if (!pancakeStack.includes('-')) {
      stacksAndFlipCount.push(flipCount);
      stacksAndFlipCount.push(pancakeStack);
      return stacksAndFlipCount;
    }

    if (!pancakeStack.includes('+')) {
      flipCount++;
      stacksAndFlipCount.push(flipCount);
      stacksAndFlipCount.push(pancakeStack.replace(/-/g, '+'));
      return stacksAndFlipCount;
    }

    let happyPancakeStack = '';

    for (let index = 0; index < pancakeStack.length; index++) {
      const pancake = pancakeStack[index];
      const nextPancake = pancakeStack[index + 1];

      if (pancake !== nextPancake) {
        const flipChar = pancake === '+' ? '-' : '+';
        const re = new RegExp('\\' + pancake, 'g');
        const flippedPancakes = pancakeStack.slice(0, index + 1).replace(re, flipChar);
        const unflippedStack = pancakeStack.slice(index + 1, pancakeStack.length);

        happyPancakeStack = flippedPancakes + unflippedStack;
        flipCount++;
        if (happyPancakeStack.length === pancakeStack.length && happyPancakeStack.indexOf('-') === -1) {
          break;
        }
      } else {
        happyPancakeStack += pancake;
      }
    }

    stacksAndFlipCount.push(flipCount);
    stacksAndFlipCount.push(happyPancakeStack);
    
    return stacksAndFlipCount;
  };

  const isValidPancakeString = (pancakeString) => {
    return !pancakeString || pancakeString.length === 0 || typeof pancakeString !== 'string'
    || (!pancakeString.includes('-') && !pancakeString.includes('+'));
  } 

  const solution = flipDemCakes(props.input);

  return (
    <React.Fragment>
    {
      typeof solution === 'string' ?
      <div>{solution}</div>
      :
      <React.Fragment>
        <div>
          {`Case ${solution[0]}: flips ${solution[1]}`}
        </div>
        <span>
          {`Finished stack ${solution[2]}`}
        </span>
      </React.Fragment>
    }
    </React.Fragment>
  );
}

export default App;
