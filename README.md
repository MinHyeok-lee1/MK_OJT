# MK_OJT
(주)MK 신입인턴 OJT PROJECT이다.<br>
1) 신입인턴에게 총 4주동안 개발환경의 이해부터 Next.js, Nest.js, MongoDB까지 사용하여 업무능력을 향상시킨다.<br>
2) 본 프로젝트를 GitHub를 통해 형상관리를 하고 README.md 파일로 정리하는 능력을 기른다.<br><br>

## 주차별 과정
- [1월 2주차 OJT KEYWORD: 개발환경의 이해, SSH & GitHub](https://github.com/MinHyeok-lee1/MK_OJT)
1) 개발환경 구축 - VS Code, Next.js, NestJS<br>
1-1) VSC: VSC 설치 및 확장프로그램(Remote-SSH) 설치<br>
1-2) Next.js 개발환경: nextjs-env 폴더에 들어간다, 서버 시작 명령어: npm run dev 명령어 => npm run 9000 <br>
1-3) Nest.js 개발환경: nestjs-env 폴더에 들어간다, 서버 시작 명령어: npm run start:dev 명령어 => npm run start:9001 (지정 포트번호)<br><br>

2) 로컬 서버 접속 환경 구축 - SSH<br>
2-1) VSC에서 SSH연결 순서: VSC에서 Remote-SSH 설치(확장 프로그램 - srtcut: ctrl + shift + x) -> Show all cmd에서 Remote-SSH: Connect to Host..(확장 프로그램 - srtcut: ctrl + shift + x) -> (ssh 계정@접속주소 or ssh 계정@접속주소 -p 포트번호 입력)<br>
2-2) CMD에서 SSH연결 순서: 윈도우에서 설정 앱 및 기능(선택적 기능 선택) -> 기능추가(OpenSSH 클라이언트 설치) -> cmd(ssh 계정@접속주소 or ssh 계정@접속주소 -p 포트번호 입력)<br>
2-3) 서버 ufw(uncomplicated firewall)로 포트관리: 서버(ubuntu)에서 sudo로 포트 열기 -> sshd(SSH Demon)포트 승인 -> 해당 포트로 SSH 접속해서 포트확인<br><br>

3) Git & Github 사용법 - 소스코드 형상 관리 / README.md<br>
3-1) Git & Githu: Git 홈페이지에서 Git 설치 및 VSC 확장프로그램(Github)설치<br>
3-2) Push, Pull: Push 순서:git ( add -> commit -> push, pull )<br>
3-3) READNE.md: 현재 작성하듯 프로젝트의 설명등의 형상관리를 할 수 있음(추가로 사용설명서 등..)<br><br>

- [1월 3주차 OJT KEYWORD: Next.js Dir(ENV)](https://github.com/MinHyeok-lee1/MK_OJT/tree/master/nextjs-env)
1) nextjs.org 튜토리얼 클론 코딩 - 로컬 서버의 개인 작업공간 이용<br>
2) Git을 통해 소스코드 관리<br>
3) 학습 내용을 소스코드의 주석 및 README.md 파일로 정리<br><br>

- [1월 4주차 OJT KEYWORD: Nest.js Dir(ENV)](https://github.com/MinHyeok-lee1/MK_OJT/tree/master/nestjs-env)
1) nestjs.com 튜토리얼 클론 코딩 - 로컬 서버의 개인 작업공간 이용<br>
2) Git을 통해 소스코드 관리<br>
3) 학습 내용을 소스코드의 주석 및 README.md 파일로 정리<br><br>

- [1월 5주차 OJT KEYWORD: MongoDB Dir(ENV)](https://github.com/MinHyeok-lee1/MK_OJT/tree/master/mongodb)
1) Mongo 서버 및 접속 환경 구축<br>
2) mongoosejs.com 문서 클론 코딩 -로컬 서버의 개인 작업공간 이용<br>
3) Git을 통해 소스코드 관리<br>
4) 학습 내용을 소스코드의 주석 및 README.md 파일로 정리<br><br>

