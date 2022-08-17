class BSTNode {
  value: number;
  left?: BSTNode;
  right?: BSTNode;

  constructor(value: number) {
    this.value = value;
  }
  // insert operation
  insert(value: number) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BSTNode(value);
      } else {
        this.left?.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BSTNode(value);
      } else {
        this.right?.insert(value);
      }
    }
    return this;
  }
  // contains/find operation
  contains(value: number): boolean {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        return this.left?.contains(value);
      }
    } else {
      if (!this.right) {
        return false;
      } else {
        return this.right?.contains(value);
      }
    }
  }
  findMinValue() {
    let currentNode: BSTNode | null = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  // remove/delete operation
  remove(value: number, parent?: BSTNode) {
    if (value < this.value) {
      if (this.left) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.remove(value, this);
      }
    } else {
      // found the node to be deleted

      // case 1: when the node has both children
      if (this.left && this.right) {
        const minRightValue = this.right?.findMinValue();
        this.value = minRightValue;
        this.right.remove(minRightValue, this.right);
      } else {
        // parent node is required from here!
        if (parent) {
          // case 2: when the node has only one child, and it has a parent
          if (this.left) {
            if (parent.left === this) {
              parent.left = this.left;
            } else {
              parent.right = this.left;
            }
          }
        } else {
          // case 3: when the node is ROOT and has only one child, and it *doesn't* have a parent --> ROOT node
          if (this.left) {
            this.value = this.left.value;
            this.right = this.left.right;
            this.left = this.left.left;
          } else if (this.right) {
            this.value = this.right.value;
            this.left = this.right.left;
            this.right = this.right.right;
          } else {
            // ROOT node with no children
            // case 4: When the node is ROOT and doesn't have a child
          }
        }
      }
    }
  }
}
