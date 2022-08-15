class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value: number) {
    let currentNode: BST = this;
    while (true) {
      // check whether the current node value is same as the 'value'
      if (currentNode.value === value) {
        return true;
      }
      if (value < currentNode.value) {
        // check the presence of left node
        if (currentNode.left === null) {
          return false;
        }
        currentNode = currentNode.left;
      } else {
        // check the presence of right node
        if (currentNode.right === null) {
          return false;
        }
        currentNode = currentNode.right;
      }
    }
  }
  getMinValue(): number {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
  remove(value: number, parent: BST | null = null): BST | null {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else {
      // node to be deleted is found

      // case 1: node has both children
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right;
      }
    }

    return this;
  }
}
