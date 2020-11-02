# nodeMovieApp
Node, React Movie Web Application

Boiler-plate 사용
1. 더 빠르게 개발을 완성하기 위해
2. 중요한 부분을 더 집중할 수 있기 위해
https://github.com/jaewonhimnae/boilerplate-mern-stack


npm install 을 통해 종속성 다운로드
cd client 후 npm install 하여 클라이언트 종속성 다운로드

===================================================
- The MovieDB Website
https://www.themoviedb.org/

회원가입 & 로그인 - 설정 - API - 생성


- 영화를 최신 순으로 가져올 때
https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US (ko-KR)
- 상세
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US (ko-KR)
- 리뷰
https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US (ko-KR)
- 최신
https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US (ko-KR)

=> https://api.themoviedb.org/3/ 가 공통


- 이미지 가져오기
https://image.tmdb.org/t/p : 동일한 부분
/original : 이미지 사이즈 크기 (w500)
/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg : 유니크한 이미지 이름

- Grid Style은 LandingPage 뿐 아니라 다른 곳에서도 쓸 수 있기 때문에
commons 폴더를 생성하여 관리


