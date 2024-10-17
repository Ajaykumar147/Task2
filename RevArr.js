function reverseArray() {
    let arr = document.getElementById('reverse-array').value.split(',').map(Number);
    let left = 0;
    let right = arr.length - 1;
    
    // Reverse array in-place
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    document.getElementById('reverse-result').innerText = arr.join(', ');
}