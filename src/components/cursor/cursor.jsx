import React from 'react'
import '../cursor/cursor.css'

const Cursor = () => {
    const CR = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            const{ clientX, clientY } = e;
            const mX = clientX - CR.current.clientWidth / 2;
            const mY = clientY - CR.current.clientHeight / 2;
            CR.current.style.transform = `translate3d(${mX}px, ${mY}px, 0)`;
        });
    },[]);
  return (
    <>
    <div className='cursor' ref={CR}>
      <div className='cursor-out'></div>
    </div>
    </>
  )
}

export default Cursor