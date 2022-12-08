let b = 100
if (b > 75 && b <= 100) {
    console.log("top quartile")
} else if (b > 50 && b <= 75) {
    console.log("upper quartile")
} else if (b > 25 && b <= 50) {
    console.log("lower quartile")
} else if (b >= 0 && b <= 25) {
    console.log("bottom quartile")
} else {
    console.log("N/A")
}

