// Local
import NotePage from 'services/page/modules/note';
import { NodeElementType } from '../../types';
import { NodeState } from '../../context';
import { idType } from 'types/global';

class Operations {
  private node: NodeState;

  constructor(node: NodeState) {
    this.node = node;
  }

  // Add one node
  public async add(pageId: idType, prevNodeId?: idType) {
    const response = await NotePage.addNode(pageId, prevNodeId);

    const data = response.data.newNode;

    // Create the new node
    const newNode: NodeElementType = data;

    // Update the nodes array locally
    this.node.set((oldNodes) => {
      const updated = [...oldNodes, newNode];

      const prevNode = updated.find((node) => node.id === prevNodeId);
      if (prevNode) prevNode.next_id = newNode.id;

      return this.sort(updated);
    });
  }

  // Get the list in order
  private sort(nodes: NodeElementType[]): NodeElementType[] {
    if (nodes.length === 0) return [];

    const nodeMap = new Map<idType, NodeElementType>();
    nodes.forEach((node) => nodeMap.set(node.id, node));

    const nextIds = new Set<idType>(nodes.map((node) => node.next_id));

    const head = nodes.find((node) => !nextIds.has(node.id));
    if (!head) {
      throw new Error('Head of the list not finded');
    }

    const organized: NodeElementType[] = [];
    let current: NodeElementType | undefined = head;

    while (current) {
      organized.push(current);
      current = nodeMap.get(current.next_id);
    }

    return organized;
  }

  // Remove one node
  public async remove(nodeId: idType) {
    if (this.node.value.length === 1) return;

    await NotePage.deleteNode(nodeId);

    // Remove locally
    this.node.set((oldNodes) => {
      let updated = [...oldNodes];

      const prevNode = updated.find((node) => node.next_id === nodeId);
      const currentNode = updated.find((node) => node.id === nodeId);

      if (!currentNode) {
        throw new Error('Node to remove not found');
      }

      // Set the list to ignore the current node
      if (prevNode) {
        prevNode.next_id = currentNode.next_id;
      }

      // Filter the current node out of the list
      updated = updated.filter((node) => node.id !== nodeId);

      return this.sort(updated);
    });
  }

  // Change the position of a node
  public async move(nodeId: idType, newPrevId: idType) {
    if (nodeId === newPrevId) return;

    const oldIndex = this.node.value.findIndex((node) => node.id === nodeId);
    const newIndex = this.node.value.findIndex((node) => node.id === newPrevId);

    await NotePage.moveNode(nodeId, newPrevId);

    // Move locally
    this.node.set((oldNodes) => {
      let updated = [...oldNodes];

      // Get all the needed nodes
      const lastPrevNode = updated.find((node) => node.next_id === nodeId);
      const currentNode = updated.find((node) => node.id === nodeId);
      const newPrevNode = updated.find((node) =>
        oldIndex < newIndex
          ? node.id === newPrevId
          : node.next_id === newPrevId,
      );

      if (!currentNode || !newPrevNode) return oldNodes;

      // Remove the currentNode from the original position
      if (lastPrevNode) lastPrevNode.next_id = currentNode.next_id;

      // Add the node in the new position
      currentNode.next_id = newPrevNode.next_id;
      newPrevNode.next_id = nodeId;

      return this.sort(updated);
    });
  }

  // Update the content of a node
  public async update(nodeId: idType, content?: string, type?: string) {
    await NotePage.editNode(nodeId, undefined, content, type);

    // Update locally
    this.node.set((oldNodes) => {
      const updated = [...oldNodes];

      const currentNode = updated.find((node) => node.id === nodeId);
      if (!currentNode) return oldNodes;

      currentNode.content = content ? content : currentNode.content;
      currentNode.type = type ? type : currentNode.type;

      return updated;
    });
  }
}

export default Operations;
