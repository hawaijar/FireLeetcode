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

public class StackAlgorithm {
    public func nextGreaterElement(from array: [Int]) -> [Int] {
        // base case
        if array.count == 0 {
            return []
        }
        var stack = Stack<Int>()
        var output: [Int] = [Int](repeating: -1, count: array.count)

        for i in 0..<array.count * 2 {
            let index = i % array.count

            while !stack.isEmpty, array[index] > array[stack.peek()!] {
                let top = stack.pop()!
                output[top] = array[index]
            }
            stack.push(withValue: index)
        }

        return output
    }
}

// Unit Testing function
func test_next_greater_elements() {
        var array = [2, 5, -3, -4, 6, 7, 2]
        XCTAssertEqual(StackAlgorithm().nextGreaterElement(from: array), [5,6,6,6,7,-1,5])
        array = [1, 2, 3, 5, 5]
        XCTAssertEqual(StackAlgorithm().nextGreaterElement(from: array), [2, 3, 5, -1, -1])
}
