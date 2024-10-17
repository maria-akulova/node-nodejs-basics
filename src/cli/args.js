const parseArgs = () => {
    const envRSS = process.argv.slice(2);
    let result = [];
    for (let i = 0; i < envRSS.length; i += 2) {
        result.push(envRSS[i].slice(2) + ' is ' + envRSS[i + 1]);
    }
    console.log(result.join(', '));
};

parseArgs();