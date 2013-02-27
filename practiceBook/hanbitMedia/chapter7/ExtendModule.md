Chapter 7. 외부 웹 모듈
==

- 외부 모듈
- NPM(Node Package Manager)를 기반으로 모듈을 공유

```
$ npm install 모듈명
```

## EJS 모듈


- 설치
```
$ npm install ejs
```

#### EJS 모듈?
- 템플릿 엔진 모듈
- http://embeddedjs.com/
- embeded javascript
- JSP와 비슷하다
- HTML 태그 문법 안에 javascript 문법을 사용한다. 

- EJS 페이지를 HTML 페이지로 변환할 때 render()메서드를 사용
```
ejs.render(data);
```

#### EJS 파일 형식
> <% CODE %>  자바스크립트 코드를 입력한다.
> <%= VALUE %> 데이터를 출력한다.


#### 데이터 전달
- ejs.render() 메서드에서 두 번째 매개 변수에 전달하고자 하는 데이터를 입력한다.


#### 어디에 사용?
- 동적 웹 페이지를 생성할 때 사용한다.
- HTML 페이지 소스 코드는 한 번 생성하면 변화하지 않는다. 따라서 이렇게 템플릿 엔진을 사용하여 클라이언트에게 항상 다른 페이지를 보여준다.


## Jade 모듈

- 설치
```
$ npm install jade
```

#### Jade모듈?
- node template enginge
- http://jade-lang.com/
- html을 꺾쇠(<>) 사용 없이 간단하게 작성하는 템플릿
- 아래의 HAML 파일 형식 참고

- Jade 페이지를 HTML 페이지로 변환할 때 compile()메서드를 사용
```
jade.complie(data);
```
여기서 ejs.render()와의 차이점은 ejs의 경우 str값을 return 하지만 jade.compile은 함수를 return 한다는 것이다.


#### HAML 파일 형식
- Haml (HTML abstraction markup language)
- 들여쓰기가 매우 중요 -> 들여쓰기로 HTML 태그 구조 형성
- cf) 들여쓰기는 탭과 띄어쓰기 중 한 가지 형태만 사용해야 함. (Or error)
- 태그 속성 값은 괄호를 사용하고 여러개일 경우 쉼표 사용하여 구분


#### Jade 파일 형식
> - CODE   자바스크립트 코드 입력
> #{VALUE}   데이터 출력
> = VALUE    데이터 출력


#### 데이터 전달
- jade.compile() 결과로 받은 함수 fn()의 파라미터로 JSON 형태로 입력한다.