function solution(numbers) {
    const arr = numbers.split("");
    const answer = new Set();

    getNumber(arr, '');

    function getNumber(numbersArr, currentNumber) {
        for (let i = 0; i < numbersArr.length; i++) {
            const temp = [...numbersArr];
            temp.splice(i, 1);

            if (isPrime(parseInt(currentNumber + numbersArr[i]))) {
                answer.add(parseInt(currentNumber + numbersArr[i]))
            }

            getNumber(temp, currentNumber + numbersArr[i])
        }
    }

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return answer.size;
}
