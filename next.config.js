/** @type {import('next').NextConfig} */
module.exports = {
    //output: 'export',
    images: {
        remotePatterns: [
            toRemotePattern(process.env.GOOGLE_ACCOUNT_IMAGE_URL),
        ],
    },
};

function toRemotePattern(urlString) {
    const url = new URL(urlString);
    return {
        protocol: url.protocol.replace(':', ''),
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
    }
}
