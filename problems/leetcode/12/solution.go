package _2

import (
	"math"
	"strings"
)

func intToRoman(num int) string {
	roman := ""
	remaining := num
	nums := [13]int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	keys := [13]string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	for i := 0; i < len(nums); i++ {
		roman += strings.Repeat(keys[i], int(math.Floor(float64(remaining/nums[i]))))
		remaining = remaining % nums[i]
	}

	return roman
}
