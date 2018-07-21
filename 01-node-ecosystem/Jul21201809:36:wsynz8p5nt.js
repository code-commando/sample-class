/**
 * constructor to create Tree with default root
 */
// woooooooooo
class Tree{
  constructor(val){
    this.root = new Node(val);
  }
  /**
   * method to push new values on tree
   * @param {Node.val} val 
   */
  add(val){
    let node = new Node(val);
    if(this.root === null){
      this.root = node;
      return;
    }
    let current = this.root;
    while(current){
      if(val>current.val){
        if(!current.right){
          current.right = node;
          break;
        }
        current = current.right;
      }
      else if(val<current.val){
        if(!current.left){
          current.left = node;
          break;
        }
        current = current.left;
      }
      else{
        break;
      }
    }
  }
  contains(val){
    let current = this.root;
    while(current){
      if(current.val === val){
        return true;
      }
      else if(current.val > val){
        current = current.right;
      }
      else{
        current = current.right;
      }
    }
    return false;
  }
  /**
   * fizzbuzz function to perform in-order traversal and update node values with fizz,buzz,fizzbuzz words
   * @param {Tree.root} root 
   */
  fizzbuzz(root)
  {
    if(root.left){
      this.fizzbuzz(root.left);
    }
    if(root.val%15 ===0){
      root.val = 'fizzbuzz';
    }
    else if(root.val % 5 === 0){
      root.val = 'buzz';
    }
    else if(root.val % 3 === 0){
      root.val = 'fizz';
    }
    if(root.right){
      this.fizzbuzz(root.right);
    }
  }
}
class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let fizzbuzzTree = new Tree(27);
    fizzbuzzTree.add(6);
    fizzbuzzTree.add(3);
    fizzbuzzTree.add(31);
    fizzbuzzTree.fizzbuzz(fizzbuzzTree.root);
	console.log(fizzbuzzTree)