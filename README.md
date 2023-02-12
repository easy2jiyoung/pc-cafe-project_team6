# PCoding Cafe
[프로젝트 노션 링크](https://relic-cloth-7a9.notion.site/6-b63522904d0b434c933e4722ee4d506f)
다들 PC방에서 한 번 코딩해보고 싶지 않았나요? 개발 전용 PC방 PCoding Cafe로 놀러오세요!

기본 기능:
- 첫 페이지에서 회원가입 후 로그인 가능
- 로그인 후 컴퓨터를 골라서 포인트로 시간 충전
- 상품 페이지에서 장바구니 담기 및 구매 가능
- 관리자 페이지에서 회원 관리 및 상품 관리 가능
- 고객이 이용시간 또는 상품을 성공적으로 결제 시 관리자 페이지에서 이벤트 로그 업데이트

## 팀 소개
팀 이름: 코딩은 세상을 바꿔

팀원 및 업무 분담:
| 팀원 | 프론트엔드 | 백엔드 |
| --- | --- | --- |
| 강하루 @harukang | <ul><li>마이 페이지 템플릿</li><li>회원정보 수정 기능 스크립트</li><li>아이디 찾기 기능 스트립트</li></ul> | <ul><li>유저 소지 포인트 조회 api</li><li>회원정보 업데이트 api (핸드폰 번호, 패스워드, 또는 이메일)</li><li>회원정보 패스워드 암호화</li></ul> |
  | 박경진 @Kyeongjin-Park | 회원 조회 페이지 | <ul><li>로그인</li><li>유저 인증 미들웨어</li><li>관리자 (회원 조회, 포인트 수정, 회원 삭제, 사용중인 PC 종료)</li></ul> |
  | 배진영 @jbae9 | <ul><li>로그인 페이지</li><li>이용시간 결제 페이지</li><li>상품 결제 페이지 틀</li><li>상품을 장바구니에 추가, 삭제 (session storage)</li><li>잔여시간 표시</li></ul> | <ul><li>PC 목록 조회</li><li>PC 상태 업데이트</li><li>이름과 핸드폰 번호로 아이디 찾기</li><li>ID, 이름, 휴대폰 번호로 비밀번호 재설정</li><li>상품 이미지 등록 (Cloudflare R2)</li><li>이용시간 구매</li><li>상품 구매</li><li>이용시간 또는 상품 구매시 관리자 페이지에 이벤트 로그 출력 (소켓)</li></ul> |
  | 이지영 @easy2jiyoung | 고객페이지 상품 조회 페이지네이션 | <ul><li>상품 등록, 상품 조회(고객페이지), 상품 상세 조회, 상품 수정, 상품 삭제 API 작성</li><li>고객 페이지 상품 조회 Pagination 기능 구현</li><li>고객 페이지 상품 Tab 별로 productType 조회</li><li>상품 삭제 API 프론트에 연결</li></ul> |
  | 이희찬 @reggias | <ul><li>회원가입 페이지</li><li>아이디 찾기 페이지</li><li>비밀번호 찾기 페이지</li><li>비밀번호 재설정 페이지</li><li>관리자 페이지</li><li>관리자 페이지 Tab 별로 항목 조회</li><li>관리자 페이지 상품관리목록 hover시 이미지 미리보기</li></ul> | <ul><li>회원가입 API</li><li>정규 표현식 유효성 검사</li><li>bcrypt 활용 암호화</li></ul> | 

## 기술 스택
| 역할 | 기술 |
| --- | --- |
| 프론트엔드 | ![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white) ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) |
| 탬플릿 | EJS |
| 백엔드 | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) |
| 데이터베이스 | ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) |
| 클라우드 | ![Amazon RDS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white) ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white) |
| 프레임워크 | ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) |
| 협업 툴 | ![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) |

## API
[API 상세 링크](https://www.notion.so/6-b63522904d0b434c933e4722ee4d506f?pvs=4#5ab2a023463e4178af5e7702457d463a)

## ERD
![](https://relic-cloth-7a9.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff971ac52-9afd-4972-a85f-b34e1b2d22ac%2FUntitled.png?id=7d0471ac-4506-4eee-97e6-5744160b843d&table=block&spaceId=c4b6c9fd-2454-42e3-bbf3-a8a5411db531&width=880&userId=&cache=v2)

## 프로젝트 샘플
[프로젝트 시연](https://www.youtube.com/watch?v=1so8hez1LLo)

1. 첫 페이지 (로그인)
![](https://relic-cloth-7a9.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc9980dcd-56c8-4fe0-908f-15e7299a5854%2FUntitled.png?id=b977b69c-9f72-4729-9dd7-6424a0563aa0&table=block&spaceId=c4b6c9fd-2454-42e3-bbf3-a8a5411db531&width=2000&userId=&cache=v2)

2. 상품 페이지
![](https://relic-cloth-7a9.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fefc94ad6-6303-43bc-b3bc-4f8203d3a28c%2FUntitled.png?id=3ab110fd-7a3d-4eca-8b33-7b366afcbbff&table=block&spaceId=c4b6c9fd-2454-42e3-bbf3-a8a5411db531&width=2000&userId=&cache=v2)

3. 관리자 페이지
![](https://relic-cloth-7a9.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fefc94ad6-6303-43bc-b3bc-4f8203d3a28c%2FUntitled.png?id=3ab110fd-7a3d-4eca-8b33-7b366afcbbff&table=block&spaceId=c4b6c9fd-2454-42e3-bbf3-a8a5411db531&width=2000&userId=&cache=v2)

## 시간 부족으로 적용을 못 한 기능
### 상품 수정
관리자 페이지에서 상품 내용을 수정하는 API는 만들어졌지만 프론트엔드에서 적용을 못 했다. 상품 수정을 하고 싶으면 상품을 삭제 후 재등록이 가능하다.

### 고객 비밀번호 재설정
비밀번호 재설정 페이지는 만들어졌지만 API는 안 만들어졌다. 클라이언트가 이름, ID, 핸드폰를 입력하면 정보에 해당되는 유저가 존재하는지 찾고, 있다면 클라이언트가 새 비밀번호를 입력하고 패스워드를 bcrypt로 암호화한 뒤 검색된 userId의 패스워드를 업데이트하면 된다.
