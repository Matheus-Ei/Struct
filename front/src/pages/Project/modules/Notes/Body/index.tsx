// Libraries
import useSafeContext from 'hooks/useSafeContext';
import useToggle from 'hooks/useToggle';
import { ProjectContext } from 'pages/Project/context';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Local
import { NotesContext } from './context';
import Node from './Node';
import { NodeElementType } from './types';

const Body = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [updaterAnchor, nodesUpdater] = useToggle(false);
  const { page } = useSafeContext(ProjectContext);

  const nodesContent = page.data?.module_information as NodeElementType[];

  const [nodes, setNodes] = useState<Array<NodeElementType>>([]);

  useEffect(() => {
    setNodes(nodesContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page.data?.id]);

  const createNodes = useCallback(
    (node: NodeElementType) => (
      <Node
        key={node.id}
        id={node.id}
        content={node.content}
        next_id={node.next_id}
        type={node.type}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updaterAnchor],
  );

  const renderNodes = useMemo(() => {
    return nodes.map(createNodes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes.length, createNodes]);

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
