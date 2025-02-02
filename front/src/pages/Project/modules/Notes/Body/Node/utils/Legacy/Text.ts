// Local
import { NodeState } from '../../context';

class Text {
  private nodes: NodeState;

  constructor(nodes: NodeState) {
    this.nodes = nodes;
  }

  public setNode(order: number, content: string) {
    this.nodes.set((prev) => {
      const newNodes = [...prev];
      const { type } = newNodes[order];

      newNodes[order] = { content, type, order };

      return newNodes;
    });
  }

  public setType(index: number, type: string) {}

  public addNode(index: number) {}

  public removeNode(index: number) {}
}

/* public setFocus(index: number) {
    if (!this.nodes.value[index]) return null;
    const element = this.nodes.value[index].element;
    const cursor = new Cursor(element);
    cursor.focus();
    cursor.move("end");
} 

public addLine(index: number) {
    this.nodes.set((prev) => {
        const newNotes = [...prev];
        const { type, content } = newNotes[index];

        newNotes[index] = { content: `${content}<br>`, type, order: index };
        return newNotes;
    });
} */

export default Text;
