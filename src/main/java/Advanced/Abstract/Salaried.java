package Advanced.Abstract;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.text.NumberFormat;

@Getter
@Setter
public class Salaried extends Employee {
	private static final double DEFAULT_SALARY = 120000;
	private double salary;
	public Salaried() {}
	public Salaried(String name) {
		this(name, DEFAULT_SALARY);
	}
	public Salaried(String name, double salary) {
		super(name);
		this.salary = salary;
	}
	@Override
	public double getPay() {
		return salary / 12;
	}

	@Override
	public String toString() {
		NumberFormat nf = NumberFormat.getCurrencyInstance();
		nf.setMaximumFractionDigits(2);
		return String.format("[Name(%s), HiredDate(%s), Pay(%s)]", getName(), getHireDate(), nf.format(getPay()));
	}
}
