const parseEnv = () => {
    const envRSS = Object.entries(process.env).filter(([key, _]) => key.startsWith("RSS_"));
    console.log(envRSS.map(pair => pair.join('=')).join('; '));
};

parseEnv();