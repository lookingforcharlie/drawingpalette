# Project: Color Palette Canvas

Version 1
Draw, undo and redo dots on the page
[Inspired by](https://www.youtube.com/watch?v=A0BmLYHLPZs)

## Stacks

React, TypeScript, Tailwind CSS, Vite

## Features

- when users click on the position, you need to leave a solid circle in the same place
- plant two buttons for undoing and redoing those clicks
- undo and redo button gray out when nothing to undo and redo

## Knowledge

- difference between display: inline, inline-block, block. [Reference](https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1)

- pop() and push()

  - pop() returns a new popped array
  - You need to declare an array in order to track the popped item

- const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log(e.clientX, e.clientY);
  };

- key={crypto.randomUUID()} is the alternative for UUID

## Questions

- Inside the div for pointClick.map(),
  className={`absolute rounded-full left-${point.x}-5+px top-${point.y}-5+px w-5 h-5 bg-latte`} doesn't work,
  when I click, the points tend to be place in the same place in palette.
