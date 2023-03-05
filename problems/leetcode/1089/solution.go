package main

func duplicateZeros(arr []int) {
	q := make([]int, 0)

	for i := 0; i < len(arr); i++ {
		q = append(q, arr[i])

		if arr[i] == 0 {
			q = append(q, 0)
		}

		arr[i] = q[0]
		q = q[1:]
	}
}
