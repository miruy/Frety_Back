# Frety
- 기타 악보를 직접 제작할 수 있는 서비스입니다.
- 개발 기간 : 24.09.24 ~ 24.10.13
- 개발 인원 : 1명
- Link : [frety.me](https//www.frety.me)
- 요구사항 정의서 : [Frety 요구사항 및 시스템 설계](https://www.figma.com/slides/v76VeO3DwQggoJY3oJBfVs/Chordric?node-id=1-26&t=IAOItsufOAHjJaXt-1)

<br>

# 기술 스택
- Language : Java, Javascript, HTML
- Library : svguitar
- Framework : Springboot 3.3.4
- JDK : 21
- BuildTool : Gradle
- DB : H2 (MySQL, RDS로 이전 예정)
- Server : AWS EC2, Ubuntu 24.04
- CI / CD : Github Actions, Git Container Registry, Docker

<br>
<br>

# 프로젝트 구조
<img width="300" alt="image" src="https://github.com/user-attachments/assets/4a032c69-ae42-416c-aa64-091f46a646cf">

<br>
<br>
<br>

# DB ERD
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/d90fde8c-fdec-4079-952a-c16531f3c7c5">

<br>
<br>
<br>

# 아키텍처
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/4648fe7a-f11c-4653-bb77-2b13b62f7341">

<br>
<br>
<br>

# 기능 설명
- 기타 연주 도메인에 기반하여 개발하였습니다.
- 기타 코드, 연주법, 악보 표기법, 연주 테크닉 등 기타 연주에 필요한 다양한 요소를 반영하였습니다.

<details>
<summary>회원</summary>
  
- 회원가입
  - '비밀번호'와 '비밀번호 확인'이 일치하는지 체크
  - 이미 가입된 회원인지 체크

- 로그인
  - 회원가입된 회원인지 체크
</details>

<details>
<summary>악보</summary>

- 악보 제작
  - 가수명
  - 제목
  - 카포
  - 주법
  - 가사
    - 한 줄씩 입력 가능 또는 전체 가사 붙혀넣기 입력 가능
    - 가사 입력 후 엔터 시 한 줄의 각 음절을 분리하여 key-value(음절-기타 코드)형식으로 파싱한 후 가사 입력칸 위로 업로드
    - 한 줄씩 삭제 가능
  - 기타 코드 선택기
    - 파싱되어 업로드 된 가사의 각 음절을 클릭하면 기타 코드 선택기 표시
    - 163개의 기타 코드 선택 가능
    - 선택한 코드 삭제(지우기) 가능
    - 기타 코드 클릭(선택) 시 해당 음절 위에 해당 코드 바로 표시

- 악보 전체 조회
  - 최근 등록된 악보
    - 10개씩 악보 데이터 표시
    - 페이지네이션
    - 악보에 달린 댓글 수 표시
  - 인기 악보
    - 10개씩 악보 데이터 표시
    - 페이지네이션
    - 악보에 달린 댓글 수 표시
 
- 악보 상세 조회
  - 악보 정보
    - 가수명
    - 제목
    - 카포
    - 주법
    - 가사 및 코드
    - 코드 다이어그램
    - 악보 제작자
    - 등록일, 수정일
    - 좋아요 버튼 및 개수
  - 댓글
    - 답글
   
- 악보 검색
  - 가수명, 제목, 악보 제작자명으로 검색 가능
    - 10개씩 악보 데이터 표시
    - 페이지네이션
    - 악보에 달린 댓글 수 표시

- 악보 수정
  - 악보 제작자만 수정 가능

- 악보 삭제
  - 악보 제작자만 삭제 가능  
</details>

<details>
<summary>댓글</summary>

- 댓글 작성

- 댓글 수정
  - 댓글 작성자만 수정 가능  

- 댓글 삭제
  - 댓글 작성자만 삭제 가능  
</details>

<details>
<summary>답글</summary>

- 답글 작성

- 답글 수정
  - 답글 작성자만 수정 가능  

- 답글 삭제
  - 답글 작성자만 삭제 가능  
</details>

