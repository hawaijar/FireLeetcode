const Node = function (key, value) {
	this.key = key;
	this.value = value;
	this.next = null;
	this.previous = null;
};

const LRUCache = function (capacity) {
	this.head = null;
	this.tail = null;
	this.capacity = capacity;
	this.count = 0;
	this.hash = {};
};
LRUCache.prototype.get = function (key) {
	// see if the node exist in the cache
	if (this.hash[key]) {
		// we need to bump/up (push to the tail) the node (represents MRU)
		if (this.head !== this.tail) {
			const node = this.hash[key];
			// if the node is the head of the list
			if (this.head === node) {
				this.head = this.head.next;
				this.head.previous = null;
				node.previous = this.tail;
				this.tail.next = node;
				this.tail = node;
			}
			// if the node is somewhere between the head & tail of the list
			else if (this.tail !== node) {
				// link the nodes before and after it
				node.previous.next = node.next;
				node.next.previous = node.previous;
				// push the node to the tail
				node.previous = this.tail;
				this.tail.next = node;
				this.tail = node;
			}
		}
		// list containing single node
		return this.hash[key].value;
	} else {
		return -1;
	}
};
LRUCache.prototype.put = function (key, value) {
	// if the list is empty
	if (this.head === null) {
		const node = new Node(key, value);
		this.hash[key] = node;
		this.head = node;
		this.tail = node;
		this.count += 1;
		return;
	}
	// check if the key is already there in the cache (key update)
	// if it's there, push it to the tail
	if (this.hash[key]) {
		const node = this.hash[key];
		// update the value
		node.value = value;
		// check if it's the only node available in the list; update and return if that's the case
		if (this.head === this.tail) {
			this.hash[key].value = value;
			return;
		}
		// if the node is the head of the list
		if (this.head === node) {
			this.head = this.head.next;
			this.head.previous = null;
			node.previous = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
		// if the node is somewhere between the head & tail of the list
		else if (this.tail !== node) {
			// link the nodes before and after it
			node.previous.next = node.next;
			node.next.previous = node.previous;
			// push the node to the tail
			node.previous = this.tail;
			this.tail.next = node;
			this.tail = node;
		}
	} else {
		const node = new Node(key, value);
        // update hash
		this.hash[key] = node;
		// check the capacity first
		if (this.count < this.capacity) {
			this.count += 1;
		} else {
			const temp = this.head;
			// if it's the only node
			if (this.head.next === null) {
				this.head = node;
				this.tail = node;
				delete this.hash[temp.key];
				return;
			}
			// push out the first node
			this.head = this.head.next;
			this.head.previous = null;
			// delete the key from hash also
			delete this.hash[temp.key];

		}
		// push the node to the tail of the list
		node.previous = this.tail;
		this.tail.next = node;
		this.tail = node;
	}
};
