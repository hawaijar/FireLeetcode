import Foundation

public struct Stack<E> {
    private var data:[E] = []

    public init() {}

    public mutating func push(_ element: E) {
        data.append(element)
    }

    @discardableResult
    public mutating func pop() -> E? {
        data.popLast()
    }

    public func peek() -> E? {
        data.last
    }

    public func isEmpty() -> Bool {
        peek() == nil
    }
}

class MinMaxStack {
    var stack:Stack<Int>
    var minMaxStack: Stack<(min: Int, max: Int)>

    init() {
        stack = Stack<Int>()
        minMaxStack = Stack<(min: Int, max: Int)>()
    }

    func peek() -> Int? {
        if !stack.isEmpty() {
            return stack.peek()
        }
        return nil
    }

    func pop() -> Int? {
        if !minMaxStack.isEmpty() {
            minMaxStack.pop()
        }

        if !stack.isEmpty() {
            return stack.pop()
        }

        return nil
    }

    func push(number: Int) {
        var minMax = (min: number, max: number)

        if minMaxStack.isEmpty() {
            minMaxStack.push(minMax)
        }

        else {
            if let top = minMaxStack.peek() {
                if top.min < number {
                    minMax.min = top.min
                }
                if top.max > number {
                    minMax.max = top.max
                }
            }
            minMaxStack.push(minMax)

        }
        stack.push(number)
    }

    func getMin() -> Int? {
        if !minMaxStack.isEmpty() {
            return minMaxStack.peek()?.min
        }
        return nil
    }

    func getMax() -> Int? {
        if !minMaxStack.isEmpty() {
            return minMaxStack.peek()?.max
        }
        return nil
    }
}
