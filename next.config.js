const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 요청을 리다이렉션할 경로 패턴
        destination: 'https://serve-less.vercel.app/api/:path*', // 실제 API 엔드포인트
      },
    ]
  },
}

module.exports = nextConfig
