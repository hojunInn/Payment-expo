import Constants from 'expo-constants';

const ENV = {
    local: {
        SERVER_URL: 'http://localhost:1337',
        SEARCH_URL: 'http://34.97.247.67:9200/_search',
        WORKSPACE_URL: 'http://localhost:3001'
    },
    dev: {
        SERVER_URL: 'https://betastrapi.defora.io/',
        SEARCH_URL: 'http://34.97.247.67:9200/_search',
        WORKSPACE_URL: 'http://localhost:3001'
    },
    beta: {
        SERVER_URL: 'https://beta.defora.io/enterprise',
        SEARCH_URL: 'http://34.97.247.67:9200/_search',
        WORKSPACE_URL: 'https://beta.defora.io/workspace'
    },
    prod: {
        SERVER_URL: 'https://enterprise.defora.io',
        SEARCH_URL: 'https://search.shine-through-trees.com/elasticsearch/_search',
        WORKSPACE_URL: 'https://workspace.defora.io'
    }
}

// const getEnvVars = (env = Constants.manifest.releaseChannel) => {
const getEnvVars = (env = Constants.manifest.env.EXPO_ENV) => {
    if(env === 'dev' || env === null || env === undefined || env === '') {
        return ENV.dev;
    } else if (env === 'local') {
        return ENV.local;
    } else if (env === 'beta') {
        return ENV.beta
    } else if(env === 'prod') {
        return ENV.prod
    }
}

export default getEnvVars;