# Netflix clone

- Typescript
- express
- CRA
- mongoDB
- mocha

- AWS

## API

### /api/browse

- drama
- movie
- contents that user is watching
- hot content
- netflix popular content

### /api/browse?detail-line=[drama, movie, ...]

- 각 라인의 세부 정보를 볼 수 있는 상태로 변환함

### /api/browse?detail=[:id]

- `/api/browse?detail-line=[해당라인]&detail=[:id]`로 리다이렉트
- 상세 정보
  - 제작, 장르, 출연, 특징, 관람 등급
- 비슷한 컨텐츠
  - 연도, 시즌 수
  - 짧은 소개
  - 찜하기
- 회차 정보
  - 여러 회 나열
- 콘텐츠 정보
  - 제목
  - 연도
  - 시즌 수
  - 회차 제목
  - 해당 회차 간단 소개
  - 재생버튼
  - 찜하기
  - 좋아요 싫어요

### /api/browse/my-list

- 내가 찜한 컨텐츠

### /api/browse/genre/:id

- 장르

### /api/watch/:id

- play :id content

## DB

### User

- ID
- PW
- Likes
- DisLikes
- MyList

### Drama

- Title
- ShortDesc
- LongDesc
- ProductionYear
- Series
- Season
- Genre
- Grade

### Movie

- Title
- Short Desc
- LongDesc
- ProductionYear
- Genre
- Grade