## 이슈
- GitHub 사용법 & 각 학습폴더 생성 & VS Code, Next.js(React), NestJS 전체적으로 프로젝트를 진행하며 발생한 이슈를 기록
- 2주차 
1. SSH 로컬 작업환경 개발환경 구축중 이슈발생: SSH연결 할 때 .ssh\config 에서 User(계정)를 dev로 하지않아서 Permission이 denied되는 상황이 발생하였다.<br>
* .ssh\config에서 User를 dev로 설정해주어서 해결 User는 그냥 단순한 별명이 아닌 계정이름이다. Host는 상관없지만 User는 맞춰줘야함.<br>
2. SSH 연결 시에 서버쪽에서 포트를 연결할 때 필요한 명령어 포트 허용 및 vim에서 sshd 포트등록 및 재시작에 관한 이슈
* 포트 허용(ufw 방화벽 설정)<br>
Ubuntu 는 앞에 sudo 입력<br>
설치: apt-get -y install ufw<br>
활성화: ufw enable<br>
비활성화: ufw disable<br>
전부막음: ufw default deny<br>
전부허용: ufw default allow<br>
http로 허용: ufw allow http<br>
sudo ufw allow ssh<br>
sudo ufw allow http<br>
sudo ufw allow ftp<br>
sudo ufw allow mysql<br>
막음: ufw deny http<br>
포트 80 허용: ufw allow 80 <=<=<=<=<=<br>
포트 80 막음: ufw deny 80<br>
포트 80 포트/ tcp 프로토콜로 막음: ufw deny 80/tcp<br>
허용: ufw allow 80/allow<br>
특정IP(port) 허용: sudo ufw allow from 111.111.111.111 to any port 21<br>
특정IP(port) 막음: sudo ufw deny from 111.111.111.111 to any port 21<br>

* sshd(SSH Demon)포트 승인<br>
sudo vim /etc/ssh/sshd_config -> vim에서 SSH Port추가(..22번)<br>
sudo service sshd restart<br>
exit<br>

- 3주차: 1월 3주차 OJT: Next.js 학습,

- 4주차: 1월 4주차 OJT: Nest.js 학습, 

- 5주차: 1월 5주차 OJT: MongoDB 학습,<br>

## 참고

# VSC Shortcut Windows<br>
- VSC ShortCut Image: https://code.visualstudio.com/docs/getstarted/tips-and-tricks<br>
<img src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png">

# MARKDOWN(.md)_ README File
- Github README.md 작성방법: https://github.com/lsh424/MARKDOWN/blob/master/README.md<br>
MARKDOWN 정리, 실습 for README.md

## 1. 제목(글머리) 작성
# H1 제목  
## H2 부제목
### H3 소제목
#### H4 제목4
##### H5 제목5
###### H6 제목6


## 2. 번호 없는 리스트 작성
* 리스트1
- 리스트2
+ 리스트3
    
## 3. 번호 있는 리스트 작성
1. 리스트1
2. 리스트2
3. 리스트3 

## 4. 이텔릭체(기울어진 글씨) 작성
*텍스트*

## 5. 굵은 글씨 작성
**텍스트**

## 6. 인용
> 인용1

> 인용2
>> 인용안의 인용

## 7. 수평선 넣기

---
  
## 8. 링크 달기
(1) 인라인 링크  

[블로그 주소](https://lsh424.tistory.com/)

(2) 참조 링크  

[블로그 주소][blog]

[blog]: https://lsh424.tistory.com/

## 9. 이미지 추가하기
![이탈리아 포지타노](https://user-images.githubusercontent.com/31477658/85016059-f962aa80-b1a3-11ea-8c91-dacba2666b78.jpeg)

### 이미지 사이즈 조절
<img src="https://user-images.githubusercontent.com/31477658/85016059-f962aa80-b1a3-11ea-8c91-dacba2666b78.jpeg"  width="700" height="370">

### 이미지 파일로 추가하기
<img alt="이미지 파일이 없어서 안나옴" src="Image.jpeg" width="700">

## 10. 코드블럭 추가하기

```swift
public struct CGSize {
  public var width: CGFloat
  public var heigth: CGFloat
  ...
}
```

## etc

**텍스트 굵게**  
~~텍스트 취소선~~

### [개행]  

스페이스바를 통한 문장개행  
스페이스바를 통한 문장개행  

br태그를 사용한 문장개행
<br>
<br>
br태그를 사용한 문장개행


### [체크박스]

다음과 같이 체크박스를 표현 할 수 있습니다. 
* [x] 체크박스
* [ ] 빈 체크박스
* [ ] 빈 체크박스

### [이모지 넣기]
❤️💜💙🤍

### [표 넣기]
|왼쪽 정렬|가운데 정렬|오른쪽 정렬| 
|:---|:---:|---:| 
|내용1|내용2|내용3| 
|내용1|내용2|내용3| 

<br>
