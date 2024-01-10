package Solid;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Stream;

interface Filter<T> {
    Stream<T> filter(List<T> items, Predicate<T> spec);
}

class MyFilter<T> implements Filter<T> {
    @Override
    public Stream<T> filter(List<T> items, Predicate<T> spec) {
        return items.stream().filter(spec);
    }
}

enum Color {
    RED, GREEN, BLUE
}
enum Size {
    SMALL, MEDIUM, LARGE
}
class Product {
    private Color color;
    private Size size;

    public Product(Color color, Size size) {
        this.color = color;
        this.size = size;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public String toString() {
        return "Color: " + color + " Size: " + size;
    }
}

public class ocp {
    public static void main(String[] args) {
        var products = List.of(
                new Product(Color.GREEN, Size.SMALL),
                new Product(Color.BLUE, Size.LARGE),
                new Product(Color.RED, Size.MEDIUM)
        );

        var pf = new MyFilter<Product>();
        Predicate<Product> colorSpec = p -> p.getColor() == Color.GREEN;
        Predicate<Product> sizeSpec = p -> p.getSize() == Size.LARGE;
        pf.filter(products, colorSpec).forEach(System.out::println);
        pf.filter(products, sizeSpec).forEach(System.out::println);
        Predicate<Product> colorAndSizeSpec = colorSpec.or(sizeSpec);
        pf.filter(products, colorAndSizeSpec).forEach(System.out::println);
    }
}
