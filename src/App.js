import React from 'react';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { useSpring, animated } from "react-spring";
import './App.css';

const Card = ({style, data, text="lorem ip sum dolor ist"}) => (
  <animated.span style={{...style, ...data}} className="item">{text}</animated.span>
); 

export default function App() {
  const items = ['Lorem', 'ipsum', 'dolor', 'sit'];
  // const trail = useTrail(items.length, {
  //   from: { opacity: 0, x: 20, height: 0 },
  //   to: {opacity: 1, x: 0, height: 80}
  // });

  const props = useSpring({from: {opacity: 0}, to: {opacity: 1}});

  // return (
  //   <div className="trails-main">
  //     <div>
  //       {trail.map(({ x, height, ...rest }, index) => (
  //         <animated.div key={index} className="text" style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
  //           <Card style={{height}} text={items[index]} />
  //         </animated.div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div style={{height: "100vh", width: "100vw", backgroundColor: "#333"}}>
      <AutoSizer>
        {({height, width}) => (
          <FixedSizeList
            height={height}
            width={width}
            itemSize={85}
            itemCount={1000}
            data={props}
          >
            {Card}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
};
