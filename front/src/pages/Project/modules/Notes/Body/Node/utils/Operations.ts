// Local
import { NodeState } from "../../context";
import { NodeElementProp } from "../../types";

class Operations {
    private nodes: NodeState;

    constructor(nodes: NodeState) {
        this.nodes = nodes;
    }

    // Add one node
    public add(newOrder: number) {
        this.nodes.set((oldNodes) => {
            // Make all elements with order greater than or equal to newOrder increment by 1
            const incremented = oldNodes.map((node) => {
                if (node.order > newOrder) {
                    return { ...node, order: node.order + 1 };
                }
                return node;
            });

            // Create a new node with the new order
            const newNode: NodeElementProp = {
                content: "",
                type: "paragraph",
                order: newOrder + 1,
            };

            // Add the new node to the array
            const updated = [...incremented, newNode];

            // Sort the array by order
            updated.sort((a, b) => a.order - b.order);

            return updated;
        });
    }

    // Remove one node
    public remove(oldOrder: number) {
        this.nodes.set((oldNodes) => {
            // Filter out the node with the order to be removed
            const updated = oldNodes.filter((node) => node.order !== oldOrder);

            // Make all elements with order greater than oldOrder decrement by 1
            const decremented = updated.map((node) => {
                if (node.order > oldOrder) {
                    return { ...node, order: node.order - 1 };
                }
                return node;
            });

            // Sort the array by order
            decremented.sort((a, b) => a.order - b.order);

            return decremented;
        });
    }

    // Change the position of a node
    public changePosition(oldOrder: number, newOrder: number) {
        if (oldOrder === newOrder) return;

        this.nodes.set((oldNodes) => {
            const nodeToMove = oldNodes.find((n) => n.order === oldOrder);

            if (!nodeToMove) {
                return oldNodes;
            }

            let updated = [...oldNodes];

            // Remove the node from the old position
            updated = updated.filter((n) => n.order !== oldOrder);

            if (oldOrder < newOrder) {
                // Moving forward
                // Decrement the order of the nodes that are between oldOrder+1 and newOrder
                updated = updated.map((n) => {
                    if (n.order > oldOrder && n.order <= newOrder) {
                        return { ...n, order: n.order - 1 };
                    }
                    return n;
                });
            } else {
                // Moving back
                // Increment the order of the nodes that are between newOrder and oldOrder-1
                updated = updated.map((n) => {
                    if (n.order >= newOrder && n.order < oldOrder) {
                        return { ...n, order: n.order + 1 };
                    }
                    return n;
                });
            }

            // Add the node to the new position
            const movedNode = { ...nodeToMove, order: newOrder };
            updated.push(movedNode);

            // Sort the array by order
            updated.sort((a, b) => a.order - b.order);

            return updated;
        });
    }

    // Update the content of a node
    public updateContent(order: number, content: string) {
        this.nodes.set((prev) => {
            const newNodes = [...prev];
            const { type } = newNodes[order];

            newNodes[order] = { content, type, order };

            return newNodes;
        });
    }
}

export default Operations;
