const shortenNumber = (number:number) => {
    return (number > 10**6) ? (number/10**6).toFixed(1)+'M' : (number < 10**6 && number > 10**3) ? (number/10**3).toFixed(1)+'K' : number;
}

export default shortenNumber;