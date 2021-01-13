let mut step = if num_rows == 1 { 0 } else { - 1 };
	let mut rows: Vec<String> = vec![String::new(); num_rows as usize];
	let mut i = 0i32;

	for c in s.chars() {
		rows[i as usize].push(c);
		if i == 0 || i == (num_rows as i32 - 1) {
			step = -step;
		}
		i += step;
	}

	rows.join("")
