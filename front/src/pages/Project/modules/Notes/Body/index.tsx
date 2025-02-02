// Libraries
import useToggle from 'hooks/useToggle';
import { useCallback, useMemo, useRef, useState } from 'react';

// Local
import { NotesContext } from './context';
import Node from './Node';
import { NodeElementType } from './types';

const Body = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [updaterAnchor, nodesUpdater] = useToggle(false);

  const [nodes, setNodes] = useState<Array<NodeElementType>>([
    { content: 'Text 1', type: 'paragraph', order: 0 },
    { content: 'Text 2', type: 'paragraph', order: 1 },
    { content: 'Text 3', type: 'paragraph', order: 2 },
  ]);

  const createNodes = useCallback(
    (node: NodeElementType) => (
      <Node
        key={node.order}
        content={node.content}
        order={node.order}
        type={node.type}
      />
    ),
    [],
  );

  const renderNodes = useMemo(() => {
    return nodes.map(createNodes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updaterAnchor, nodes.length, createNodes]);

  const contextValue = {
    nodes: { value: nodes, set: setNodes },
    bodyRef,
    nodesUpdater,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      <div className='flex flex-col gap-1 w-full h-3/4' ref={bodyRef}>
        {renderNodes}
      </div>
    </NotesContext.Provider>
  );
};

export default Body;
