package Advanced.Abstract;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor

public class Hourly extends Employee {
	private static final double DEFAULT_HOURS_WORKED = 80;
	private static final double DEFAULT_HOURLY_WAGE = 50;
	private double hoursWorked;
	private double hourlyWage;

	public Hourly() {
		this(DEFAULT_HOURS_WORKED, DEFAULT_HOURLY_WAGE);
	}

	public Hourly(String name) {
		super(name);
		this.hoursWorked = DEFAULT_HOURS_WORKED;
		this.hourlyWage = DEFAULT_HOURLY_WAGE;
	}
	public Hourly(String name, double hoursWorked, double hourlyWage) {
		super(name);
		this.hoursWorked = hoursWorked;
		this.hourlyWage = hourlyWage;
	}

	@Override
	public double getPay() {
		return hoursWorked * hourlyWage;
	}

	@Override
	public String toString() {
		return String.format("[Name(%s), HiredDate(%s), Pay(%s)]", getName(), getHireDate(), getPay());
	}
}
