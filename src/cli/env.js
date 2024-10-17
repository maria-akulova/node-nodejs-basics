const parseEnv = () => {
    const envRSS = Object.entries(process.env)
        .filter(([key, _]) => key.startsWith("RSS_"))
        .map(pair => pair.join('='));
    console.log(envRSS.join('; '));
};

parseEnv();