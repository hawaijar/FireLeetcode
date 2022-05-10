public struct Stack<E> {
    private var data: [E] = []
    public init(){}

    public var isEmpty: Bool {
        return data.count == 0
    }
    // push function
    public mutating func push(withValue element: E) -> Void {
        data.append(element)
    }
    // peek function
    public func peek() -> E? {
        return data.last
    }
    // pop function
    public mutating func pop() -> E? {
        return data.popLast()
    }
}

public func balancedBrackets(string: String) -> Bool {
        // base case
        if string.isEmpty {
            return true
        }
        let BMATCHERS: [Character: Character] = [
            ")": "(",
            "}": "{",
            "]": "["
        ]
        var stack = Stack<Character>()
        for char in string {
            if BMATCHERS.keys.contains(char) {
                if stack.isEmpty {
                    return false
                }
                guard let top = stack.pop() else {
                    return false
                }
                if BMATCHERS[char] != top {
                    return false
                }
            }
            else if BMATCHERS.values.contains(char) {
                stack.push(withValue: char)
            }
        }
        if stack.isEmpty {
            return true
        }
        return false
    }
