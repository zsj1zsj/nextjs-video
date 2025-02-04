/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        domains: ['raw.githubusercontent.com'],
        remotePatterns:[
            {
                protocol:'https',
                hostname:'raw.githubusercontent.com',
                port:'',
                pathname:'/PokeAPI/sprites/master/sprites/pokemon/**',
            }
        ]
    }
};

export default nextConfig;