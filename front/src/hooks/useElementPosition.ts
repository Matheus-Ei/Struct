// Library
import { useRef, useState, RefObject, useEffect } from 'react';

// Local
import Element from 'modules/Element';

interface Position {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const startPosition = {
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
};

const useElementPosition = <T>() => {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState<Position>(startPosition);

  useEffect(() => {
    const element = new Element(ref as RefObject<HTMLElement>);

    if (ref.current) {
      setPosition(element.position);
    }
  }, [setPosition]);

  return { ref, position };
};

export default useElementPosition;
